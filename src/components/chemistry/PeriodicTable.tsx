import React, { useState, useMemo } from 'react';
import { ChemicalElement } from '../../types';
import { PERIODIC_TABLE_DATA, CATEGORY_LABELS, CATEGORY_COLORS } from '../../data/periodicTable';
import { Search, X, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

interface PeriodicTableProps {
  onSelectElement?: (element: ChemicalElement) => void;
  selectedNumber?: number;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({ onSelectElement, selectedNumber }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalElement, setActiveModalElement] = useState<ChemicalElement | null>(null);

  // Filter elements
  const filteredElements = useMemo(() => {
    return PERIODIC_TABLE_DATA.filter((el) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.number.toString() === searchQuery.trim();

      const matchesCategory =
        selectedCategory === 'all' || el.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const filteredNumbersSet = useMemo(() => {
    return new Set(filteredElements.map((e) => e.number));
  }, [filteredElements]);

  // Handle click on element
  const handleElementClick = (el: ChemicalElement) => {
    setActiveModalElement(el);
    if (onSelectElement) onSelectElement(el);
  };

  // Build 18-column grid positions
  // Standard layout: 7 periods, 18 groups.
  // Lanthanides (57-71) shown in Period 6 row 3 placeholder or separate lower row.
  // Actinides (89-103) shown in Period 7 row 3 placeholder or separate lower row.
  const mainGridElements = useMemo(() => {
    return PERIODIC_TABLE_DATA.filter(
      (el) => !(el.number >= 57 && el.number <= 71) && !(el.number >= 89 && el.number <= 103)
    );
  }, []);

  const lanthanides = useMemo(() => {
    return PERIODIC_TABLE_DATA.filter((el) => el.number >= 57 && el.number <= 71);
  }, []);

  const actinides = useMemo(() => {
    return PERIODIC_TABLE_DATA.filter((el) => el.number >= 89 && el.number <= 103);
  }, []);

  return (
    <div className="space-y-6">
      {/* Search and Category Filters */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, symbol, or atomic number (e.g., Gold, Au, 79)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick counts */}
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span>Showing:</span>
            <span className="text-cyan-400 font-bold">{filteredElements.length}</span>
            <span>of 118 Elements</span>
          </div>
        </div>

        {/* Category Filter Pills (Functional Filter Buttons) */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Elements
          </button>
          {Object.entries(CATEGORY_LABELS).map(([catKey, label]) => {
            const isSelected = selectedCategory === catKey;
            const colors = CATEGORY_COLORS[catKey as keyof typeof CATEGORY_COLORS];
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium border transition-colors ${
                  isSelected
                    ? `${colors.bg} ${colors.text} ${colors.border} ring-1 ring-cyan-500`
                    : 'bg-slate-950 text-slate-400 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Periodic Table Grid (Horizontal Scroll on Mobile) */}
      <div className="overflow-x-auto pb-4 pt-2 -mx-2 px-2">
        <div className="min-w-[960px] max-w-[1200px] mx-auto space-y-3">
          {/* Main 7 Periods Grid */}
          <div
            className="grid gap-1.5"
            style={{
              gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(7, auto)'
            }}
          >
            {mainGridElements.map((el) => {
              const isMatch = filteredNumbersSet.has(el.number);
              const isSelected = selectedNumber === el.number;
              const colorInfo = CATEGORY_COLORS[el.category];

              return (
                <button
                  key={el.number}
                  onClick={() => handleElementClick(el)}
                  style={{
                    gridColumnStart: el.group,
                    gridRowStart: el.period
                  }}
                  className={`relative p-1.5 rounded-lg border text-left flex flex-col justify-between transition-all duration-150 h-[68px] ${
                    colorInfo.bg
                  } ${colorInfo.border} ${
                    isMatch ? 'opacity-100 hover:scale-105 hover:z-10' : 'opacity-20 grayscale'
                  } ${isSelected ? 'ring-2 ring-cyan-400 scale-105 z-20' : ''}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-slate-400">{el.number}</span>
                    <span className="text-[9px] font-mono text-slate-500 truncate max-w-[32px]">
                      {el.atomicMass.toFixed(1)}
                    </span>
                  </div>

                  <div className="text-base font-bold font-mono tracking-tight text-slate-100 text-center my-0.5">
                    {el.symbol}
                  </div>

                  <div className="text-[9px] text-slate-300 truncate w-full text-center">
                    {el.name}
                  </div>
                </button>
              );
            })}

            {/* Placeholders for Lanthanides & Actinides in Period 6 & 7 */}
            <div
              style={{ gridColumnStart: 3, gridRowStart: 6 }}
              className="p-1 rounded-lg border border-indigo-900/50 bg-indigo-950/30 flex flex-col items-center justify-center text-center h-[68px]"
            >
              <span className="text-[10px] font-mono text-indigo-400 font-semibold">57-71</span>
              <span className="text-[9px] text-indigo-300">La-Lu</span>
            </div>
            <div
              style={{ gridColumnStart: 3, gridRowStart: 7 }}
              className="p-1 rounded-lg border border-fuchsia-900/50 bg-fuchsia-950/30 flex flex-col items-center justify-center text-center h-[68px]"
            >
              <span className="text-[10px] font-mono text-fuchsia-400 font-semibold">89-103</span>
              <span className="text-[9px] text-fuchsia-300">Ac-Lr</span>
            </div>
          </div>

          {/* Lower Rows: Lanthanides and Actinides */}
          <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
            {/* Lanthanides Row */}
            <div className="flex items-center gap-1.5">
              <div className="w-24 shrink-0 text-right pr-2 text-[10px] font-mono text-indigo-400">
                Lanthanides:
              </div>
              <div className="grid grid-cols-15 gap-1.5 flex-1">
                {lanthanides.map((el) => {
                  const isMatch = filteredNumbersSet.has(el.number);
                  const isSelected = selectedNumber === el.number;
                  const colorInfo = CATEGORY_COLORS[el.category];

                  return (
                    <button
                      key={el.number}
                      onClick={() => handleElementClick(el)}
                      className={`p-1 rounded-lg border text-left flex flex-col justify-between transition-all duration-150 h-[64px] ${
                        colorInfo.bg
                      } ${colorInfo.border} ${
                        isMatch ? 'opacity-100 hover:scale-105' : 'opacity-20 grayscale'
                      } ${isSelected ? 'ring-2 ring-cyan-400' : ''}`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>{el.number}</span>
                      </div>
                      <div className="text-sm font-bold font-mono text-slate-100 text-center">
                        {el.symbol}
                      </div>
                      <div className="text-[8px] text-slate-300 truncate text-center">
                        {el.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actinides Row */}
            <div className="flex items-center gap-1.5">
              <div className="w-24 shrink-0 text-right pr-2 text-[10px] font-mono text-fuchsia-400">
                Actinides:
              </div>
              <div className="grid grid-cols-15 gap-1.5 flex-1">
                {actinides.map((el) => {
                  const isMatch = filteredNumbersSet.has(el.number);
                  const isSelected = selectedNumber === el.number;
                  const colorInfo = CATEGORY_COLORS[el.category];

                  return (
                    <button
                      key={el.number}
                      onClick={() => handleElementClick(el)}
                      className={`p-1 rounded-lg border text-left flex flex-col justify-between transition-all duration-150 h-[64px] ${
                        colorInfo.bg
                      } ${colorInfo.border} ${
                        isMatch ? 'opacity-100 hover:scale-105' : 'opacity-20 grayscale'
                      } ${isSelected ? 'ring-2 ring-cyan-400' : ''}`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>{el.number}</span>
                      </div>
                      <div className="text-sm font-bold font-mono text-slate-100 text-center">
                        {el.symbol}
                      </div>
                      <div className="text-[8px] text-slate-300 truncate text-center">
                        {el.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element Detail Modal / Drawer */}
      {activeModalElement && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModalElement(null)}
              className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Lockup */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex flex-col items-center justify-center text-center p-2 shrink-0">
                <span className="text-xs font-mono text-slate-400">{activeModalElement.number}</span>
                <span className="text-3xl font-mono font-bold text-cyan-300 leading-none">
                  {activeModalElement.symbol}
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1">
                  {activeModalElement.atomicMass.toFixed(2)}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-slate-100">{activeModalElement.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                    {CATEGORY_LABELS[activeModalElement.category]}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-3">
                  <span>Period {activeModalElement.period}</span>
                  <span>·</span>
                  <span>Group {activeModalElement.group}</span>
                  <span>·</span>
                  <span>Standard State: {activeModalElement.phase}</span>
                </div>
                <div className="text-xs text-cyan-400 font-mono mt-1.5">
                  Electron Config: {activeModalElement.electronConfiguration}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Scientific Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{activeModalElement.summary}</p>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-500">Atomic Mass</div>
                <div className="text-sm font-mono font-semibold text-slate-200 mt-0.5">
                  {activeModalElement.atomicMass} u
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-500">Density</div>
                <div className="text-sm font-mono font-semibold text-slate-200 mt-0.5">
                  {activeModalElement.density ? `${activeModalElement.density} g/cm³` : 'Unknown'}
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-500">Melting Point</div>
                <div className="text-sm font-mono font-semibold text-slate-200 mt-0.5">
                  {activeModalElement.meltingPoint ? `${activeModalElement.meltingPoint} K` : 'N/A'}
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-500">Boiling Point</div>
                <div className="text-sm font-mono font-semibold text-slate-200 mt-0.5">
                  {activeModalElement.boilingPoint ? `${activeModalElement.boilingPoint} K` : 'N/A'}
                </div>
              </div>
            </div>

            {/* Everyday Uses */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Real-World Applications & Uses
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalElement.everydayUses.map((use, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">●</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* History & Discovery */}
            {activeModalElement.discoveredBy && (
              <div className="text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 pt-4">
                <span>Discovered By: <strong className="text-slate-200">{activeModalElement.discoveredBy}</strong></span>
                <span>Year: <strong className="text-slate-200">{activeModalElement.yearDiscovered}</strong></span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
