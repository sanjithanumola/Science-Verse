import React, { useState } from 'react';
import { EXPERIMENTS_DATA } from '../../data/experiments';
import { Experiment } from '../../types';
import { PhysicsExperiments } from './experiments/PhysicsExperiments';
import { ChemistryExperiments } from './experiments/ChemistryExperiments';
import { BiologyExperiments } from './experiments/BiologyExperiments';
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface VirtualLabProps {
  onExperimentComplete?: (expId: string) => void;
  completedExpIds?: string[];
  initialExpId?: string;
}

export const VirtualLab: React.FC<VirtualLabProps> = ({
  onExperimentComplete,
  completedExpIds = [],
  initialExpId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'physics' | 'chemistry' | 'biology'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeExperiment, setActiveExperiment] = useState<Experiment | null>(() => {
    if (initialExpId) {
      return EXPERIMENTS_DATA.find((e) => e.id === initialExpId) || null;
    }
    return null;
  });

  const filteredExperiments = EXPERIMENTS_DATA.filter((e) => {
    const matchCat = selectedCategory === 'all' || e.category === selectedCategory;
    const matchDiff = selectedDifficulty === 'all' || e.difficulty === selectedDifficulty;
    return matchCat && matchDiff;
  });

  const handleExperimentFinished = (id: string) => {
    if (onExperimentComplete) {
      onExperimentComplete(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* If an experiment is open, render its full lab stage */}
      {activeExperiment ? (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Top Return & Header Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveExperiment(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded-lg border border-slate-800 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Lab Catalog
              </button>
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">
                  {activeExperiment.category} · {activeExperiment.tag}
                </span>
                <h2 className="text-xl font-bold text-slate-100">{activeExperiment.title}</h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                {activeExperiment.difficulty}
              </span>
              {completedExpIds.includes(activeExperiment.id) && (
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              )}
            </div>
          </div>

          {/* Objective Callout */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-slate-100">Learning Objective: </strong>
              {activeExperiment.learningObjective}
            </div>
          </div>

          {/* Experiment Interactive Simulator */}
          <div className="pt-2">
            {activeExperiment.category === 'physics' && (
              <PhysicsExperiments
                expId={activeExperiment.id}
                onComplete={() => handleExperimentFinished(activeExperiment.id)}
              />
            )}
            {activeExperiment.category === 'chemistry' && (
              <ChemistryExperiments
                expId={activeExperiment.id}
                onComplete={() => handleExperimentFinished(activeExperiment.id)}
              />
            )}
            {activeExperiment.category === 'biology' && (
              <BiologyExperiments
                expId={activeExperiment.id}
                onComplete={() => handleExperimentFinished(activeExperiment.id)}
              />
            )}
          </div>

          {/* Educational Debrief & Safety Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                What Did You Learn?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{activeExperiment.whatYouLearned}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" /> Educational Context & Safety
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{activeExperiment.safetyNotes}</p>
            </div>
          </div>
        </div>
      ) : (
        /* Experiments Catalog Grid */
        <div className="space-y-6">
          {/* Header & Filter Bar */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Domain:
              </span>
              {[
                { id: 'all', label: 'All Experiments' },
                { id: 'physics', label: 'Physics' },
                { id: 'chemistry', label: 'Chemistry' },
                { id: 'biology', label: 'Biology' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id as any)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Level:</span>
              {['all', 'Beginner', 'Intermediate'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-slate-800 text-cyan-400 border border-cyan-500/60'
                      : 'bg-slate-950 text-slate-500 border border-slate-800 hover:text-slate-300'
                  }`}
                >
                  {diff === 'all' ? 'All' : diff}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExperiments.map((exp) => {
              const isCompleted = completedExpIds.includes(exp.id);

              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExperiment(exp)}
                  className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 rounded-xl p-5 flex flex-col justify-between space-y-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="uppercase text-cyan-400 font-semibold">{exp.category}</span>
                      <div className="flex items-center gap-2">
                        <span>{exp.difficulty}</span>
                        {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">{exp.tag}</span>
                    <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Launch Lab ➔
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
