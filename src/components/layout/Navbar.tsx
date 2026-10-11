import React, { useState } from 'react';
import { Search, Award, Menu, X } from 'lucide-react';
import { UserProgress } from '../../types';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenDashboard: () => void;
  progress: UserProgress;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  onOpenDashboard,
  progress
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'lab', label: 'Virtual Lab' },
    { id: 'periodic-table', label: 'Periodic Table' },
    { id: 'universe', label: 'Universe' },
    { id: 'biology', label: 'Biology' },
    { id: 'physics', label: 'Physics' },
    { id: 'quizzes', label: 'Quizzes' },
    { id: 'tools', label: 'Calculators' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="text-lg font-bold tracking-tight text-slate-100 flex items-center gap-2 whitespace-nowrap shrink-0 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-shadow" />
          <span>ScienceVerse</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
                activeTab === link.id
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400'
                  : 'hover:text-slate-200'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Tools */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick search button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors whitespace-nowrap"
            title="Search anything (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono text-[11px]">Search</span>
            <kbd className="hidden sm:inline text-[9px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* User Progress trigger button */}
          <button
            onClick={onOpenDashboard}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Award className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Progress</span>
            <span className="font-mono text-[11px] bg-cyan-700 px-1.5 py-0.2 rounded-full">
              {progress.experimentsCompleted.length + progress.quizzesCompleted}
            </span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                activeTab === link.id
                  ? 'bg-cyan-950 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
