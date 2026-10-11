import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';

interface PhysicsExpProps {
  expId: string;
  onComplete?: () => void;
}

export const PhysicsExperiments: React.FC<PhysicsExpProps> = ({ expId, onComplete }) => {
  if (expId === 'gravity-free-fall') return <GravityFreeFall onComplete={onComplete} />;
  if (expId === 'projectile-motion') return <ProjectileMotion onComplete={onComplete} />;
  if (expId === 'simple-pendulum') return <SimplePendulum onComplete={onComplete} />;
  if (expId === 'light-refraction') return <LightRefraction onComplete={onComplete} />;
  if (expId === 'electric-circuit') return <ElectricCircuit onComplete={onComplete} />;
  if (expId === 'magnetic-field') return <MagneticField onComplete={onComplete} />;
  return <div>Unknown physics experiment</div>;
};

// 1. Gravity and Free Fall
const GravityFreeFall: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [planet, setPlanet] = useState<'earth' | 'moon' | 'mars' | 'jupiter'>('earth');
  const [height, setHeight] = useState<number>(100); // meters
  const [mass, setMass] = useState<number>(10); // kg
  const [airResistance, setAirResistance] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(100);
  const [velocity, setVelocity] = useState<number>(0);
  const [hasLanded, setHasLanded] = useState<boolean>(false);

  const gravities = {
    earth: { g: 9.81, label: 'Earth (9.81 m/s²)' },
    moon: { g: 1.62, label: 'Moon (1.62 m/s²)' },
    mars: { g: 3.71, label: 'Mars (3.71 m/s²)' },
    jupiter: { g: 24.79, label: 'Jupiter (24.79 m/s²)' },
  };

  const g = gravities[planet].g;

  useEffect(() => {
    let animId: number;
    let lastTimestamp = performance.now();

    if (isRunning && !hasLanded) {
      const step = (now: number) => {
        const dt = (now - lastTimestamp) / 1000;
        lastTimestamp = now;

        setTime((prevTime) => {
          const newTime = prevTime + dt;
          
          let newV = 0;
          let newY = height;

          if (!airResistance) {
            newV = g * newTime;
            newY = Math.max(0, height - 0.5 * g * newTime * newTime);
          } else {
            // Simplified drag model: vt = sqrt((2mg)/(rho*Cd*A))
            const vt = Math.sqrt((2 * mass * g) / 0.4);
            newV = vt * Math.tanh((g * newTime) / vt);
            newY = Math.max(0, height - ((vt * vt) / g) * Math.log(Math.cosh((g * newTime) / vt)));
          }

          setVelocity(newV);
          setCurrentY(newY);

          if (newY <= 0) {
            setHasLanded(true);
            setIsRunning(false);
            if (onComplete) onComplete();
          }
          return newTime;
        });

        if (isRunning && !hasLanded) {
          animId = requestAnimationFrame(step);
        }
      };
      animId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animId);
  }, [isRunning, hasLanded, height, g, mass, airResistance, onComplete]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background sky / space
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, w, h);

    // Ground platform
    const groundY = h - 35;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, groundY, w, 35);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(w, groundY);
    ctx.stroke();

    // Height ruler lines
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.fillStyle = '#64748b';
    ctx.font = '10px monospace';
    for (let m = 0; m <= height; m += Math.max(10, Math.floor(height / 5))) {
      const yPos = groundY - (m / height) * (groundY - 40);
      ctx.beginPath();
      ctx.moveTo(30, yPos);
      ctx.lineTo(50, yPos);
      ctx.stroke();
      ctx.fillText(`${m}m`, 5, yPos + 3);
    }

    // Ball position
    const ballScreenY = groundY - (currentY / height) * (groundY - 40);
    const ballScreenX = w / 2;
    const radius = Math.min(22, Math.max(10, Math.cbrt(mass) * 6));

    // Shadow on ground
    const shadowAlpha = Math.max(0.1, 0.7 * (1 - currentY / height));
    ctx.fillStyle = `rgba(6, 182, 212, ${shadowAlpha})`;
    ctx.beginPath();
    ctx.ellipse(ballScreenX, groundY + 2, radius * 1.4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ball gradient
    const grad = ctx.createRadialGradient(
      ballScreenX - radius * 0.3,
      ballScreenY - radius * 0.3,
      radius * 0.1,
      ballScreenX,
      ballScreenY,
      radius
    );
    grad.addColorStop(0, '#67e8f9');
    grad.addColorStop(1, '#0284c7');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(ballScreenX, ballScreenY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Ball label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${mass}kg`, ballScreenX, ballScreenY + 4);

    // Impact ripple if landed
    if (hasLanded) {
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ballScreenX, groundY, 35, 0, Math.PI, true);
      ctx.stroke();
    }
  }, [currentY, height, mass, hasLanded]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setCurrentY(height);
    setVelocity(0);
    setHasLanded(false);
  };

  const theoreticalTime = !airResistance
    ? Math.sqrt((2 * height) / g)
    : Math.sqrt((2 * height) / g) * 1.12;

  const theoreticalImpactV = !airResistance
    ? Math.sqrt(2 * g * height)
    : Math.min(Math.sqrt(2 * g * height), Math.sqrt((2 * mass * g) / 0.4));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={500}
          height={380}
          className="w-full max-w-[500px] h-[360px] rounded-lg border border-slate-800 bg-slate-950"
        />
        <div className="w-full flex items-center justify-between mt-4 px-2">
          <div className="flex items-center gap-2">
            {!isRunning ? (
              <button
                onClick={() => {
                  if (hasLanded) handleReset();
                  setIsRunning(true);
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-lg transition-colors"
              >
                <Play className="w-3.5 h-3.5" /> Start Drop
              </button>
            ) : (
              <button
                onClick={() => setIsRunning(false)}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs rounded-lg transition-colors"
              >
                <Pause className="w-3.5 h-3.5" /> Pause
              </button>
            )}
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
          <div className="text-xs font-mono text-cyan-400">
            {hasLanded ? 'Impact reached' : isRunning ? 'Falling...' : 'Ready'}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Real-time telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Live Telemetry</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Current Altitude</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {currentY.toFixed(1)} <span className="text-xs text-slate-400 font-normal">m</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Velocity</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {velocity.toFixed(2)} <span className="text-xs text-slate-400 font-normal">m/s</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Elapsed Time</div>
              <div className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                {time.toFixed(2)} <span className="text-xs text-slate-400 font-normal">s</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Kinetic Energy</div>
              <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                {(0.5 * mass * velocity * velocity).toFixed(0)} <span className="text-xs text-slate-400 font-normal">J</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Experiment Controls</h4>
          
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Drop Height:</span>
              <span className="font-mono text-cyan-400">{height} m</span>
            </div>
            <input
              type="range"
              min={10}
              max={300}
              step={5}
              value={height}
              disabled={isRunning}
              onChange={(e) => {
                const val = Number(e.target.value);
                setHeight(val);
                setCurrentY(val);
                setTime(0);
                setVelocity(0);
                setHasLanded(false);
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Object Mass:</span>
              <span className="font-mono text-cyan-400">{mass} kg</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={mass}
              disabled={isRunning}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1.5">Celestial Body (Gravity):</label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(gravities) as Array<keyof typeof gravities>).map((key) => (
                <button
                  key={key}
                  disabled={isRunning}
                  onClick={() => {
                    setPlanet(key);
                    handleReset();
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    planet === key
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {gravities[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <span className="text-xs text-slate-300">Simulate Atmospheric Drag</span>
            <button
              onClick={() => {
                setAirResistance(!airResistance);
                handleReset();
              }}
              disabled={isRunning}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                airResistance
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {airResistance ? 'Air On' : 'Vacuum'}
            </button>
          </div>
        </div>

        {/* Scientific explanation */}
        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300 space-y-1">
          <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Info className="w-3.5 h-3.5" /> Theoretical Predictions
          </div>
          <p className="text-slate-400">
            Vacuum Time of Flight: <span className="font-mono text-cyan-300">{theoreticalTime.toFixed(2)} s</span> (using <span className="font-mono">t = √(2h/g)</span>)
          </p>
          <p className="text-slate-400">
            Impact Speed: <span className="font-mono text-cyan-300">{theoreticalImpactV.toFixed(2)} m/s</span> ({((theoreticalImpactV * 3600) / 1000).toFixed(1)} km/h)
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Projectile Motion
const ProjectileMotion: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [velocity0, setVelocity0] = useState<number>(45); // m/s
  const [angleDeg, setAngleDeg] = useState<number>(45); // degrees
  const [gravity, setGravity] = useState<number>(9.81);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [animTime, setAnimTime] = useState<number>(0);
  const [trajectory, setTrajectory] = useState<Array<{ x: number; y: number }>>([]);

  const angleRad = (angleDeg * Math.PI) / 180;
  const flightTime = (2 * velocity0 * Math.sin(angleRad)) / gravity;
  const maxHeight = (velocity0 * velocity0 * Math.pow(Math.sin(angleRad), 2)) / (2 * gravity);
  const range = (velocity0 * velocity0 * Math.sin(2 * angleRad)) / gravity;

  useEffect(() => {
    let animId: number;
    let startTimestamp = performance.now();

    if (isRunning) {
      const step = (now: number) => {
        const elapsed = (now - startTimestamp) / 1000;
        const currentT = Math.min(flightTime, elapsed * 1.5); // 1.5x speed
        setAnimTime(currentT);

        const curX = velocity0 * Math.cos(angleRad) * currentT;
        const curY = velocity0 * Math.sin(angleRad) * currentT - 0.5 * gravity * currentT * currentT;

        setTrajectory((prev) => [...prev, { x: curX, y: Math.max(0, curY) }]);

        if (currentT >= flightTime) {
          setIsRunning(false);
          if (onComplete) onComplete();
        } else {
          animId = requestAnimationFrame(step);
        }
      };
      animId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animId);
  }, [isRunning, velocity0, angleRad, gravity, flightTime, onComplete]);

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Dark backdrop
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, w, h);

    // Ground
    const groundY = h - 40;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, groundY, w, 40);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(w, groundY);
    ctx.stroke();

    // Scale calculation
    const maxScaleX = Math.max(250, range * 1.15);
    const maxScaleY = Math.max(80, maxHeight * 1.3);
    const toScreenX = (x: number) => 40 + (x / maxScaleX) * (w - 60);
    const toScreenY = (y: number) => groundY - (y / maxScaleY) * (groundY - 40);

    // Grid marks
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
    ctx.fillStyle = '#64748b';
    ctx.font = '9px monospace';
    for (let x = 0; x <= maxScaleX; x += 50) {
      const sx = toScreenX(x);
      ctx.beginPath();
      ctx.moveTo(sx, groundY);
      ctx.lineTo(sx, groundY + 8);
      ctx.stroke();
      ctx.fillText(`${x}m`, sx - 8, groundY + 20);
    }

    // Cannon at origin
    ctx.save();
    ctx.translate(40, groundY);
    ctx.rotate(-angleRad);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(0, -6, 26, 12);
    ctx.restore();

    // Full theoretical parabolic trajectory preview (faint dotted line)
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let t = 0; t <= flightTime; t += flightTime / 60) {
      const px = velocity0 * Math.cos(angleRad) * t;
      const py = velocity0 * Math.sin(angleRad) * t - 0.5 * gravity * t * t;
      const sx = toScreenX(px);
      const sy = toScreenY(Math.max(0, py));
      if (t === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Actual traced trajectory
    if (trajectory.length > 1) {
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      trajectory.forEach((pt, i) => {
        const sx = toScreenX(pt.x);
        const sy = toScreenY(pt.y);
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      });
      ctx.stroke();
    }

    // Flying projectile
    const curX = velocity0 * Math.cos(angleRad) * animTime;
    const curY = Math.max(0, velocity0 * Math.sin(angleRad) * animTime - 0.5 * gravity * animTime * animTime);
    const projSx = toScreenX(curX);
    const projSy = toScreenY(curY);

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(projSx, projSy, 6, 0, Math.PI * 2);
    ctx.fill();

    // Peak altitude marker
    if (trajectory.length > 0) {
      const peakX = toScreenX(range / 2);
      const peakY = toScreenY(maxHeight);
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(peakX, peakY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(`Peak: ${maxHeight.toFixed(1)}m`, peakX - 25, peakY - 8);
    }
  }, [trajectory, velocity0, angleRad, gravity, flightTime, maxHeight, range, animTime]);

  const handleLaunch = () => {
    setTrajectory([]);
    setAnimTime(0);
    setIsRunning(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={520}
          height={340}
          className="w-full max-w-[520px] h-[340px] rounded-lg border border-slate-800 bg-slate-950"
        />
        <div className="w-full flex items-center justify-between mt-4 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleLaunch}
              className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-lg transition-colors"
            >
              <Play className="w-3.5 h-3.5" /> Fire Cannon
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setAnimTime(0);
                setTrajectory([]);
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Path
            </button>
          </div>
          <div className="text-xs font-mono text-cyan-400">
            {isRunning ? 'Projectile in flight' : trajectory.length > 0 ? 'Target impacted' : 'Awaiting launch'}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Real-time telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Kinematic Results</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Maximum Range (R)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {range.toFixed(1)} <span className="text-xs text-slate-400 font-normal">m</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Max Height (H)</div>
              <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                {maxHeight.toFixed(1)} <span className="text-xs text-slate-400 font-normal">m</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Total Flight Time (T)</div>
              <div className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                {flightTime.toFixed(2)} <span className="text-xs text-slate-400 font-normal">s</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Horizontal Velocity</div>
              <div className="text-xl font-mono font-bold text-purple-300 tabular-nums">
                {(velocity0 * Math.cos(angleRad)).toFixed(1)} <span className="text-xs text-slate-400 font-normal">m/s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Launch Parameters</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Launch Angle (θ):</span>
              <span className="font-mono text-cyan-400 font-semibold">{angleDeg}°</span>
            </div>
            <input
              type="range"
              min={10}
              max={85}
              value={angleDeg}
              disabled={isRunning}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Initial Velocity (v₀):</span>
              <span className="font-mono text-cyan-400 font-semibold">{velocity0} m/s</span>
            </div>
            <input
              type="range"
              min={10}
              max={80}
              value={velocity0}
              disabled={isRunning}
              onChange={(e) => setVelocity0(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Gravitational Acceleration (g):</span>
              <span className="font-mono text-cyan-400">{gravity} m/s²</span>
            </div>
            <div className="flex gap-2">
              {[
                { name: 'Earth', val: 9.81 },
                { name: 'Moon', val: 1.62 },
                { name: 'Mars', val: 3.71 }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setGravity(item.val)}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    gravity === item.val
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Kinematic Insight:</span> Notice that setting the angle to exactly 45° maximizes the horizontal range <span className="font-mono text-cyan-300">R = (v₀² sin 2θ) / g</span>, as sin(90°) = 1.
        </div>
      </div>
    </div>
  );
};

// 3. Simple Pendulum
const SimplePendulum: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [length, setLength] = useState<number>(2.0); // meters
  const [mass, setMass] = useState<number>(1.0); // kg
  const [gravity, setGravity] = useState<number>(9.81);
  const [damping, setDamping] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const angleStateRef = useRef({ theta: 0.5, omega: 0, time: 0 });

  const theoreticalPeriod = 2 * Math.PI * Math.sqrt(length / gravity);
  const frequency = 1 / theoreticalPeriod;

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.04, (now - lastTime) / 1000);
      lastTime = now;

      if (isRunning) {
        const { theta, omega } = angleStateRef.current;
        // alpha = -(g/L)*sin(theta) - (damping ? b*omega : 0)
        const dampingCoeff = damping ? 0.15 : 0;
        const alpha = -(gravity / length) * Math.sin(theta) - dampingCoeff * omega;
        const newOmega = omega + alpha * dt;
        const newTheta = theta + newOmega * dt;
        angleStateRef.current = {
          theta: newTheta,
          omega: newOmega,
          time: angleStateRef.current.time + dt
        };
      }

      // Draw
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          ctx.fillStyle = '#080c14';
          ctx.fillRect(0, 0, w, h);

          const pivotX = w / 2;
          const pivotY = 50;
          const pxScale = 60; // pixels per meter
          const bobScreenLen = length * pxScale;
          const theta = angleStateRef.current.theta;

          const bobX = pivotX + bobScreenLen * Math.sin(theta);
          const bobY = pivotY + bobScreenLen * Math.cos(theta);

          // Support ceiling
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(pivotX - 60, pivotY);
          ctx.lineTo(pivotX + 60, pivotY);
          ctx.stroke();

          // Pivot pin
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.arc(pivotX, pivotY, 5, 0, Math.PI * 2);
          ctx.fill();

          // String
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(pivotX, pivotY);
          ctx.lineTo(bobX, bobY);
          ctx.stroke();

          // Bob
          const bobRadius = 12 + Math.cbrt(mass) * 6;
          ctx.fillStyle = '#0284c7';
          ctx.beginPath();
          ctx.arc(bobX, bobY, bobRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Normal vertical reference line
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(pivotX, pivotY);
          ctx.lineTo(pivotX, pivotY + bobScreenLen + 20);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, length, gravity, damping, mass]);

  const handleReset = () => {
    angleStateRef.current = { theta: 0.5, omega: 0, time: 0 };
    if (onComplete) onComplete();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={500}
          height={360}
          className="w-full max-w-[500px] h-[360px] rounded-lg border border-slate-800 bg-slate-950"
        />
        <div className="w-full flex items-center justify-between mt-4 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-lg transition-colors"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isRunning ? 'Pause' : 'Resume'}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Release at 30°
            </button>
          </div>
          <div className="text-xs font-mono text-cyan-400">
            {isRunning ? 'Oscillating' : 'Paused'}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Theoretical Harmonic Metrics</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Period (T)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {theoreticalPeriod.toFixed(2)} <span className="text-xs text-slate-400 font-normal">s</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Frequency (f)</div>
              <div className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                {frequency.toFixed(2)} <span className="text-xs text-slate-400 font-normal">Hz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Pendulum Parameters</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>String Length (L):</span>
              <span className="font-mono text-cyan-400 font-semibold">{length.toFixed(1)} m</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={3.5}
              step={0.1}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Bob Mass (m):</span>
              <span className="font-mono text-cyan-400 font-semibold">{mass.toFixed(1)} kg</span>
            </div>
            <input
              type="range"
              min={0.2}
              max={5.0}
              step={0.2}
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Planetary Gravity:</span>
              <span className="font-mono text-cyan-400">{gravity} m/s²</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Earth', g: 9.81 },
                { name: 'Moon', g: 1.62 },
                { name: 'Mars', g: 3.71 },
                { name: 'Jupiter', g: 24.79 }
              ].map((p) => (
                <button
                  key={p.name}
                  onClick={() => setGravity(p.g)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    gravity === p.g
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {p.name} ({p.g} m/s²)
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <span className="text-xs text-slate-300">Air Damping Resistance</span>
            <button
              onClick={() => setDamping(!damping)}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                damping ? 'bg-cyan-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {damping ? 'Damped' : 'Undamped'}
            </button>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Physical Law:</span> The mass of the bob has no effect on the oscillation period for small angles! The formula is strictly <span className="font-mono text-cyan-300">T = 2π√(L/g)</span>.
        </div>
      </div>
    </div>
  );
};

// 4. Light Refraction & Snell's Law
const LightRefraction: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [theta1Deg, setTheta1Deg] = useState<number>(40);
  const [n1, setN1] = useState<number>(1.0); // Air
  const [n2, setN2] = useState<number>(1.52); // Glass

  const theta1Rad = (theta1Deg * Math.PI) / 180;
  const sinTheta2 = (n1 / n2) * Math.sin(theta1Rad);
  const isTotalInternalReflection = sinTheta2 > 1.0;
  const theta2Rad = isTotalInternalReflection ? null : Math.asin(sinTheta2);
  const theta2Deg = theta2Rad !== null ? (theta2Rad * 180) / Math.PI : null;

  const criticalAngleDeg = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const midY = h / 2;
    const midX = w / 2;

    // Medium 1 (top)
    ctx.fillStyle = '#090e18';
    ctx.fillRect(0, 0, w, midY);

    // Medium 2 (bottom) with tint depending on index
    const blueAlpha = Math.min(0.6, (n2 - 1.0) * 0.35);
    ctx.fillStyle = `rgba(14, 116, 144, ${blueAlpha})`;
    ctx.fillRect(0, midY, w, midY);

    // Boundary interface line
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(w, midY);
    ctx.stroke();

    // Normal line (dashed)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(midX, 20);
    ctx.lineTo(midX, h - 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // Laser Ray Length
    const rayLen = 170;

    // Incident Ray (comes from top-left)
    const incX = midX - rayLen * Math.sin(theta1Rad);
    const incY = midY - rayLen * Math.cos(theta1Rad);

    ctx.strokeStyle = '#ef4444'; // Red laser
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(incX, incY);
    ctx.lineTo(midX, midY);
    ctx.stroke();

    // Arrow on incident ray
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(midX - 35 * Math.sin(theta1Rad), midY - 35 * Math.cos(theta1Rad), 4, 0, Math.PI * 2);
    ctx.fill();

    // Reflected Ray (theta_r = theta_1)
    const refX = midX + rayLen * Math.sin(theta1Rad);
    const refY = midY - rayLen * Math.cos(theta1Rad);
    ctx.strokeStyle = isTotalInternalReflection ? '#ef4444' : 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = isTotalInternalReflection ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(midX, midY);
    ctx.lineTo(refX, refY);
    ctx.stroke();

    // Refracted Ray (into medium 2)
    if (!isTotalInternalReflection && theta2Rad !== null) {
      const refrX = midX + rayLen * Math.sin(theta2Rad);
      const refrY = midY + rayLen * Math.cos(theta2Rad);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(midX, midY);
      ctx.lineTo(refrX, refrY);
      ctx.stroke();
    }

    // Medium labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px monospace';
    ctx.fillText(`Medium 1 (n₁ = ${n1})`, 20, 30);
    ctx.fillText(`Medium 2 (n₂ = ${n2})`, 20, midY + 30);
  }, [theta1Rad, n1, n2, isTotalInternalReflection, theta2Rad]);

  const materials = [
    { name: 'Air / Vacuum', n: 1.0 },
    { name: 'Water', n: 1.33 },
    { name: 'Glass', n: 1.52 },
    { name: 'Diamond', n: 2.42 }
  ];

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
          <span className="text-slate-400">Normal Angle: 0°</span>
          <span className={isTotalInternalReflection ? 'text-amber-400 font-bold' : 'text-cyan-400'}>
            {isTotalInternalReflection ? 'TOTAL INTERNAL REFLECTION' : 'REFRACTION OCCURRING'}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Calculated Optical Metrics */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Snell’s Law Calculations</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Incident Angle (θ₁)</div>
              <div className="text-xl font-mono font-bold text-rose-400 tabular-nums">
                {theta1Deg}°
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Refracted Angle (θ₂)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {theta2Deg !== null ? `${theta2Deg.toFixed(1)}°` : 'None'}
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Reflection Angle</div>
              <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                {theta1Deg}°
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Critical Angle (θ_c)</div>
              <div className="text-xl font-mono font-bold text-purple-300 tabular-nums">
                {criticalAngleDeg ? `${criticalAngleDeg.toFixed(1)}°` : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Optics Controls</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Angle of Incidence (θ₁):</span>
              <span className="font-mono text-cyan-400 font-semibold">{theta1Deg}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={85}
              value={theta1Deg}
              onChange={(e) => {
                setTheta1Deg(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1">Medium 1 Material (Top):</label>
            <div className="grid grid-cols-2 gap-2">
              {materials.map((m) => (
                <button
                  key={`m1-${m.name}`}
                  onClick={() => setN1(m.n)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    n1 === m.n
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {m.name} (n={m.n})
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1">Medium 2 Material (Bottom):</label>
            <div className="grid grid-cols-2 gap-2">
              {materials.map((m) => (
                <button
                  key={`m2-${m.name}`}
                  onClick={() => setN2(m.n)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    n2 === m.n
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {m.name} (n={m.n})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Snell’s Formula:</span> <span className="font-mono text-cyan-300">n₁ sin(θ₁) = n₂ sin(θ₂)</span>. If light travels from high to low index and exceeds the critical angle, all light reflects back internally (used in optical fiber cables!).
        </div>
      </div>
    </div>
  );
};

// 5. Electric Circuit
const ElectricCircuit: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [voltage, setVoltage] = useState<number>(12); // Volts
  const [resistance, setResistance] = useState<number>(6); // Ohms
  const [isSwitchClosed, setIsSwitchClosed] = useState<boolean>(true);

  const current = isSwitchClosed ? voltage / resistance : 0;
  const power = isSwitchClosed ? voltage * current : 0;
  const bulbBrightness = Math.min(1.0, power / 40); // 0 to 1

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        {/* SVG Schematic diagram */}
        <div className="w-full max-w-[500px] h-[340px] bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 260" className="w-full h-full">
            {/* Outer wire loop */}
            <rect
              x="50"
              y="30"
              width="300"
              height="200"
              rx="12"
              fill="none"
              stroke={isSwitchClosed ? '#38bdf8' : '#475569'}
              strokeWidth="4"
              strokeDasharray={isSwitchClosed ? '8, 6' : undefined}
              className={isSwitchClosed ? 'animate-pulse' : ''}
            />

            {/* Battery on left wire */}
            <rect x="35" y="105" width="30" height="50" fill="#0f172a" stroke="#1e293b" />
            <line x1="40" y1="120" x2="60" y2="120" stroke="#f59e0b" strokeWidth="5" />
            <line x1="45" y1="140" x2="55" y2="140" stroke="#38bdf8" strokeWidth="3" />
            <text x="18" y="133" fill="#f59e0b" fontSize="12" fontFamily="monospace" fontWeight="bold">
              +{voltage}V
            </text>

            {/* Resistor on top wire */}
            <rect x="160" y="20" width="80" height="20" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" rx="4" />
            <text x="175" y="34" fill="#38bdf8" fontSize="11" fontFamily="monospace">
              {resistance} Ω
            </text>

            {/* Switch on right wire */}
            <rect x="335" y="100" width="30" height="50" fill="#0f172a" />
            <circle cx="350" cy="110" r="4" fill="#94a3b8" />
            <circle cx="350" cy="150" r="4" fill="#94a3b8" />
            <line
              x1="350"
              y1="150"
              x2={isSwitchClosed ? 350 : 330}
              y2={isSwitchClosed ? 110 : 120}
              stroke={isSwitchClosed ? '#22c55e' : '#ef4444'}
              strokeWidth="4"
            />
            <text x="310" y="165" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              {isSwitchClosed ? 'Closed' : 'Open'}
            </text>

            {/* Light Bulb on bottom wire */}
            <g transform="translate(175, 205)">
              {/* Glow filter */}
              {isSwitchClosed && power > 0 && (
                <circle
                  cx="25"
                  cy="25"
                  r={35 * bulbBrightness + 10}
                  fill="#fef08a"
                  opacity={0.15 + bulbBrightness * 0.4}
                />
              )}
              {/* Bulb glass */}
              <circle
                cx="25"
                cy="25"
                r="22"
                fill={isSwitchClosed && power > 0 ? `rgba(253, 224, 71, ${0.4 + bulbBrightness * 0.6})` : '#1e293b'}
                stroke="#64748b"
                strokeWidth="2"
              />
              {/* Filament */}
              <path
                d="M 18 35 L 22 22 L 28 22 L 32 35"
                fill="none"
                stroke={isSwitchClosed && power > 0 ? '#ffffff' : '#64748b'}
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        <div className="w-full flex items-center justify-between mt-4 px-2">
          <button
            onClick={() => {
              setIsSwitchClosed(!isSwitchClosed);
              if (onComplete) onComplete();
            }}
            className={`px-4 py-2 font-medium text-xs rounded-lg transition-colors ${
              isSwitchClosed
                ? 'bg-amber-600 hover:bg-amber-500 text-white'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {isSwitchClosed ? 'Open Switch (Break Circuit)' : 'Close Switch (Complete Circuit)'}
          </button>
          <div className="text-xs font-mono text-cyan-400">
            {isSwitchClosed ? 'Current flowing' : 'Circuit broken'}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        {/* Live Electrical Telemetry */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Circuit Measurements</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Current (I = V/R)</div>
              <div className="text-xl font-mono font-bold text-cyan-300 tabular-nums">
                {current.toFixed(2)} <span className="text-xs text-slate-400 font-normal">A</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Electrical Power (P)</div>
              <div className="text-xl font-mono font-bold text-amber-400 tabular-nums">
                {power.toFixed(1)} <span className="text-xs text-slate-400 font-normal">W</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Battery Voltage (V)</div>
              <div className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                {voltage} <span className="text-xs text-slate-400 font-normal">V</span>
              </div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
              <div className="text-xs text-slate-500">Total Resistance (R)</div>
              <div className="text-xl font-mono font-bold text-purple-300 tabular-nums">
                {resistance} <span className="text-xs text-slate-400 font-normal">Ω</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Circuit Component Values</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>DC Voltage Supply:</span>
              <span className="font-mono text-cyan-400 font-semibold">{voltage} Volts</span>
            </div>
            <input
              type="range"
              min={1}
              max={36}
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Load Resistor:</span>
              <span className="font-mono text-cyan-400 font-semibold">{resistance} Ohms</span>
            </div>
            <input
              type="range"
              min={1}
              max={25}
              value={resistance}
              onChange={(e) => setResistance(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Ohm’s Law & Joule Heating:</span> Current equals voltage divided by resistance (<span className="font-mono text-cyan-300">I = V / R</span>). The rate at which the filament converts electrical energy to light and heat is power (<span className="font-mono text-cyan-300">P = V × I = I² × R</span>).
        </div>
      </div>
    </div>
  );
};

// 6. Magnetic Field & Dipole
const MagneticField: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [magnetStrength, setMagnetStrength] = useState<number>(3); // 1 to 5
  const [magnetAngleDeg, setMagnetAngleDeg] = useState<number>(0); // rotation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2;
    const magnetLen = 120;
    const magnetHalf = magnetLen / 2;
    const rotRad = (magnetAngleDeg * Math.PI) / 180;

    // Pole coordinates
    const northX = centerX + magnetHalf * Math.cos(rotRad);
    const northY = centerY + magnetHalf * Math.sin(rotRad);
    const southX = centerX - magnetHalf * Math.cos(rotRad);
    const southY = centerY - magnetHalf * Math.sin(rotRad);

    // Draw compass grid
    const cols = 14;
    const rows = 10;
    const cellW = w / cols;
    const cellH = h / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const cx = (i + 0.5) * cellW;
        const cy = (j + 0.5) * cellH;

        // Skip compasses directly on the magnet
        const distCenter = Math.hypot(cx - centerX, cy - centerY);
        if (distCenter < 50) continue;

        // Dipole field vector B = B_north + B_south
        // North is source (+), South is sink (-)
        const rNx = cx - northX;
        const rNy = cy - northY;
        const distN = Math.hypot(rNx, rNy) + 1;

        const rSx = cx - southX;
        const rSy = cy - southY;
        const distS = Math.hypot(rSx, rSy) + 1;

        // B ~ (rN / distN^3) - (rS / distS^3)
        const bx = (rNx / Math.pow(distN, 3)) - (rSx / Math.pow(distS, 3));
        const by = (rNy / Math.pow(distN, 3)) - (rSy / Math.pow(distS, 3));
        const needleAngle = Math.atan2(by, bx);

        // Compass needle length
        const needleLen = 9;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(needleAngle);

        // North needle half (red)
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(needleLen, 0);
        ctx.stroke();

        // South needle half (silver/blue)
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-needleLen, 0);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Bar Magnet
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotRad);

    // South half (Blue)
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(-magnetHalf, -15, magnetHalf, 30);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('S', -magnetHalf + 15, 4);

    // North half (Red)
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(0, -15, magnetHalf, 30);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('N', magnetHalf - 25, 4);

    ctx.restore();
  }, [magnetStrength, magnetAngleDeg]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={500}
          height={360}
          className="w-full max-w-[500px] h-[360px] rounded-lg border border-slate-800 bg-slate-950"
        />
        <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono text-slate-400">
          <span className="text-rose-400">Red Pointer: North</span>
          <span className="text-cyan-400">Cyan Pointer: South</span>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Dipole Controls</h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Magnet Orientation Angle:</span>
              <span className="font-mono text-cyan-400 font-semibold">{magnetAngleDeg}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              value={magnetAngleDeg}
              onChange={(e) => {
                setMagnetAngleDeg(Number(e.target.value));
                if (onComplete) onComplete();
              }}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1.5">
              <span>Magnet Dipole Strength:</span>
              <span className="font-mono text-cyan-400 font-semibold">{magnetStrength} Tesla</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={magnetStrength}
              onChange={(e) => setMagnetStrength(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
          </div>

          <div className="flex gap-2">
            {[0, 45, 90, 180, 270].map((deg) => (
              <button
                key={deg}
                onClick={() => setMagnetAngleDeg(deg)}
                className="flex-1 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 rounded"
              >
                {deg}°
              </button>
            ))}
          </div>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-slate-300">
          <span className="text-cyan-400 font-medium">Magnetic Field Principle:</span> Magnetic flux lines form continuous closed loops originating from the North pole and terminating at the South pole. Tiny compass needles align tangentially along the net local magnetic flux vector <span className="font-mono text-cyan-300">B</span>.
        </div>
      </div>
    </div>
  );
};
