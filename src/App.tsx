import React, { useState, useEffect } from 'react';
import { UserProgress } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeLanding } from './components/home/HomeLanding';
import { VirtualLab } from './components/lab/VirtualLab';
import { PeriodicTable } from './components/chemistry/PeriodicTable';
import { SolarSystem } from './components/space/SolarSystem';
import { BiologyExplorer } from './components/biology/BiologyExplorer';
import { PhysicsPlayground } from './components/physics/PhysicsPlayground';
import { QuizArena } from './components/quizzes/QuizArena';
import { ScienceCalculators } from './components/tools/ScienceCalculators';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { GlobalSearchModal } from './components/search/GlobalSearchModal';

const LOCAL_STORAGE_KEY = 'scienceverse_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  quizzesCompleted: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  experimentsCompleted: [],
  bookmarkedElements: [],
  completedQuizzes: [],
  unlockedAchievements: [],
  lastActiveDate: new Date().toISOString().split('T')[0],
  currentStreak: 1
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeLabExpId, setActiveLabExpId] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [dashboardOpen, setDashboardOpen] = useState<boolean>(false);

  // Load progress from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Calculate streak
        const today = new Date().toISOString().split('T')[0];
        if (parsed.lastActiveDate !== today) {
          const lastDate = new Date(parsed.lastActiveDate);
          const currentDate = new Date(today);
          const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
          if (diffDays === 1) {
            parsed.currentStreak = (parsed.currentStreak || 1) + 1;
          } else if (diffDays > 1) {
            parsed.currentStreak = 1;
          }
          parsed.lastActiveDate = today;
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse localStorage progress:', e);
    }
    return DEFAULT_PROGRESS;
  });

  // Save progress changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Handle Experiment Completion
  const handleExperimentComplete = (expId: string) => {
    setProgress((prev) => {
      const alreadyDone = prev.experimentsCompleted.includes(expId);
      const nextDone = alreadyDone ? prev.experimentsCompleted : [...prev.experimentsCompleted, expId];
      const achievements = [...prev.unlockedAchievements];

      if (nextDone.length >= 1 && !achievements.includes('lab_explorer')) {
        achievements.push('lab_explorer');
      }

      return {
        ...prev,
        experimentsCompleted: nextDone,
        unlockedAchievements: achievements
      };
    });
  };

  // Handle Quiz Completion
  const handleQuizCompleted = (scorePercent: number, totalQuestions: number) => {
    setProgress((prev) => {
      const correctCount = Math.round((scorePercent / 100) * totalQuestions);
      const achievements = [...prev.unlockedAchievements];

      if (!achievements.includes('first_quiz')) {
        achievements.push('first_quiz');
      }
      if (prev.quizzesCompleted + 1 >= 5 && !achievements.includes('quiz_master')) {
        achievements.push('quiz_master');
      }
      if (scorePercent >= 80 && !achievements.includes('high_scorer')) {
        achievements.push('high_scorer');
      }

      return {
        ...prev,
        quizzesCompleted: prev.quizzesCompleted + 1,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + totalQuestions,
        totalCorrectAnswers: prev.totalCorrectAnswers + correctCount,
        unlockedAchievements: achievements
      };
    });
  };

  const handleResetProgress = () => {
    setProgress(DEFAULT_PROGRESS);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  // Navigation router
  const handleNavigate = (tab: string, payload?: any) => {
    setActiveTab(tab);
    if (tab === 'lab' && typeof payload === 'string') {
      setActiveLabExpId(payload);
    } else {
      setActiveLabExpId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenDashboard={() => setDashboardOpen(true)}
        progress={progress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {activeTab === 'home' && (
          <HomeLanding onNavigate={handleNavigate} progress={progress} />
        )}

        {activeTab === 'lab' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Virtual Science Laboratory
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Conduct browser-based interactive experiments across physics, chemistry, and biology with real-time variable controls.
              </p>
            </div>
            <VirtualLab
              initialExpId={activeLabExpId}
              completedExpIds={progress.experimentsCompleted}
              onExperimentComplete={handleExperimentComplete}
            />
          </div>
        )}

        {activeTab === 'periodic-table' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                118-Element Interactive Periodic Table
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Explore every known chemical element from Hydrogen (1) to Oganesson (118) with accurate IUPAC data, electron configurations, and real-world uses.
              </p>
            </div>
            <PeriodicTable />
          </div>
        )}

        {activeTab === 'universe' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Universe & Solar System Explorer
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Keplerian orbital simulator, planet facts dossiers, scale size comparisons, and astrophysical deep space guides.
              </p>
            </div>
            <SolarSystem />
          </div>
        )}

        {activeTab === 'biology' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Biology Explorer
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Interactive cell cytology, DNA double-helix base pairing, human physiological systems, and ecosystem energy pyramids.
              </p>
            </div>
            <BiologyExplorer />
          </div>
        )}

        {activeTab === 'physics' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Physics Playground
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Interactive laboratories for gravity, projectile kinematics, pendulum harmonic motion, optics, and electrical circuits.
              </p>
            </div>
            <PhysicsPlayground />
          </div>
        )}

        {activeTab === 'quizzes' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Science Quiz Arena
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Test your knowledge across physics, chemistry, biology, astronomy, and earth science with instant feedback and explanations.
              </p>
            </div>
            <QuizArena onQuizCompleted={handleQuizCompleted} userProgress={progress} />
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Scientific Calculators & Tools
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Precision educational calculators for units, thermodynamic temperature, density, kinematics, and electrical circuits.
              </p>
            </div>
            <ScienceCalculators />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {dashboardOpen && (
        <UserDashboard
          progress={progress}
          onResetProgress={handleResetProgress}
          onClose={() => setDashboardOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
