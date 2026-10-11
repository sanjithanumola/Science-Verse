import React, { useState } from 'react';
import { Calculator, ArrowRightLeft, Scale, Zap, Activity, Info } from 'lucide-react';

export const ScienceCalculators: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string>('unit-converter');

  return (
    <div className="space-y-6">
      {/* Tool Selector Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'unit-converter', label: 'Metric Unit Converter' },
          { id: 'temperature', label: 'Temperature Converter' },
          { id: 'density', label: 'Density Calculator' },
          { id: 'speed-distance', label: 'Speed & Motion' },
          { id: 'mass-weight', label: 'Planetary Weight' },
          { id: 'ohms-law', label: 'Ohm’s Law & Power' },
          { id: 'sci-notation', label: 'Scientific Notation' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTool === t.id
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Active Tool View */}
      {activeTool === 'unit-converter' && <UnitConverterTool />}
      {activeTool === 'temperature' && <TemperatureConverterTool />}
      {activeTool === 'density' && <DensityCalculatorTool />}
      {activeTool === 'speed-distance' && <SpeedDistanceTool />}
      {activeTool === 'mass-weight' && <MassWeightTool />}
      {activeTool === 'ohms-law' && <OhmsLawTool />}
      {activeTool === 'sci-notation' && <ScientificNotationTool />}
    </div>
  );
};

