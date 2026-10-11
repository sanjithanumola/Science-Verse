import React, { useState } from 'react';
import { DAILY_DISCOVERIES, DailyDiscovery } from '../../data/dailyDiscoveries';
import { UserProgress } from '../../types';
import {
  FlaskConical,
  Atom,
  Globe,
  Activity,
  Zap,
  Calculator,
  Award,
  Sparkles,
  ArrowRight,
  Flame,
  RotateCw
} from 'lucide-react';

interface HomeLandingProps {
  onNavigate: (tab: string, payload?: any) => void;
  progress: UserProgress;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({ onNavigate, progress }) => {
  const [dailyIndex, setDailyIndex] = useState<number>(0);
  const currentDiscovery = DAILY_DISCOVERIES[dailyIndex];

  const handleNextDiscovery = () => {
    setDailyIndex((prev) => (prev + 1) % DAILY_DISCOVERIES.length);
  };

  const featuredModules = [
    {
      id: 'lab',
      title: 'Virtual Science Lab',
      desc: '15 interactive experiments across physics, chemistry, and biology with real-time controls.',
      icon: FlaskConical,
      color: 'text-cyan-400',
      badge: '15 Simulations'
    },
    {
      id: 'periodic-table',
      title: '118-Element Periodic Table',
      desc: 'Complete interactive table from Hydrogen to Oganesson with electron configs and real-world uses.',
      icon: Atom,
      color: 'text-rose-400',
      badge: 'All 118 Elements'
    },
    {
      id: 'universe',
      title: 'Universe & Solar System',
      desc: 'Animated orbital mechanics, planetary atmospheres, scale comparisons, and black holes.',
      icon: Globe,
      color: 'text-amber-400',
      badge: 'Orbital Simulator'
    },
    {
      id: 'biology',
      title: 'Biology & Cell Cytology',
      desc: 'Explore plant & animal cell organelles, DNA base pairing, and human cardiovascular circuits.',
      icon: Activity,
      color: 'text-emerald-400',
      badge: 'Interactive Cells'
    },
    {
      id: 'physics',
      title: 'Physics Playground',
      desc: 'Investigate gravity, projectile trajectories, pendulum harmonic motion, optics, and circuits.',
      icon: Zap,
      color: 'text-purple-400',
      badge: 'Kinematic Engines'
    },
    {
      id: 'quizzes',
      title: 'Science Quiz Arena',
      desc: 'Topic-based challenge questions with instant feedback, explanations, and score tracking.',
      icon: Award,
      color: 'text-blue-400',
      badge: '50+ Questions'
    }
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-radial from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Interactive Science Learning Universe</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Explore the Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                of Everything.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Experiment, discover, and understand the universe — one discovery at a time. Instead of merely reading static textbooks, manipulate physical variables directly in dynamic browser simulations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('lab')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs shadow-lg shadow-cyan-950/50 transition-all hover:-translate-y-0.5"
              >
                <span>Enter the Virtual Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('periodic-table')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
              >
                Explore Periodic Table
              </button>
            </div>
          </div>

          {/* Interactive Hero Orbital / Atom Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '24s' }}>
                <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-purple-500/25 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }}>
                <span className="absolute -bottom-1.5 left-1/3 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
              </div>
              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border border-amber-500/20 animate-spin" style={{ animationDuration: '10s' }}>
                <span className="absolute top-1/4 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#facc15]" />
              </div>
              {/* Glowing Core */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                <Atom className="w-10 h-10 text-slate-950 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Discovery Showcase */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Daily Discovery · {currentDiscovery.category}
            </h2>
          </div>

          <button
            onClick={handleNextDiscovery}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors"
          >
            <RotateCw className="w-3 h-3" />
            <span>Next Fact</span>
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-100">{currentDiscovery.headline}</h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">{currentDiscovery.fact}</p>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">Scientific Context: </span>
            <span>{currentDiscovery.didYouKnow}</span>
          </div>
          {currentDiscovery.formulaOrPrinciple && (
            <div className="font-mono text-cyan-300 shrink-0 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              {currentDiscovery.formulaOrPrinciple}
            </div>
          )}
        </div>
      </section>

      {/* Featured Modules Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Core Learning Disciplines</h2>
          <p className="text-xs text-slate-400 mt-1">
            Choose a domain to start experimenting, computing formulas, and verifying scientific principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                onClick={() => onNavigate(mod.id)}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-6 flex flex-col justify-between space-y-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${mod.color}`} />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* User Progress Highlight Strip */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-100">
              {progress.currentStreak}-Day Learning Streak
            </div>
            <div className="text-xs text-slate-400">
              {progress.experimentsCompleted.length} labs completed · {progress.quizzesCompleted} quizzes finished
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('quizzes')}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors self-start sm:self-auto"
        >
          Take a Daily Quiz ➔
        </button>
      </section>
    </div>
  );
};
