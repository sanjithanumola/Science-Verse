import React, { useState } from 'react';
import { UserProgress } from '../../types';
import { ACHIEVEMENTS_DATA } from '../../data/quizzes';
import { Award, Zap, CheckCircle2, RotateCcw, Flame, BookOpen, Clock, X } from 'lucide-react';

interface UserDashboardProps {
  progress: UserProgress;
  onResetProgress: () => void;
  onClose: () => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ progress, onResetProgress, onClose }) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const avgScore =
    progress.totalQuestionsAnswered > 0
      ? Math.round((progress.totalCorrectAnswers / progress.totalQuestionsAnswered) * 100)
      : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-slate-100">Personal Learning Dashboard</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Your progress, activity streaks, and unlocked science badges stored locally in your browser.
          </p>
        </div>

        {/* High-level metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-center">
            <div className="text-xs text-slate-500">Learning Streak</div>
            <div className="text-2xl font-mono font-bold text-amber-400 mt-0.5 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{progress.currentStreak}</span>
            </div>
            <div className="text-[10px] text-slate-500">consecutive days</div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-center">
            <div className="text-xs text-slate-500">Quizzes Taken</div>
            <div className="text-2xl font-mono font-bold text-cyan-300 mt-0.5">
              {progress.quizzesCompleted}
            </div>
            <div className="text-[10px] text-slate-500">completed sessions</div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-center">
            <div className="text-xs text-slate-500">Average Score</div>
            <div className="text-2xl font-mono font-bold text-emerald-400 mt-0.5">
              {avgScore}%
            </div>
            <div className="text-[10px] text-slate-500">accuracy rate</div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-center">
            <div className="text-xs text-slate-500">Labs Completed</div>
            <div className="text-2xl font-mono font-bold text-purple-400 mt-0.5">
              {progress.experimentsCompleted.length}
            </div>
            <div className="text-[10px] text-slate-500">of 15 simulations</div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" /> Unlocked Science Achievements
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ACHIEVEMENTS_DATA.map((ach) => {
              const isUnlocked = progress.unlockedAchievements.includes(ach.id);

              return (
                <div
                  key={ach.id}
                  className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                    isUnlocked
                      ? 'bg-slate-950 border-cyan-500/50 text-slate-200'
                      : 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isUnlocked
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-600'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">{ach.title}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{ach.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Storage notice & reset */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div>Progress is saved in this browser’s localStorage.</div>

          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="text-rose-400 hover:text-rose-300 font-mono text-xs flex items-center gap-1 self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear All Progress
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-rose-400 text-xs">Confirm reset?</span>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowConfirmReset(false);
                }}
                className="px-2 py-1 bg-rose-600 text-white rounded text-xs font-semibold"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
