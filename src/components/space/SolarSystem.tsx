import React, { useState, useEffect, useRef } from 'react';
import { CelestialBody } from '../../types';
import { SOLAR_SYSTEM_DATA, DEEP_SPACE_OBJECTS } from '../../data/solarSystem';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Info, Compass, Sparkles } from 'lucide-react';

interface SolarSystemProps {
  onSelectBody?: (body: CelestialBody) => void;
}

export const SolarSystem: React.FC<SolarSystemProps> = ({ onSelectBody }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedBody, setSelectedBody] = useState<CelestialBody>(SOLAR_SYSTEM_DATA[3]); // Earth default
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const [activeTab, setActiveTab] = useState<'orbits' | 'comparison' | 'deep-space'>('orbits');
  const [scaleMode, setScaleMode] = useState<'educational' | 'realistic'>('educational');

  const anglesRef = useRef<Record<string, number>>({
    mercury: 0.2,
    venus: 1.1,
    earth: 2.3,
    mars: 3.5,
    jupiter: 4.2,
    saturn: 5.1,
    uranus: 0.8,
    neptune: 1.9,
    pluto: 2.8
  });

  // Orbital simulation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (isPlaying) {
        // Update orbital angles based on Keplerian periods
        // Earth (365.25 days) orbits at baseline angular speed
        const earthBaseSpeed = 0.5 * speedMultiplier; // rad/s in sim
        SOLAR_SYSTEM_DATA.forEach((body) => {
          if (body.orbitalPeriodDays > 0) {
            const relativeSpeed = (365.25 / body.orbitalPeriodDays) * earthBaseSpeed;
            anglesRef.current[body.id] = (anglesRef.current[body.id] || 0) + relativeSpeed * dt;
          }
        });
      }

      // Draw Canvas
      const canvas = canvasRef.current;
      if (canvas && activeTab === 'orbits') {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          // Deep space stars background
          ctx.fillStyle = '#06080e';
          ctx.fillRect(0, 0, w, h);

          // Render subtle background starfield
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          for (let s = 0; s < 70; s++) {
            const sx = (s * 137.5) % w;
            const sy = (s * 223.7) % h;
            ctx.fillRect(sx, sy, 1, 1);
          }

          const centerX = w / 2;
          const centerY = h / 2;

          // Draw orbital rings
          SOLAR_SYSTEM_DATA.forEach((body) => {
            if (body.orbitRadiusPx > 0) {
              const r = scaleMode === 'educational' ? body.orbitRadiusPx : Math.log10(body.distanceFromSunMillionKm) * 85;
              ctx.strokeStyle = selectedBody.id === body.id ? 'rgba(6, 182, 212, 0.6)' : 'rgba(71, 85, 105, 0.25)';
              ctx.lineWidth = selectedBody.id === body.id ? 1.5 : 1;
              ctx.beginPath();
              ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
              ctx.stroke();
            }
          });

          // Draw The Sun
          const sunGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 32);
          sunGrad.addColorStop(0, '#fef08a');
          sunGrad.addColorStop(0.4, '#f59e0b');
          sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

          ctx.fillStyle = sunGrad;
          ctx.beginPath();
          ctx.arc(centerX, centerY, 32, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(centerX, centerY, 16, 0, Math.PI * 2);
          ctx.fill();

          // Draw Planets
          SOLAR_SYSTEM_DATA.forEach((body) => {
            if (body.orbitRadiusPx === 0) return; // Skip Sun

            const r = scaleMode === 'educational' ? body.orbitRadiusPx : Math.log10(body.distanceFromSunMillionKm) * 85;
            const angle = anglesRef.current[body.id] || 0;
            const px = centerX + r * Math.cos(angle);
            const py = centerY + r * Math.sin(angle);

            // Ring for Saturn / Uranus
            if (body.ring) {
              ctx.strokeStyle = 'rgba(252, 211, 77, 0.4)';
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.ellipse(px, py, body.sizePx * 1.6, body.sizePx * 0.6, Math.PI / 6, 0, Math.PI * 2);
              ctx.stroke();
            }

            // Planet body
            ctx.fillStyle = body.color;
            ctx.beginPath();
            ctx.arc(px, py, body.sizePx / 2, 0, Math.PI * 2);
            ctx.fill();

            // Selected halo
            if (selectedBody.id === body.id) {
              ctx.strokeStyle = '#38bdf8';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(px, py, body.sizePx / 2 + 5, 0, Math.PI * 2);
              ctx.stroke();

              // Name label
              ctx.fillStyle = '#ffffff';
              ctx.font = 'bold 10px monospace';
              ctx.fillText(body.name, px + body.sizePx / 2 + 6, py + 3);
            }
          });
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, speedMultiplier, selectedBody, activeTab, scaleMode]);

  const handleSelectBody = (body: CelestialBody) => {
    setSelectedBody(body);
    if (onSelectBody) onSelectBody(body);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('orbits')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'orbits'
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            Orbital System
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'comparison'
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            Relative Scale Comparison
          </button>
          <button
            onClick={() => setActiveTab('deep-space')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'deep-space'
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            Deep Space & Astrophysics
          </button>
        </div>

        {activeTab === 'orbits' && (
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Model:</span>
            <button
              onClick={() => setScaleMode(scaleMode === 'educational' ? 'realistic' : 'educational')}
              className="text-cyan-400 hover:underline capitalize"
            >
              {scaleMode} View
            </button>
          </div>
        )}
      </div>

      {activeTab === 'orbits' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Orbital Canvas Viewport */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
            <div className="w-full relative flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={700}
                height={520}
                className="w-full max-w-[700px] h-[460px] rounded-lg border border-slate-800 bg-slate-950 cursor-crosshair"
              />
            </div>

            {/* Orbit animation controls */}
            <div className="w-full flex flex-wrap items-center justify-between mt-4 px-2 gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? 'Pause' : 'Resume'}
                </button>
                <button
                  onClick={() => {
                    anglesRef.current = {
                      mercury: 0,
                      venus: 0,
                      earth: 0,
                      mars: 0,
                      jupiter: 0,
                      saturn: 0,
                      uranus: 0,
                      neptune: 0,
                      pluto: 0
                    };
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Align Planets
                </button>
              </div>

              {/* Speed slider */}
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span>Speed:</span>
                <input
                  type="range"
                  min={0.2}
                  max={4.0}
                  step={0.2}
                  value={speedMultiplier}
                  onChange={(e) => setSpeedMultiplier(Number(e.target.value))}
                  className="w-24 accent-cyan-500 cursor-pointer"
                />
                <span className="font-mono text-cyan-400 w-8">{speedMultiplier}x</span>
              </div>
            </div>

            {/* Quick planet selector bar */}
            <div className="w-full flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800">
              {SOLAR_SYSTEM_DATA.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleSelectBody(b)}
                  className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                    selectedBody.id === b.id
                      ? 'bg-cyan-950 border border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-slate-950 border border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Planet Telemetry Dossier */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedBody.type}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{selectedBody.name}</h3>
                </div>
                <div
                  className="w-8 h-8 rounded-full border border-white/20 shadow-lg"
                  style={{ backgroundColor: selectedBody.color }}
                />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{selectedBody.overview}</p>

              {/* Empirical Astronomical Metrics */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Equatorial Diameter</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {selectedBody.diameterKm.toLocaleString()} km
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Distance from Sun</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {selectedBody.distanceFromSunMillionKm}M km
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Orbital Period (Year)</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {selectedBody.orbitalPeriodDays > 0 ? `${selectedBody.orbitalPeriodDays} Earth days` : 'N/A (Center)'}
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Mean Temperature</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {selectedBody.meanTempC} °C
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Known Moons</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {selectedBody.moonsCount}
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-slate-500">Rotation Period (Day)</div>
                  <div className="font-mono font-semibold text-slate-200 mt-0.5">
                    {Math.abs(selectedBody.rotationPeriodHours).toFixed(1)} hrs
                  </div>
                </div>
              </div>

              {/* Atmosphere */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-400 font-mono mb-1">Atmospheric Composition:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedBody.atmosphere.map((g, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Scientific Facts */}
              <div className="space-y-1.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Scientific Facts</h4>
                <ul className="space-y-1">
                  {selectedBody.keyFacts.map((fact, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">●</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historic Exploration Missions */}
              {selectedBody.missions.length > 0 && (
                <div className="border-t border-slate-800 pt-3">
                  <div className="text-xs text-slate-400 font-mono mb-1">Notable Exploration Probes:</div>
                  <div className="text-xs text-slate-300">
                    {selectedBody.missions.join(' · ')}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Relative Scale Comparison Tool */}
      {activeTab === 'comparison' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Relative Planetary Diameters</h3>
            <p className="text-xs text-slate-400 mt-1">
              In typical textbook illustrations, planetary sizes are grossly exaggerated compared to their orbital distances. Below is the true relative size of celestial bodies scaled to Earth (1.0×).
            </p>
          </div>

          <div className="space-y-4">
            {SOLAR_SYSTEM_DATA.filter((b) => b.id !== 'sun').map((b) => {
              const earthDiameter = 12742;
              const ratio = b.diameterKm / earthDiameter;
              const barPercent = Math.min(100, Math.max(2, (b.diameterKm / 139820) * 100));

              return (
                <div key={b.id} className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.color }} />
                      <span className="font-semibold text-slate-200">{b.name}</span>
                      <span className="text-slate-500 font-mono">({b.diameterKm.toLocaleString()} km)</span>
                    </div>
                    <span className="font-mono text-cyan-400 font-semibold">{ratio.toFixed(2)}× Earth</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${barPercent}%`, backgroundColor: b.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-4 text-xs text-slate-300">
            <span className="text-amber-400 font-bold">The Sun Scale:</span> The Sun’s diameter is 1,392,700 km—over 109 times that of Earth and nearly 10 times that of Jupiter! If the Sun were the size of a standard basketball (24 cm), Earth would be a tiny pebble just 2.2 mm across.
          </div>
        </div>
      )}

      {/* Deep Space & Astrophysics Module */}
      {activeTab === 'deep-space' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEEP_SPACE_OBJECTS.map((obj) => (
            <div key={obj.id} className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{obj.category}</span>
                <h4 className="text-lg font-bold text-slate-100 mt-1">{obj.title}</h4>
                <p className="text-xs text-slate-400 mt-1 italic">{obj.summary}</p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">{obj.content}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                Observable Universe Scale: ~93 Billion Light-Years
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
