import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, FlaskConical, Atom, Globe, BookOpen, ChevronRight } from 'lucide-react';
import { PERIODIC_TABLE_DATA } from '../../data/periodicTable';
import { EXPERIMENTS_DATA } from '../../data/experiments';
import { SOLAR_SYSTEM_DATA, DEEP_SPACE_OBJECTS } from '../../data/solarSystem';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string, payload?: any) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches: Array<{
      category: 'element' | 'experiment' | 'space' | 'quiz';
      title: string;
      subtitle: string;
      action: () => void;
    }> = [];

    // Search Periodic Table
    PERIODIC_TABLE_DATA.forEach((el) => {
      if (
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase() === q ||
        el.number.toString() === q
      ) {
        matches.push({
          category: 'element',
          title: `${el.name} (${el.symbol})`,
          subtitle: `Element #${el.number} · ${el.category}`,
          action: () => {
            onNavigate('periodic-table', el);
            onClose();
          }
        });
      }
    });

    // Search Experiments
    EXPERIMENTS_DATA.forEach((exp) => {
      if (
        exp.title.toLowerCase().includes(q) ||
        exp.description.toLowerCase().includes(q) ||
        exp.tag.toLowerCase().includes(q)
      ) {
        matches.push({
          category: 'experiment',
          title: exp.title,
          subtitle: `Lab · ${exp.category.toUpperCase()} · ${exp.difficulty}`,
          action: () => {
            onNavigate('lab', exp.id);
            onClose();
          }
        });
      }
    });

    // Search Space
    SOLAR_SYSTEM_DATA.forEach((body) => {
      if (body.name.toLowerCase().includes(q) || body.overview.toLowerCase().includes(q)) {
        matches.push({
          category: 'space',
          title: body.name,
          subtitle: `Solar System · ${body.type}`,
          action: () => {
            onNavigate('universe', body);
            onClose();
          }
        });
      }
    });

    return matches.slice(0, 10);
  }, [query, onNavigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-4 shadow-2xl relative space-y-4">
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 absolute left-3 text-cyan-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search experiments, elements, celestial bodies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={onClose}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-1.5">
          {query.trim() === '' ? (
            <div className="text-center py-6 text-xs text-slate-500">
              Type to search all 118 elements, 15 lab experiments, celestial bodies, and topics.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-6 text-xs text-slate-400">
              No matching scientific items found for "{query}".
            </div>
          ) : (
            results.map((res, i) => (
              <button
                key={i}
                onClick={res.action}
                className="w-full p-2.5 rounded-lg border border-transparent hover:border-slate-800 hover:bg-slate-950 text-left flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-cyan-400">
                    {res.category === 'element' && <Atom className="w-4 h-4" />}
                    {res.category === 'experiment' && <FlaskConical className="w-4 h-4" />}
                    {res.category === 'space' && <Globe className="w-4 h-4" />}
                    {res.category === 'quiz' && <BookOpen className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                      {res.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">{res.subtitle}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
