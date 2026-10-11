import React, { useState } from 'react';
import { PhysicsExperiments } from '../lab/experiments/PhysicsExperiments';
import { EXPERIMENTS_DATA } from '../../data/experiments';

export const PhysicsPlayground: React.FC = () => {
  const physicsExps = EXPERIMENTS_DATA.filter((e) => e.category === 'physics');
  const [selectedExpId, setSelectedExpId] = useState<string>(physicsExps[0].id);

  const activeExp = physicsExps.find((e) => e.id === selectedExpId) || physicsExps[0];

  return (
    <div className="space-y-6">
      {/* Experiment Selector Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {physicsExps.map((exp) => (
          <button
            key={exp.id}
            onClick={() => setSelectedExpId(exp.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedExpId === exp.id
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            {exp.title}
          </button>
        ))}
      </div>

      {/* Overview Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-100">{activeExp.title}</h3>
        <p className="text-xs text-slate-400 mt-1">{activeExp.description}</p>
      </div>

      {/* Active Experiment Simulator */}
      <PhysicsExperiments expId={selectedExpId} />
    </div>
  );
};