// 1. Metric Unit Converter
const UnitConverterTool: React.FC = () => {
  const [type, setType] = useState<'length' | 'mass' | 'energy'>('length');
  const [inputValue, setInputValue] = useState<number>(100);
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('km');

  const lengthUnits: Record<string, number> = {
    mm: 0.001,
    cm: 0.01,
    m: 1.0,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    mi: 1609.344
  };

  const massUnits: Record<string, number> = {
    mg: 0.000001,
    g: 0.001,
    kg: 1.0,
    tonne: 1000,
    oz: 0.0283495,
    lb: 0.453592
  };

  const energyUnits: Record<string, number> = {
    J: 1.0,
    kJ: 1000,
    cal: 4.184,
    kcal: 4184,
    eV: 1.60218e-19,
    kWh: 3600000
  };

  const currentDict = type === 'length' ? lengthUnits : type === 'mass' ? massUnits : energyUnits;

  const result = (inputValue * (currentDict[fromUnit] || 1)) / (currentDict[toUnit] || 1);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Metric & Imperial Unit Converter</h3>
        <p className="text-xs text-slate-400 mt-1">
          Precision conversions between SI metric standards and non-SI units.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex gap-2">
        {(['length', 'mass', 'energy'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setType(cat);
              if (cat === 'length') {
                setFromUnit('m');
                setToUnit('km');
              } else if (cat === 'mass') {
                setFromUnit('kg');
                setToUnit('lb');
              } else {
                setFromUnit('J');
                setToUnit('cal');
              }
            }}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium capitalize border transition-colors ${
              type === cat
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Input / Output Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="space-y-1.5">
          <label className="text-xs text-slate-400">Convert From:</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-2 text-xs font-mono text-cyan-400 focus:outline-none"
            >
              {Object.keys(currentDict).map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs text-slate-400">Converted Value To:</label>
          <div className="flex gap-2">
            <div className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-cyan-300 truncate">
              {result < 0.0001 || result > 100000 ? result.toExponential(4) : result.toFixed(4)}
            </div>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-2 text-xs font-mono text-cyan-400 focus:outline-none"
            >
              {Object.keys(currentDict).map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Temperature Converter
const TemperatureConverterTool: React.FC = () => {
  const [val, setVal] = useState<number>(20);
  const [scale, setScale] = useState<'C' | 'F' | 'K'>('C');

  let c = 0;
  let f = 0;
  let k = 0;

  if (scale === 'C') {
    c = val;
    f = (c * 9) / 5 + 32;
    k = c + 273.15;
  } else if (scale === 'F') {
    f = val;
    c = ((f - 32) * 5) / 9;
    k = c + 273.15;
  } else {
    k = Math.max(0, val);
    c = k - 273.15;
    f = (c * 9) / 5 + 32;
  }

  const isBelowAbsoluteZero = k < 0;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Thermodynamic Temperature Converter</h3>
        <p className="text-xs text-slate-400 mt-1">
          Exact conversion between Celsius, Fahrenheit, and absolute thermodynamic Kelvin.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
        />
        <div className="flex gap-1.5">
          {(['C', 'F', 'K'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScale(s)}
              className={`px-3 py-2 text-xs font-mono font-bold rounded-lg border transition-colors ${
                scale === s
                  ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              °{s}
            </button>
          ))}
        </div>
      </div>

      {isBelowAbsoluteZero && (
        <div className="text-xs text-rose-400 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800">
          Temperature cannot fall below Absolute Zero (0 Kelvin / -273.15 °C).
        </div>
      )}

      {/* Results grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Celsius</div>
          <div className="text-lg font-mono font-bold text-slate-200 mt-1">
            {c.toFixed(2)} °C
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Fahrenheit</div>
          <div className="text-lg font-mono font-bold text-slate-200 mt-1">
            {f.toFixed(2)} °F
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Kelvin (Absolute)</div>
          <div className="text-lg font-mono font-bold text-cyan-300 mt-1">
            {k.toFixed(2)} K
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
        Formula: <span className="font-mono text-cyan-400">K = °C + 273.15</span> · <span className="font-mono text-cyan-400">°F = (°C × 9/5) + 32</span>
      </div>
    </div>
  );
};

// 3. Density Calculator
const DensityCalculatorTool: React.FC = () => {
  const [mass, setMass] = useState<number>(500); // grams
  const [volume, setVolume] = useState<number>(250); // cm3

  const density = volume > 0 ? mass / volume : 0;

  const materials = [
    { name: 'Pure Water', density: 1.0 },
    { name: 'Aluminium', density: 2.7 },
    { name: 'Iron / Steel', density: 7.87 },
    { name: 'Lead', density: 11.34 },
    { name: 'Pure Gold', density: 19.32 }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Density Calculator (ρ = m / V)</h3>
        <p className="text-xs text-slate-400 mt-1">
          Calculate volumetric mass density and compare with known physical materials.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Mass (m in grams):</label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Volume (V in cm³ or mL):</label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-mono">Calculated Density (ρ):</span>
        <span className="text-2xl font-mono font-bold text-cyan-300">
          {density.toFixed(3)} <span className="text-xs text-slate-400 font-normal">g/cm³</span>
        </span>
      </div>

      <div>
        <span className="text-xs text-slate-400 block mb-2">Preset Material Densities:</span>
        <div className="flex flex-wrap gap-2">
          {materials.map((m) => (
            <button
              key={m.name}
              onClick={() => {
                setMass(m.density * 100);
                setVolume(100);
              }}
              className="px-2.5 py-1 text-xs font-medium rounded border border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-500"
            >
              {m.name} ({m.density} g/cm³)
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. Speed & Motion
const SpeedDistanceTool: React.FC = () => {
  const [distance, setDistance] = useState<number>(100); // meters
  const [time, setTime] = useState<number>(9.58); // seconds (Usain Bolt WR 100m)

  const speedMs = time > 0 ? distance / time : 0;
  const speedKmh = (speedMs * 3600) / 1000;
  const speedMph = speedKmh * 0.621371;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Speed, Distance & Time Calculator</h3>
        <p className="text-xs text-slate-400 mt-1">
          Calculate average velocity from distance and elapsed duration.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Total Distance (meters):</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Elapsed Time (seconds):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Meters / Second</div>
          <div className="text-lg font-mono font-bold text-cyan-300 mt-1">
            {speedMs.toFixed(2)} m/s
          </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Kilometers / Hour</div>
          <div className="text-lg font-mono font-bold text-slate-200 mt-1">
            {speedKmh.toFixed(1)} km/h
          </div>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Miles / Hour</div>
          <div className="text-lg font-mono font-bold text-slate-200 mt-1">
            {speedMph.toFixed(1)} mph
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Planetary Weight
const MassWeightTool: React.FC = () => {
  const [massKg, setMassKg] = useState<number>(70);

  const worlds = [
    { name: 'Earth', g: 9.81, factor: 1.0 },
    { name: 'The Moon', g: 1.62, factor: 0.165 },
    { name: 'Mars', g: 3.71, factor: 0.378 },
    { name: 'Venus', g: 8.87, factor: 0.904 },
    { name: 'Jupiter', g: 24.79, factor: 2.528 },
    { name: 'The Sun', g: 274.0, factor: 27.9 }
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Mass vs. Planetary Weight</h3>
        <p className="text-xs text-slate-400 mt-1">
          Your invariant intrinsic mass remains identical everywhere in the universe; weight is the downward gravitational force (<span className="font-mono text-cyan-400">W = m · g</span>).
        </p>
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">Your Body Mass (kg):</label>
        <input
          type="number"
          value={massKg}
          onChange={(e) => setMassKg(Number(e.target.value))}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {worlds.map((w) => {
          const weightN = massKg * w.g;
          const apparentKg = massKg * w.factor;

          return (
            <div key={w.name} className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1">
              <div className="text-xs font-semibold text-slate-300">{w.name}</div>
              <div className="text-base font-mono font-bold text-cyan-300">
                {apparentKg.toFixed(1)} <span className="text-xs font-normal text-slate-400">kg eq.</span>
              </div>
              <div className="text-[10px] font-mono text-slate-500">
                {weightN.toFixed(0)} Newtons (g = {w.g})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 6. Ohm's Law Tool
const OhmsLawTool: React.FC = () => {
  const [volts, setVolts] = useState<number>(12);
  const [resistance, setResistance] = useState<number>(4);

  const current = resistance > 0 ? volts / resistance : 0;
  const power = volts * current;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Ohm’s Law & Electric Power</h3>
        <p className="text-xs text-slate-400 mt-1">
          Fundamental DC electricity calculations: <span className="font-mono text-cyan-400">V = I · R</span> and <span className="font-mono text-cyan-400">P = V · I = I² · R</span>.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Voltage (V in Volts):</label>
          <input
            type="number"
            value={volts}
            onChange={(e) => setVolts(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">Resistance (R in Ohms):</label>
          <input
            type="number"
            value={resistance}
            onChange={(e) => setResistance(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Current (I = V / R)</div>
          <div className="text-2xl font-mono font-bold text-cyan-300 mt-1">
            {current.toFixed(2)} A
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
          <div className="text-xs text-slate-500">Power (P = V · I)</div>
          <div className="text-2xl font-mono font-bold text-amber-400 mt-1">
            {power.toFixed(2)} W
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. Scientific Notation
const ScientificNotationTool: React.FC = () => {
  const [num, setNum] = useState<string>('602200000000000000000000');

  const parsed = parseFloat(num);
  const isValid = !isNaN(parsed);

  const exponential = isValid ? parsed.toExponential(4) : 'Invalid';
  const parts = exponential.split('e');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100">Scientific Notation Converter</h3>
        <p className="text-xs text-slate-400 mt-1">
          Express astronomical numbers and subatomic scales in standardized scientific format (<span className="font-mono text-cyan-400">m × 10ⁿ</span>).
        </p>
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">Enter Standard Number (or paste):</label>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-slate-200"
        />
      </div>

      {isValid && parts.length === 2 && (
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1">
          <div className="text-xs text-slate-500 font-mono">Scientific Form</div>
          <div className="text-3xl font-mono font-bold text-cyan-300">
            {parts[0]} × 10<sup>{parts[1].replace('+', '')}</sup>
          </div>
        </div>
      )}

      <div>
        <span className="text-xs text-slate-400 block mb-2">Famous Scientific Constants:</span>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Avogadro’s Number', val: '6.02214076e23' },
            { name: 'Speed of Light (c)', val: '299792458' },
            { name: 'Gravitational Constant (G)', val: '6.6743e-11' },
            { name: 'Planck’s Constant (h)', val: '6.62607e-34' }
          ].map((c) => (
            <button
              key={c.name}
              onClick={() => setNum(c.val)}
              className="px-2.5 py-1 text-xs font-mono rounded border border-slate-800 bg-slate-950 text-slate-300 hover:border-cyan-500"
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
