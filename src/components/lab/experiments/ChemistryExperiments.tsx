import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Check, Info } from 'lucide-react';
import { PERIODIC_TABLE_DATA } from '../../../data/periodicTable';

interface ChemistryExpProps {
  expId: string;
  onComplete?: () => void;
}

export const ChemistryExperiments: React.FC<ChemistryExpProps> = ({ expId, onComplete }) => {
  if (expId === 'atom-structure') return <AtomStructure onComplete={onComplete} />;
  if (expId === 'molecule-builder') return <MoleculeBuilder onComplete={onComplete} />;
  if (expId === 'acids-bases-ph') return <AcidsBasesPh onComplete={onComplete} />;
  if (expId === 'states-of-matter') return <StatesOfMatter onComplete={onComplete} />;
  if (expId === 'chemical-balancer') return <ChemicalBalancer onComplete={onComplete} />;
  return <div>Unknown chemistry experiment</div>;
};

// 1. Bohr Atom Structure
const AtomStructure: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [protons, setProtons] = useState<number>(6); // Carbon default
  const [neutrons, setNeutrons] = useState<number>(6);
  const [electrons, setElectrons] = useState<number>(6);

  const matchedElement = PERIODIC_TABLE_DATA.find((e) => e.number === protons) || {
    name: 'Unknown',
    symbol: '?',
    atomicMass: protons + neutrons
  };

  const massNumber = protons + neutrons;
  const netCharge = protons - electrons;

  // Stable isotope heuristic for light elements (N approx Z)
  const isStable = Math.abs(neutrons - protons) <= (protons <= 7 ? 1 : 2);

  // Shell electron distribution: K (max 2), L (max 8), M (max 8)
  const shellK = Math.min(2, electrons);
  const shellL = Math.min(8, Math.max(0, electrons - 2));
  const shellM = Math.min(8, Math.max(0, electrons - 10));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Animated Bohr Canvas / SVG */}
        <div className="w-full max-w-[500px] h-[360px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 360 360" className="w-full h-full">
            <defs>
              <radialGradient id="nucleusGlow">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Orbit Shell 1 (K) */}
            <circle cx="180" cy="180" r="55" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4, 4" />
            {/* Orbit Shell 2 (L) */}
            <circle cx="180" cy="180" r="95" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4, 4" />
            {/* Orbit Shell 3 (M) */}
            <circle cx="180" cy="180" r="140" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4, 4" />

            {/* Nucleus cluster */}
            <circle cx="180" cy="180" r="28" fill="url(#nucleusGlow)" />
            <circle cx="180" cy="180" r="22" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <text x="180" y="176" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {protons}p⁺
            </text>
            <text x="180" y="190" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {neutrons}n⁰
            </text>

            {/* Electrons in Shell K (r=55) */}
            {Array.from({ length: shellK }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / 2;
              const ex = 180 + 55 * Math.cos(angle);
              const ey = 180 + 55 * Math.sin(angle);
              return (
                <circle key={`k-${i}`} cx={ex} cy={ey} r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              );
            })}

            {/* Electrons in Shell L (r=95) */}
            {Array.from({ length: shellL }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / shellL;
              const ex = 180 + 95 * Math.cos(angle);
              const ey = 180 + 95 * Math.sin(angle);
              return (
                <circle key={`l-${i}`} cx={ex} cy={ey} r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              );
            })}

            {/* Electrons in Shell M (r=140) */}
            {Array.from({ length: shellM }).map((_, i) => {
              const angle = (i * 2 * Math.PI) / shellM;
              const ex = 180 + 140 * Math.cos(angle);
              const ey = 180 + 140 * Math.sin(angle);
              return (
                <circle key={`m-${i}`} cx={ex} cy={ey} r="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              );
            })}
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono">
          <div className="flex gap-3">
            <span className="text-rose-400">● Protons: {protons}</span>
            <span className="text-slate-400">● Neutrons: {neutrons}</span>
            <span className="text-cyan-400">● Electrons: {electrons}</span>
          </div>
          <span className={isStable ? 'text-emerald-400' : 'text-amber-400'}>
            {isStable ? 'Stable Isotope' : 'Radioactive / Unstable'}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Identified Nuclide */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Synthesized Nuclide</h4>
          <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-center px-3 py-1 bg-cyan-950/80 border border-cyan-500/50 rounded-lg">
              <div className="text-xs text-slate-400 font-mono">{massNumber}</div>
              <div className="text-2xl font-bold font-mono text-cyan-300">{matchedElement.symbol}</div>
              <div className="text-xs text-slate-400 font-mono">{protons}</div>
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100">{matchedElement.name}</div>
              <div className="text-xs text-slate-400">
                Mass Number: <span className="font-mono text-slate-200">{massNumber} u</span>
              </div>
              <div className="text-xs text-slate-400">
                Net Charge:{' '}
                <span className={`font-mono font-semibold ${netCharge > 0 ? 'text-rose-400' : netCharge < 0 ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {netCharge > 0 ? `+${netCharge} (Cation)` : netCharge < 0 ? `${netCharge} (Anion)` : '0 (Neutral Atom)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subatomic Particle Sliders */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Assemble Subatomic Particles</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Protons (Z — Determines Element):</span>
              <span className="font-mono text-rose-400 font-semibold">{protons}</span>
            </div>
            <input
              type="range"
              min={1}
              max={18}
              value={protons}
              onChange={(e) => {
                const val = Number(e.target.value);
                setProtons(val);
                setNeutrons(val);
                setElectrons(val);
                if (onComplete) onComplete();
              }}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Neutrons (Determines Isotope):</span>
              <span className="font-mono text-slate-300 font-semibold">{neutrons}</span>
            </div>
            <input
              type="range"
              min={0}
              max={22}
              value={neutrons}
              onChange={(e) => setNeutrons(Number(e.target.value))}
              className="w-full accent-slate-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Electrons (Determines Ion Charge):</span>
              <span className="font-mono text-cyan-400 font-semibold">{electrons}</span>
            </div>
            <input
              type="range"
              min={1}
              max={18}
              value={electrons}
              onChange={(e) => setElectrons(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Quick preset buttons */}
          <div className="pt-2 border-t border-slate-800">
            <span className="text-xs text-slate-400 block mb-2">Preset Elements:</span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Hydrogen (H)', p: 1, n: 0, e: 1 },
                { name: 'Helium (He)', p: 2, n: 2, e: 2 },
                { name: 'Carbon (C)', p: 6, n: 6, e: 6 },
                { name: 'Oxygen (O)', p: 8, n: 8, e: 8 },
                { name: 'Neon (Ne)', p: 10, n: 10, e: 10 }
              ].map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setProtons(preset.p);
                    setNeutrons(preset.n);
                    setElectrons(preset.e);
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded hover:border-cyan-500 text-slate-300 transition-colors"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Bohr Shell Capacity:</span> Shell K holds up to 2 electrons (<span className="font-mono text-cyan-300">2n²</span> where n=1), Shell L holds up to 8 electrons (n=2), and Shell M holds up to 8/18 electrons.
        </div>
      </div>
    </div>
  );
};

// 2. Molecule Builder
const MoleculeBuilder: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const molecules = [
    {
      id: 'water',
      name: 'Water',
      formula: 'H₂O',
      description: 'Bent polar molecule with 104.5° bond angle; universal solvent for life.',
      geometry: 'Bent (104.5°)',
      bonds: '2 Single O-H covalent bonds'
    },
    {
      id: 'carbon-dioxide',
      name: 'Carbon Dioxide',
      formula: 'CO₂',
      description: 'Linear non-polar molecule featuring two carbon-oxygen double bonds.',
      geometry: 'Linear (180°)',
      bonds: '2 Double C=O covalent bonds'
    },
    {
      id: 'methane',
      name: 'Methane',
      formula: 'CH₄',
      description: 'Tetrahedral geometry; simplest alkane and primary component of natural gas.',
      geometry: 'Tetrahedral (109.5°)',
      bonds: '4 Single C-H covalent bonds'
    },
    {
      id: 'ammonia',
      name: 'Ammonia',
      formula: 'NH₃',
      description: 'Trigonal pyramidal molecule with one lone electron pair on nitrogen.',
      geometry: 'Trigonal Pyramidal (107°)',
      bonds: '3 Single N-H covalent bonds'
    },
    {
      id: 'oxygen',
      name: 'Diatomic Oxygen',
      formula: 'O₂',
      description: 'Atmospheric oxygen molecule bonded by a stable covalent double bond.',
      geometry: 'Linear',
      bonds: '1 Double O=O covalent bond'
    }
  ];

  const [selectedMolecule, setSelectedMolecule] = useState(molecules[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Visual 2D structural diagram */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4">
          <svg viewBox="0 0 300 240" className="w-full h-full">
            {selectedMolecule.id === 'water' && (
              <g transform="translate(150, 110)">
                {/* Central Oxygen */}
                <circle cx="0" cy="-20" r="26" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                <text x="0" y="-14" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                  O
                </text>
                {/* Hydrogen 1 */}
                <line x1="-16" y1="-5" x2="-55" y2="35" stroke="#cbd5e1" strokeWidth="4" />
                <circle cx="-55" cy="35" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <text x="-55" y="40" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
                  H
                </text>
                {/* Hydrogen 2 */}
                <line x1="16" y1="-5" x2="55" y2="35" stroke="#cbd5e1" strokeWidth="4" />
                <circle cx="55" cy="35" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <text x="55" y="40" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
                  H
                </text>
                {/* Lone pairs on Oxygen */}
                <circle cx="-14" cy="-40" r="3" fill="#fde047" />
                <circle cx="-8" cy="-44" r="3" fill="#fde047" />
                <circle cx="14" cy="-40" r="3" fill="#fde047" />
                <circle cx="8" cy="-44" r="3" fill="#fde047" />
              </g>
            )}

            {selectedMolecule.id === 'carbon-dioxide' && (
              <g transform="translate(150, 120)">
                {/* Double bond left */}
                <line x1="-20" y1="-5" x2="-70" y2="-5" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="-20" y1="5" x2="-70" y2="5" stroke="#cbd5e1" strokeWidth="3" />
                {/* Double bond right */}
                <line x1="20" y1="-5" x2="70" y2="-5" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="20" y1="5" x2="70" y2="5" stroke="#cbd5e1" strokeWidth="3" />
                {/* Left Oxygen */}
                <circle cx="-85" cy="0" r="24" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                <text x="-85" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  O
                </text>
                {/* Center Carbon */}
                <circle cx="0" cy="0" r="24" fill="#334155" stroke="#64748b" strokeWidth="2" />
                <text x="0" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  C
                </text>
                {/* Right Oxygen */}
                <circle cx="85" cy="0" r="24" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                <text x="85" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  O
                </text>
              </g>
            )}

            {selectedMolecule.id === 'methane' && (
              <g transform="translate(150, 120)">
                {/* 4 single bonds */}
                <line x1="0" y1="-20" x2="0" y2="-65" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="-20" y1="0" x2="-65" y2="0" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="20" y1="0" x2="65" y2="0" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="0" y1="20" x2="0" y2="65" stroke="#cbd5e1" strokeWidth="3" />
                {/* Center C */}
                <circle cx="0" cy="0" r="24" fill="#334155" stroke="#64748b" strokeWidth="2" />
                <text x="0" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  C
                </text>
                {/* 4 Hydrogens */}
                <circle cx="0" cy="-75" r="14" fill="#0284c7" />
                <text x="0" y="-71" fill="#fff" fontSize="11" textAnchor="middle">H</text>
                <circle cx="-75" cy="0" r="14" fill="#0284c7" />
                <text x="-75" y="4" fill="#fff" fontSize="11" textAnchor="middle">H</text>
                <circle cx="75" cy="0" r="14" fill="#0284c7" />
                <text x="75" y="4" fill="#fff" fontSize="11" textAnchor="middle">H</text>
                <circle cx="0" cy="75" r="14" fill="#0284c7" />
                <text x="0" y="79" fill="#fff" fontSize="11" textAnchor="middle">H</text>
              </g>
            )}

            {selectedMolecule.id === 'ammonia' && (
              <g transform="translate(150, 110)">
                {/* Central Nitrogen */}
                <circle cx="0" cy="-20" r="24" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
                <text x="0" y="-14" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  N
                </text>
                {/* Lone pair */}
                <circle cx="-4" cy="-40" r="3" fill="#fde047" />
                <circle cx="4" cy="-40" r="3" fill="#fde047" />
                {/* 3 bonds */}
                <line x1="-15" y1="-5" x2="-55" y2="40" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="0" y1="4" x2="0" y2="50" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="15" y1="-5" x2="55" y2="40" stroke="#cbd5e1" strokeWidth="3" />
                <circle cx="-55" cy="45" r="14" fill="#0284c7" />
                <text x="-55" y="49" fill="#fff" fontSize="11" textAnchor="middle">H</text>
                <circle cx="0" cy="55" r="14" fill="#0284c7" />
                <text x="0" y="59" fill="#fff" fontSize="11" textAnchor="middle">H</text>
                <circle cx="55" cy="45" r="14" fill="#0284c7" />
                <text x="55" y="49" fill="#fff" fontSize="11" textAnchor="middle">H</text>
              </g>
            )}

            {selectedMolecule.id === 'oxygen' && (
              <g transform="translate(150, 120)">
                <line x1="-40" y1="-5" x2="40" y2="-5" stroke="#cbd5e1" strokeWidth="3" />
                <line x1="-40" y1="5" x2="40" y2="5" stroke="#cbd5e1" strokeWidth="3" />
                <circle cx="-50" cy="0" r="24" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                <text x="-50" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">O</text>
                <circle cx="50" cy="0" r="24" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
                <text x="50" y="6" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">O</text>
              </g>
            )}
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono text-cyan-400">
          <span>Formula: {selectedMolecule.formula}</span>
          <span>Geometry: {selectedMolecule.geometry}</span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Molecule selector */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Select Molecule To Construct</h4>
          <div className="space-y-2">
            {molecules.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMolecule(m);
                  if (onComplete) onComplete();
                }}
                className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors ${
                  selectedMolecule.id === m.id
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div>
                  <span className="font-semibold text-sm text-slate-200">{m.name}</span>
                  <span className="text-xs font-mono ml-2 text-cyan-400">{m.formula}</span>
                </div>
                {selectedMolecule.id === m.id && <Check className="w-4 h-4 text-cyan-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Structural info */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Covalent Bonding Analysis</h4>
          <p className="text-xs text-slate-300">{selectedMolecule.description}</p>
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div>Bond Type: <span className="text-cyan-300 font-mono">{selectedMolecule.bonds}</span></div>
            <div>Molecular Geometry: <span className="text-cyan-300 font-mono">{selectedMolecule.geometry}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Acids, Bases & pH Scale
const AcidsBasesPh: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [pH, setPH] = useState<number>(7.0);

  const substances = [
    { name: '1M Battery Acid (H₂SO₄)', ph: 1.0, type: 'Strong Acid' },
    { name: 'Fresh Lemon Juice', ph: 2.2, type: 'Acid' },
    { name: 'Black Coffee', ph: 5.0, type: 'Weak Acid' },
    { name: 'Pure Water (H₂O)', ph: 7.0, type: 'Neutral' },
    { name: 'Human Blood Plasma', ph: 7.4, type: 'Slightly Alkaline' },
    { name: 'Hand Soap Solution', ph: 10.0, type: 'Base' },
    { name: 'Household Bleach (NaClO)', ph: 12.5, type: 'Strong Base' }
  ];

  // Concentration [H+] = 10^(-pH)
  const hConc = Math.pow(10, -pH);
  const ohConc = Math.pow(10, -(14 - pH));

  // pH indicator color interpolation (red to green to violet)
  const getPhColor = (val: number) => {
    if (val <= 2) return '#ef4444'; // Red
    if (val <= 4) return '#f97316'; // Orange
    if (val <= 6) return '#eab308'; // Yellow
    if (val === 7) return '#22c55e'; // Green (Neutral)
    if (val <= 9) return '#06b6d4'; // Cyan
    if (val <= 11) return '#3b82f6'; // Blue
    return '#a855f7'; // Purple / Violet
  };

  const indicatorColor = getPhColor(pH);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Beaker / Test Tube Simulation */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative">
          <svg viewBox="0 0 300 240" className="w-full h-full">
            {/* Beaker Outline */}
            <path
              d="M 90 40 L 90 190 Q 90 205 105 205 L 195 205 Q 210 205 210 190 L 210 40"
              fill="none"
              stroke="#64748b"
              strokeWidth="4"
            />
            {/* Liquid inside beaker */}
            <path
              d="M 92 90 L 92 190 Q 92 203 105 203 L 195 203 Q 208 203 208 190 L 208 90 Z"
              fill={indicatorColor}
              opacity="0.8"
            />
            {/* Measurement tick marks */}
            <line x1="90" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="2" />
            <line x1="90" y1="120" x2="110" y2="120" stroke="#94a3b8" strokeWidth="2" />
            <line x1="90" y1="160" x2="110" y2="160" stroke="#94a3b8" strokeWidth="2" />

            {/* Simulated pH probe */}
            <rect x="140" y="20" width="20" height="130" fill="#334155" stroke="#475569" strokeWidth="2" rx="4" />
            <circle cx="150" cy="155" r="7" fill="#67e8f9" />
            <text x="150" y="15" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle">
              pH PROBE
            </text>
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2">
          <span className="text-xs font-mono text-slate-400">Scale: 0 (Acid) — 7 (Neutral) — 14 (Base)</span>
          <span
            className="text-xs font-mono font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: `${indicatorColor}33`, color: indicatorColor }}
          >
            pH {pH.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Real-time Molarity */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Ion Concentration (Molarity)</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">[H⁺] Hydronium Ion</div>
              <div className="text-sm font-mono font-bold text-rose-400 truncate">
                {hConc < 1e-4 ? hConc.toExponential(2) : hConc.toFixed(4)} M
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">[OH⁻] Hydroxide Ion</div>
              <div className="text-sm font-mono font-bold text-cyan-300 truncate">
                {ohConc < 1e-4 ? ohConc.toExponential(2) : ohConc.toFixed(4)} M
              </div>
            </div>
          </div>
        </div>

        {/* pH Slider & Substances */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Adjust Solution pH</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Current pH Value:</span>
              <span className="font-mono font-semibold" style={{ color: indicatorColor }}>
                {pH.toFixed(1)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={14}
              step={0.1}
              value={pH}
              onChange={(e) => {
                setPH(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <span className="text-xs text-slate-400 block mb-2">Test Common Household Solutions:</span>
            <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {substances.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setPH(s.ph)}
                  className={`px-2.5 py-1.5 text-xs rounded border text-left flex justify-between items-center transition-colors ${
                    Math.abs(pH - s.ph) < 0.2
                      ? 'bg-slate-800 border-cyan-500 text-slate-100 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{s.name}</span>
                  <span className="font-mono text-cyan-400">pH {s.ph}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Logarithmic Nature:</span> Each 1-unit shift in pH represents a tenfold (10×) change in hydronium ion concentration: <span className="font-mono text-cyan-300">pH = -log₁₀[H⁺]</span>.
        </div>
      </div>
    </div>
  );
};

// 4. States of Matter & Particle Kinetics
const StatesOfMatter: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [temperatureK, setTemperatureK] = useState<number>(300); // Kelvin
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);

  const isSolid = temperatureK < 150;
  const isLiquid = temperatureK >= 150 && temperatureK < 380;
  const isGas = temperatureK >= 380;

  // Initialize particles
  useEffect(() => {
    const pts = [];
    const count = 55;
    for (let i = 0; i < count; i++) {
      pts.push({
        x: 60 + Math.random() * 360,
        y: 160 + Math.random() * 140,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
    }
    particlesRef.current = pts;
  }, []);

  // Simulation loop
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          // Vessel outline
          const boxX = 40;
          const boxY = 40;
          const boxW = w - 80;
          const boxH = h - 70;

          ctx.fillStyle = '#080c14';
          ctx.fillRect(boxX, boxY, boxW, boxH);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.strokeRect(boxX, boxY, boxW, boxH);

          // Speed factor proportional to sqrt(T) (Maxwell-Boltzmann)
          const speedFactor = Math.sqrt(temperatureK / 100) * 1.4;

          const pts = particlesRef.current;
          const radius = 6;

          pts.forEach((p) => {
            if (isSolid) {
              // Vibrates near bottom in quasi-lattice
              p.vy += 0.15; // gravity
              p.x += (Math.random() - 0.5) * speedFactor * 0.4;
              p.y += (Math.random() - 0.5) * speedFactor * 0.4;
            } else if (isLiquid) {
              // Sloshes at bottom with fluid movement
              p.vy += 0.1; // mild gravity
              p.x += p.vx * speedFactor * 0.6;
              p.y += p.vy * speedFactor * 0.6;
            } else {
              // Gas: high velocity bounces everywhere
              p.x += p.vx * speedFactor;
              p.y += p.vy * speedFactor;
            }

            // Boundary collision
            if (p.x - radius < boxX) {
              p.x = boxX + radius;
              p.vx = -p.vx;
            }
            if (p.x + radius > boxX + boxW) {
              p.x = boxX + boxW - radius;
              p.vx = -p.vx;
            }
            if (p.y - radius < boxY) {
              p.y = boxY + radius;
              p.vy = -p.vy;
            }
            if (p.y + radius > boxY + boxH) {
              p.y = boxY + boxH - radius;
              p.vy = -p.vy;
            }

            // Draw particle
            ctx.fillStyle = isSolid ? '#38bdf8' : isLiquid ? '#0284c7' : '#f59e0b';
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [temperatureK, isSolid, isLiquid, isGas]);

  // Approximate pressure calculated from Ideal Gas: P = nRT/V
  const estimatedAtm = ((particlesRef.current.length * 0.0821 * temperatureK) / 1000).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={500}
          height={360}
          className="w-full max-w-[500px] h-[360px] rounded-lg border border-slate-800 bg-slate-950"
        />
        <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono">
          <span className="text-slate-400">Enclosed Chamber</span>
          <span className="text-cyan-400 font-bold uppercase">
            Phase: {isSolid ? 'Solid (Crystalline Lattice)' : isLiquid ? 'Liquid (Fluid Phase)' : 'Gas (Kinetic Molecular)'}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Kinetic Telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Thermodynamic State</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Temperature (Kelvin)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {temperatureK} <span className="text-xs text-slate-400 font-normal">K</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Temperature (Celsius)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {(temperatureK - 273.15).toFixed(1)} <span className="text-xs text-slate-400 font-normal">°C</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Chamber Pressure</div>
              <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                {estimatedAtm} <span className="text-xs text-slate-400 font-normal">atm</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Average Kinetic Energy</div>
              <div className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                {((3 / 2) * 1.38e-23 * temperatureK * 1e21).toFixed(2)} <span className="text-xs text-slate-400 font-normal">zJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Thermal Heater / Cooler</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Chamber Temperature:</span>
              <span className="font-mono text-cyan-400 font-semibold">{temperatureK} K</span>
            </div>
            <input
              type="range"
              min={50}
              max={700}
              step={10}
              value={temperatureK}
              onChange={(e) => {
                setTemperatureK(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setTemperatureK(80)}
              className="flex-1 py-1.5 text-xs font-medium rounded border border-slate-800 bg-slate-950 hover:border-cyan-500 text-slate-300"
            >
              Solid (80 K)
            </button>
            <button
              onClick={() => setTemperatureK(295)}
              className="flex-1 py-1.5 text-xs font-medium rounded border border-slate-800 bg-slate-950 hover:border-cyan-500 text-slate-300"
            >
              Liquid (295 K)
            </button>
            <button
              onClick={() => setTemperatureK(550)}
              className="flex-1 py-1.5 text-xs font-medium rounded border border-slate-800 bg-slate-950 hover:border-cyan-500 text-slate-300"
            >
              Gas (550 K)
            </button>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Kinetic Molecular Theory:</span> Temperature is the direct macroscopic measure of average particle kinetic energy (<span className="font-mono text-cyan-300">E_k = 3/2 k_B T</span>).
        </div>
      </div>
    </div>
  );
};

// 5. Chemical Equation Balancer
const ChemicalBalancer: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const equations = [
    {
      id: 'water-synthesis',
      name: 'Water Synthesis',
      reactants: [
        { formula: 'H₂', countKey: 'H', countPerMol: 2 },
        { formula: 'O₂', countKey: 'O', countPerMol: 2 }
      ],
      products: [
        { formula: 'H₂O', counts: { H: 2, O: 1 } }
      ],
      correct: [2, 1, 2] // 2 H2 + 1 O2 -> 2 H2O
    },
    {
      id: 'ammonia-synthesis',
      name: 'Haber Ammonia Synthesis',
      reactants: [
        { formula: 'N₂', countKey: 'N', countPerMol: 2 },
        { formula: 'H₂', countKey: 'H', countPerMol: 2 }
      ],
      products: [
        { formula: 'NH₃', counts: { N: 1, H: 3 } }
      ],
      correct: [1, 3, 2] // 1 N2 + 3 H2 -> 2 NH3
    },
    {
      id: 'methane-combustion',
      name: 'Methane Combustion',
      reactants: [
        { formula: 'CH₄', counts: { C: 1, H: 4 } },
        { formula: 'O₂', counts: { O: 2 } }
      ],
      products: [
        { formula: 'CO₂', counts: { C: 1, O: 2 } },
        { formula: 'H₂O', counts: { H: 2, O: 1 } }
      ],
      correct: [1, 2, 1, 2] // 1 CH4 + 2 O2 -> 1 CO2 + 2 H2O
    }
  ];

  const [activeEqIdx, setActiveEqIdx] = useState(0);
  const currentEq = equations[activeEqIdx];
  const [coeffs, setCoeffs] = useState<number[]>([1, 1, 1, 1]);

  const isBalanced =
    coeffs.slice(0, currentEq.correct.length).every((c, idx) => c === currentEq.correct[idx]);

  useEffect(() => {
    if (isBalanced && onComplete) onComplete();
  }, [isBalanced, onComplete]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Chemical Equation Bar */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex flex-col items-center justify-center p-6 space-y-6">
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
            {currentEq.name}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-mono font-bold text-slate-100">
            {/* Reactant 1 */}
            <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-cyan-400">{coeffs[0]}</span>
              <span>{currentEq.id === 'water-synthesis' ? 'H₂' : currentEq.id === 'ammonia-synthesis' ? 'N₂' : 'CH₄'}</span>
            </div>

            <span className="text-slate-500">+</span>

            {/* Reactant 2 */}
            <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-cyan-400">{coeffs[1]}</span>
              <span>{currentEq.id === 'water-synthesis' ? 'O₂' : currentEq.id === 'ammonia-synthesis' ? 'H₂' : 'O₂'}</span>
            </div>

            <span className="text-amber-400 font-bold">➔</span>

            {/* Product 1 */}
            <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="text-cyan-400">{coeffs[2]}</span>
              <span>{currentEq.id === 'water-synthesis' ? 'H₂O' : currentEq.id === 'ammonia-synthesis' ? 'NH₃' : 'CO₂'}</span>
            </div>

            {currentEq.correct.length > 3 && (
              <>
                <span className="text-slate-500">+</span>
                <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <span className="text-cyan-400">{coeffs[3]}</span>
                  <span>H₂O</span>
                </div>
              </>
            )}
          </div>

          <div className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 ${
            isBalanced
              ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-300'
              : 'bg-rose-950/40 border border-rose-800/60 text-rose-300'
          }`}>
            {isBalanced ? <Check className="w-4 h-4 text-emerald-400" /> : <Info className="w-4 h-4 text-rose-400" />}
            {isBalanced ? 'CONSERVATION OF MASS SATISFIED' : 'UNBALANCED ATOM COUNTS'}
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2">
          <button
            onClick={() => {
              setCoeffs([1, 1, 1, 1]);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Coefficients
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Equation Selector */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Select Reaction</h4>
          <div className="space-y-1.5">
            {equations.map((eq, idx) => (
              <button
                key={eq.id}
                onClick={() => {
                  setActiveEqIdx(idx);
                  setCoeffs([1, 1, 1, 1]);
                }}
                className={`w-full p-2 text-xs rounded-lg border text-left transition-colors ${
                  activeEqIdx === idx
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 font-medium'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                {eq.name}
              </button>
            ))}
          </div>
        </div>

        {/* Coefficient Adjusters */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Adjust Integer Coefficients</h4>
          {currentEq.correct.map((_, idx) => (
            <div key={idx} className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-300 font-mono">Coefficient #{idx + 1}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const next = [...coeffs];
                    next[idx] = Math.max(1, next[idx] - 1);
                    setCoeffs(next);
                  }}
                  className="w-7 h-7 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold"
                >
                  -
                </button>
                <span className="w-6 text-center font-mono font-bold text-cyan-400">{coeffs[idx]}</span>
                <button
                  onClick={() => {
                    const next = [...coeffs];
                    next[idx] = Math.min(6, next[idx] + 1);
                    setCoeffs(next);
                  }}
                  className="w-7 h-7 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Stoichiometry Rule:</span> You may only change the stoichiometric coefficients multiplying each molecule. Subscripts inside formulas cannot be changed, as that would alter the chemical identity of the molecules!
        </div>
      </div>
    </div>
  );
};
