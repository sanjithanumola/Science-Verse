import React, { useState } from 'react';
import { CELL_ORGANELLES, BODY_SYSTEMS, ECOSYSTEM_LEVELS } from '../../data/biologyData';
import { BiologyExperiments } from '../lab/experiments/BiologyExperiments';
import { Activity, Dna, Heart, Layers, Eye } from 'lucide-react';

export const BiologyExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cells' | 'human-body' | 'dna' | 'ecosystems'>('cells');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'cells', label: 'Cell Cytology (Plant & Animal)', icon: Activity },
          { id: 'dna', label: 'DNA & Molecular Genetics', icon: Dna },
          { id: 'human-body', label: 'Human Organ Systems', icon: Heart },
          { id: 'ecosystems', label: 'Ecosystems & Energy Flow', icon: Layers }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'cells' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100">Cell Biology & Organelle Anatomy</h3>
            <p className="text-xs text-slate-400 mt-1">
              Explore the fundamental units of life. Compare the cell wall and chloroplasts of plant cells with animal cells.
            </p>
          </div>
          <BiologyExperiments expId="cell-explorer" />
        </div>
      )}

      {activeTab === 'dna' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100">DNA Double Helix & Complementary Base Pairing</h3>
            <p className="text-xs text-slate-400 mt-1">
              Deoxyribonucleic acid stores biological instructions using four nucleotide bases: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G).
            </p>
          </div>
          <BiologyExperiments expId="dna-helix" />
        </div>
      )}

      {activeTab === 'human-body' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100">Human Body Systems</h3>
            <p className="text-xs text-slate-400 mt-1">
              Major organ systems working in homeostasis to sustain human physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BODY_SYSTEMS.map((sys) => (
              <div key={sys.id} className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-100">{sys.name}</h4>
                  <span className="text-xs font-mono text-cyan-400">Physiology</span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  {sys.function}
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 text-xs">
                  <span className="text-slate-500 font-mono">Organs: </span>
                  <span className="text-slate-300 font-medium">{sys.primaryOrgans}</span>
                </div>

                <div className="text-xs text-slate-400 bg-cyan-950/20 p-2.5 rounded-lg border border-cyan-800/30">
                  <span className="text-cyan-400 font-semibold">Did you know? </span>
                  <span>{sys.keyFact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cardiovascular Loop Interactive */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-base font-bold text-slate-100 mb-3">Cardiovascular Circulation Simulation</h4>
            <BiologyExperiments expId="heart-circulation" />
          </div>
        </div>
      )}

      {activeTab === 'ecosystems' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100">Ecosystem Trophic Pyramid & The 10% Energy Law</h3>
            <p className="text-xs text-slate-400 mt-1">
              In ecosystems, energy flows from solar autotrophic synthesis through trophic levels, with ~90% lost as heat and metabolic respiration at each step.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {ECOSYSTEM_LEVELS.slice().reverse().map((level) => {
              const widths = ['w-full', 'w-4/5', 'w-3/5', 'w-2/5'];
              const widthClass = widths[level.level - 1] || 'w-full';

              return (
                <div
                  key={level.level}
                  className={`mx-auto ${widthClass} bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-1.5 transition-all hover:border-cyan-500`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      Trophic Level {level.level}
                    </span>
                    <span className="text-xs font-mono text-amber-400">{level.energyTransfer}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100">{level.title}</h4>
                  <p className="text-xs text-slate-400">{level.description}</p>
                  <div className="text-[11px] text-slate-500 font-mono pt-1">
                    Examples: {level.examples}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-4 text-xs text-slate-300 max-w-3xl mx-auto">
            <span className="text-emerald-400 font-bold">Lindeman’s Efficiency (10% Rule):</span> Only roughly 10% of the energy stored as biomass in one trophic level is converted to biomass in the next trophic level. This thermodynamic constraint explains why apex predators are inherently rare in any biome.
          </div>
        </div>
      )}
    </div>
  );
};
