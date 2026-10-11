import React, { useState, useEffect } from 'react';
import { CELL_ORGANELLES } from '../../../data/biologyData';
import { Check, Info, Heart, Dna, Sun } from 'lucide-react';

interface BiologyExpProps {
  expId: string;
  onComplete?: () => void;
}

export const BiologyExperiments: React.FC<BiologyExpProps> = ({ expId, onComplete }) => {
  if (expId === 'cell-explorer') return <CellExplorer onComplete={onComplete} />;
  if (expId === 'photosynthesis-sandbox') return <PhotosynthesisSandbox onComplete={onComplete} />;
  if (expId === 'dna-helix') return <DnaHelix onComplete={onComplete} />;
  if (expId === 'heart-circulation') return <HeartCirculation onComplete={onComplete} />;
  return <div>Unknown biology experiment</div>;
};

// 1. Plant vs Animal Cell Explorer
const CellExplorer: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [cellType, setCellType] = useState<'plant' | 'animal'>('plant');
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string>('nucleus');

  const selectedOrganelle =
    CELL_ORGANELLES.find((o) => o.id === selectedOrganelleId) || CELL_ORGANELLES[0];

  const handleSelect = (id: string) => {
    setSelectedOrganelleId(id);
    if (onComplete) onComplete();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Cell Diagram Canvas / SVG */}
        <div className="w-full max-w-[500px] h-[360px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
          <svg viewBox="0 0 360 280" className="w-full h-full">
            {cellType === 'plant' ? (
              // Plant Cell (Hexagonal/Rectangular rigid shape)
              <g>
                {/* Outer Cell Wall */}
                <rect
                  x="30"
                  y="20"
                  width="300"
                  height="240"
                  rx="30"
                  fill="#064e3b"
                  stroke={selectedOrganelleId === 'cell-wall' ? '#34d399' : '#047857'}
                  strokeWidth={selectedOrganelleId === 'cell-wall' ? '6' : '4'}
                  className="cursor-pointer transition-all"
                  onClick={() => handleSelect('cell-wall')}
                />
                {/* Plasma membrane inner */}
                <rect
                  x="40"
                  y="30"
                  width="280"
                  height="220"
                  rx="24"
                  fill="#062e26"
                  stroke={selectedOrganelleId === 'cell-membrane' ? '#38bdf8' : '#0f766e'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('cell-membrane')}
                />

                {/* Large Central Vacuole */}
                <ellipse
                  cx="220"
                  cy="140"
                  rx="75"
                  ry="65"
                  fill="#0284c7"
                  opacity="0.6"
                  stroke={selectedOrganelleId === 'vacuole' ? '#67e8f9' : '#38bdf8'}
                  strokeWidth={selectedOrganelleId === 'vacuole' ? '3' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => handleSelect('vacuole')}
                />
                <text x="220" y="145" fill="#bae6fd" fontSize="11" textAnchor="middle" pointerEvents="none">
                  Central Vacuole
                </text>

                {/* Nucleus */}
                <circle
                  cx="105"
                  cy="100"
                  r="35"
                  fill="#4c1d95"
                  stroke={selectedOrganelleId === 'nucleus' ? '#c084fc' : '#7c3aed'}
                  strokeWidth={selectedOrganelleId === 'nucleus' ? '3' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => handleSelect('nucleus')}
                />
                <circle cx="105" cy="100" r="14" fill="#6d28d9" pointerEvents="none" />
                <text x="105" y="104" fill="#e9d5ff" fontSize="10" fontWeight="bold" textAnchor="middle" pointerEvents="none">
                  Nucleus
                </text>

                {/* Chloroplasts */}
                <ellipse
                  cx="90"
                  cy="190"
                  rx="24"
                  ry="14"
                  fill="#15803d"
                  stroke={selectedOrganelleId === 'chloroplast' ? '#4ade80' : '#22c55e'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('chloroplast')}
                />
                <ellipse
                  cx="260"
                  cy="60"
                  rx="20"
                  ry="12"
                  fill="#15803d"
                  stroke={selectedOrganelleId === 'chloroplast' ? '#4ade80' : '#22c55e'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('chloroplast')}
                />

                {/* Mitochondria */}
                <ellipse
                  cx="155"
                  cy="210"
                  rx="22"
                  ry="12"
                  fill="#9a3412"
                  stroke={selectedOrganelleId === 'mitochondria' ? '#fb923c' : '#ea580c'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('mitochondria')}
                />
              </g>
            ) : (
              // Animal Cell (Irregular rounded shape, no wall, no chloroplast)
              <g>
                {/* Plasma Membrane */}
                <ellipse
                  cx="180"
                  cy="140"
                  rx="145"
                  ry="115"
                  fill="#1e1b4b"
                  stroke={selectedOrganelleId === 'cell-membrane' ? '#38bdf8' : '#4338ca'}
                  strokeWidth={selectedOrganelleId === 'cell-membrane' ? '5' : '3'}
                  className="cursor-pointer"
                  onClick={() => handleSelect('cell-membrane')}
                />

                {/* Central Nucleus */}
                <circle
                  cx="180"
                  cy="135"
                  r="42"
                  fill="#4c1d95"
                  stroke={selectedOrganelleId === 'nucleus' ? '#c084fc' : '#7c3aed'}
                  strokeWidth={selectedOrganelleId === 'nucleus' ? '3' : '1.5'}
                  className="cursor-pointer"
                  onClick={() => handleSelect('nucleus')}
                />
                <circle cx="180" cy="135" r="18" fill="#6d28d9" pointerEvents="none" />
                <text x="180" y="140" fill="#e9d5ff" fontSize="11" fontWeight="bold" textAnchor="middle" pointerEvents="none">
                  Nucleus
                </text>

                {/* Mitochondria around cytoplasm */}
                <ellipse
                  cx="95"
                  cy="100"
                  rx="25"
                  ry="14"
                  fill="#9a3412"
                  stroke={selectedOrganelleId === 'mitochondria' ? '#fb923c' : '#ea580c'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('mitochondria')}
                />
                <ellipse
                  cx="260"
                  cy="180"
                  rx="25"
                  ry="14"
                  fill="#9a3412"
                  stroke={selectedOrganelleId === 'mitochondria' ? '#fb923c' : '#ea580c'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handleSelect('mitochondria')}
                />

                {/* Golgi / ER Ribosomes */}
                <path
                  d="M 120 190 Q 150 205 180 190 Q 210 205 240 190"
                  fill="none"
                  stroke={selectedOrganelleId === 'golgi' ? '#38bdf8' : '#0284c7'}
                  strokeWidth="4"
                  className="cursor-pointer"
                  onClick={() => handleSelect('golgi')}
                />
              </g>
            )}
          </svg>
        </div>

        {/* Toggle plant / animal */}
        <div className="w-full flex items-center justify-between mt-4 px-2">
          <div className="flex gap-2">
            <button
              onClick={() => setCellType('plant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                cellType === 'plant'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Plant Cell
            </button>
            <button
              onClick={() => setCellType('animal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                cellType === 'animal'
                  ? 'bg-purple-950/80 border-purple-500 text-purple-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              Animal Cell
            </button>
          </div>
          <div className="text-xs font-mono text-cyan-400">
            Selected: {selectedOrganelle.name}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Organelle Inspector Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-100">{selectedOrganelle.name}</h4>
            <span className="text-xs font-mono text-cyan-400 uppercase">
              {selectedOrganelle.foundIn === 'both'
                ? 'Plant & Animal'
                : selectedOrganelle.foundIn === 'plant-only'
                ? 'Plant Specific'
                : 'Animal Specific'}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{selectedOrganelle.role}</p>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-xs">
            <div>
              <span className="text-slate-400">Microscopic Structure: </span>
              <span className="text-slate-200">{selectedOrganelle.structure}</span>
            </div>
            <div>
              <span className="text-slate-400">City Analogy: </span>
              <span className="text-cyan-300 font-medium">{selectedOrganelle.analogy}</span>
            </div>
          </div>
        </div>

        {/* Organelle list buttons */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Click Any Organelle</h4>
          <div className="grid grid-cols-2 gap-2">
            {CELL_ORGANELLES.map((org) => {
              const disabled =
                cellType === 'animal' && (org.id === 'chloroplast' || org.id === 'cell-wall');

              return (
                <button
                  key={org.id}
                  disabled={disabled}
                  onClick={() => handleSelect(org.id)}
                  className={`p-2 rounded-lg text-xs font-medium border text-left truncate transition-colors ${
                    selectedOrganelleId === org.id
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : disabled
                      ? 'bg-slate-950/40 border-slate-900 text-slate-600 cursor-not-allowed'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {org.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Photosynthesis Rate Sandbox
const PhotosynthesisSandbox: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [lightIntensity, setLightIntensity] = useState<number>(70); // %
  const [co2Ppm, setCo2Ppm] = useState<number>(450); // ppm
  const [temperatureC, setTemperatureC] = useState<number>(25); // Celsius
  const [waterStatus, setWaterStatus] = useState<'dry' | 'adequate' | 'abundant'>('adequate');

  // Limiting factors calculation:
  // Optimum temp is ~25-30°C. Above 40°C enzymes denature.
  const tempFactor = Math.max(0, 1 - Math.pow((temperatureC - 27) / 18, 2));
  const lightFactor = lightIntensity / 100;
  const co2Factor = Math.min(1.0, co2Ppm / 800);
  const waterFactor = waterStatus === 'dry' ? 0.2 : waterStatus === 'adequate' ? 0.85 : 1.0;

  // Rate governed by minimum limiting factor (Liebig's law) + modulation
  const rate = Math.round(100 * Math.min(lightFactor, co2Factor, waterFactor) * tempFactor);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Interactive Plant Leaf Simulation */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
          <svg viewBox="0 0 360 260" className="w-full h-full">
            {/* Sun illumination gradient */}
            <defs>
              <radialGradient id="sunGlow">
                <stop offset="0%" stopColor="#fef08a" stopOpacity={lightIntensity / 100} />
                <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect x="0" y="0" width="360" height="260" fill="url(#sunGlow)" />

            {/* Sun Icon */}
            <circle cx="50" cy="50" r="22" fill="#facc15" opacity={0.3 + (lightIntensity / 100) * 0.7} />

            {/* Plant stem & leaf */}
            <path d="M 180 240 Q 180 180 180 150" fill="none" stroke="#16a34a" strokeWidth="6" />
            {/* Leaf */}
            <path
              d="M 180 150 C 130 110 120 70 180 40 C 240 70 230 110 180 150 Z"
              fill={temperatureC > 38 ? '#a16207' : '#15803d'}
              stroke="#22c55e"
              strokeWidth="2"
            />
            {/* Leaf vein */}
            <path d="M 180 145 L 180 45" fill="none" stroke="#4ade80" strokeWidth="2" />

            {/* Animated oxygen bubbles produced based on rate */}
            {rate > 15 && (
              <>
                <circle cx="165" cy="90" r="5" fill="#38bdf8" opacity="0.8" className="animate-bounce" />
                <circle cx="195" cy="70" r="6" fill="#38bdf8" opacity="0.8" className="animate-pulse" />
                <circle cx="175" cy="40" r="4" fill="#38bdf8" opacity="0.8" />
              </>
            )}
            <text x="180" y="25" fill="#38bdf8" fontSize="11" fontFamily="monospace" textAnchor="middle">
              {rate > 10 ? 'O₂ BUBBLES EMITTING' : 'MINIMAL O₂ SYNTHESIS'}
            </text>
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2">
          <span className="text-xs font-mono text-slate-400">6 CO₂ + 6 H₂O + Photons ➔ C₆H₁₂O₆ + 6 O₂</span>
          <span className="text-xs font-mono text-cyan-400 font-bold">Rate: {rate}% Max</span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Photosynthetic output */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Synthesis Efficiency</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Overall Photosynthetic Rate:</span>
              <span className="font-mono text-cyan-400 font-bold">{rate}%</span>
            </div>
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${rate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Environmental Sliders */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Environmental Variables</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Light Intensity:</span>
              <span className="font-mono text-amber-400 font-semibold">{lightIntensity}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={lightIntensity}
              onChange={(e) => {
                setLightIntensity(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>CO₂ Concentration:</span>
              <span className="font-mono text-cyan-400 font-semibold">{co2Ppm} ppm</span>
            </div>
            <input
              type="range"
              min={150}
              max={1000}
              step={25}
              value={co2Ppm}
              onChange={(e) => setCo2Ppm(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Ambient Temperature:</span>
              <span className="font-mono text-rose-400 font-semibold">{temperatureC} °C</span>
            </div>
            <input
              type="range"
              min={5}
              max={45}
              value={temperatureC}
              onChange={(e) => setTemperatureC(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1">Soil Water Availability:</label>
            <div className="grid grid-cols-3 gap-2">
              {(['dry', 'adequate', 'abundant'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setWaterStatus(status)}
                  className={`py-1.5 text-xs font-medium rounded capitalize border transition-colors ${
                    waterStatus === status
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Liebig’s Law of the Minimum:</span> Biological growth is dictated not by total resources available, but by the scarcest limiting factor (light, CO₂, water, or enzyme denaturation above 40°C).
        </div>
      </div>
    </div>
  );
};

// 3. DNA Double Helix Base Pairing
const DnaHelix: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const targetStrand = ['A', 'T', 'C', 'G', 'G', 'T', 'A', 'C'];
  const correctComplement = ['T', 'A', 'G', 'C', 'C', 'A', 'T', 'G'];

  const [userStrand, setUserStrand] = useState<string[]>(Array(8).fill(''));

  const isComplete = userStrand.every((b, i) => b === correctComplement[i]);

  useEffect(() => {
    if (isComplete && onComplete) onComplete();
  }, [isComplete, onComplete]);

  const handlePlaceBase = (idx: number, base: string) => {
    const next = [...userStrand];
    next[idx] = base;
    setUserStrand(next);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* DNA Strand Display */}
        <div className="w-full max-w-[500px] h-[360px] bg-slate-950 rounded-lg border border-slate-800 p-4 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            {targetStrand.map((templateBase, idx) => {
              const userBase = userStrand[idx];
              const isMatch = userBase === correctComplement[idx];
              const isWrong = userBase && !isMatch;

              return (
                <div key={idx} className="flex items-center justify-between bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  {/* Template strand nucleotide */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono w-4">{idx + 1}</span>
                    <span className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm ${
                      templateBase === 'A' ? 'bg-rose-950 text-rose-300 border border-rose-700' :
                      templateBase === 'T' ? 'bg-amber-950 text-amber-300 border border-amber-700' :
                      templateBase === 'C' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' :
                      'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    }`}>
                      {templateBase}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {templateBase === 'A' ? 'Adenine' : templateBase === 'T' ? 'Thymine' : templateBase === 'C' ? 'Cytosine' : 'Guanine'}
                    </span>
                  </div>

                  {/* Hydrogen bonds indicator */}
                  <div className="text-xs text-slate-500 font-mono">
                    {templateBase === 'A' || templateBase === 'T' ? '= (2 H-Bonds) =' : '≡ (3 H-Bonds) ≡'}
                  </div>

                  {/* Complementary slot */}
                  <div className="flex items-center gap-1.5">
                    {['A', 'T', 'C', 'G'].map((base) => (
                      <button
                        key={base}
                        onClick={() => handlePlaceBase(idx, base)}
                        className={`w-7 h-7 rounded text-xs font-mono font-bold transition-colors ${
                          userBase === base
                            ? isMatch
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {base}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2">
          <button
            onClick={() => setUserStrand(Array(8).fill(''))}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded transition-colors"
          >
            Clear Strand
          </button>
          <span className={`text-xs font-mono ${isComplete ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
            {isComplete ? 'STRAND PERFECTLY COMPLEMENTARY!' : 'Pair all 8 bases to complete'}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Chargaff’s Pairing Rules</h4>
          <div className="space-y-2 text-xs">
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-between">
              <span className="text-rose-300 font-bold">Adenine (A) ➔ Thymine (T)</span>
              <span className="text-slate-400 font-mono">2 Hydrogen Bonds</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-center justify-between">
              <span className="text-cyan-300 font-bold">Cytosine (C) ➔ Guanine (G)</span>
              <span className="text-slate-400 font-mono">3 Hydrogen Bonds</span>
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Molecular Genetics Fact:</span> The antiparallel double-helix structure allows precise semi-conservative DNA replication during cell division and faithful transcription into mRNA codons.
        </div>
      </div>
    </div>
  );
};

// 4. Heart Circulation
const HeartCirculation: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [bpm, setBpm] = useState<number>(75);

  const systolic = Math.round(100 + (bpm - 60) * 0.4);
  const diastolic = Math.round(70 + (bpm - 60) * 0.2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* Heart Diagram SVG */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative">
          <svg viewBox="0 0 320 260" className="w-full h-full">
            {/* Heart Muscle Body */}
            <path
              d="M 160 230 C 60 170 40 100 90 60 C 130 30 160 80 160 80 C 160 80 190 30 230 60 C 280 100 260 170 160 230 Z"
              fill="#881337"
              stroke="#be123c"
              strokeWidth="4"
              className="animate-pulse"
            />

            {/* Right Atrium (Deoxygenated - Blue) */}
            <rect x="80" y="80" width="60" height="50" rx="8" fill="#1e3a8a" opacity="0.8" />
            <text x="110" y="110" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">
              Right Atrium
            </text>

            {/* Right Ventricle (Blue) */}
            <rect x="80" y="140" width="60" height="55" rx="8" fill="#1e3a8a" opacity="0.8" />
            <text x="110" y="170" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">
              Right Ventricle
            </text>

            {/* Left Atrium (Oxygenated - Red) */}
            <rect x="180" y="80" width="60" height="50" rx="8" fill="#991b1b" opacity="0.8" />
            <text x="210" y="110" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
              Left Atrium
            </text>

            {/* Left Ventricle (Red) */}
            <rect x="180" y="140" width="60" height="55" rx="8" fill="#991b1b" opacity="0.8" />
            <text x="210" y="170" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
              Left Ventricle
            </text>

            {/* Septum divider */}
            <line x1="160" y1="75" x2="160" y2="210" stroke="#fda4af" strokeWidth="4" />
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono">
          <span className="text-blue-400">Blue: Deoxygenated (Pulmonary)</span>
          <span className="text-rose-400">Red: Oxygenated (Systemic)</span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Heart Rate Telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Cardiac Metrics</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Heart Rate</div>
              <div className="text-xl font-mono font-bold text-rose-400 tabular-nums">
                {bpm} <span className="text-xs text-slate-400 font-normal">BPM</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Blood Pressure</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {systolic}/{diastolic} <span className="text-xs text-slate-400 font-normal">mmHg</span>
              </div>
            </div>
          </div>
        </div>

        {/* BPM Slider */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Heart Rate Control</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Cardiovascular Activity (BPM):</span>
              <span className="font-mono text-rose-400 font-semibold">{bpm} BPM</span>
            </div>
            <input
              type="range"
              min={45}
              max={180}
              value={bpm}
              onChange={(e) => {
                setBpm(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          <div className="flex gap-2">
            {[
              { label: 'Rest (60)', val: 60 },
              { label: 'Brisk Walk (95)', val: 95 },
              { label: 'Sprint (150)', val: 150 }
            ].map((p) => (
              <button
                key={p.label}
                onClick={() => setBpm(p.val)}
                className="flex-1 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 hover:border-rose-500 rounded"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Dual Circulation Loop:</span> The Right side directs deoxygenated blood to the lungs for gas exchange (Pulmonary circuit). The Left side pumps oxygen-enriched blood to the brain and entire body (Systemic circuit).
        </div>
      </div>
    </div>
  );
};
