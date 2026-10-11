import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 mt-20 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>ScienceVerse</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              An interactive science learning universe designed for curious students and educators. Explore real principles of physics, chemistry, biology, and space astronomy through dynamic simulations.
            </p>
          </div>

          {/* Col 2: Discovery Topics */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono">
              Learning Domains
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onNavigate('lab')} className="hover:text-cyan-400 transition-colors">
                  Virtual Science Laboratory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('periodic-table')} className="hover:text-cyan-400 transition-colors">
                  118-Element Periodic Table
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('universe')} className="hover:text-cyan-400 transition-colors">
                  Orbital Solar System Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('biology')} className="hover:text-cyan-400 transition-colors">
                  Cell Cytology & Human Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Assessment & Tools */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono">
              Interactive Tools
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button onClick={() => onNavigate('quizzes')} className="hover:text-cyan-400 transition-colors">
                  Science Quiz Arena
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-cyan-400 transition-colors">
                  Scientific Calculators & Converters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('physics')} className="hover:text-cyan-400 transition-colors">
                  Physics Playground
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Scientific Accuracy */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono">
              Scientific Quality
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Simulations illustrate established physical laws (Newtonian mechanics, Snell’s Law, Bohr atomic model, Le Chatelier’s principle) at an educational level. Simplified models are clearly marked. No live laboratory measurements are simulated.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} ScienceVerse. All data and learning modules operate client-side without external tracking.
          </div>
          <div className="flex items-center gap-4">
            <span>Offline-ready & Privacy First</span>
            <span>·</span>
            <span>Vercel Deployable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
