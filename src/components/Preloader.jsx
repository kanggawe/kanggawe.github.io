import { useState, useEffect } from 'react';
import logoMitraxcon from '../assets/img/logo mitraxcon.png';
import '../assets/css/Preloader.css';

const STATUS_TEXTS = [
  'Menginisialisasi Fiber Gateway...',
  'Menghubungkan ke Node MITRAXCON...',
  'Mengoptimalkan Bandwidth Jalur...',
  'Memeriksa Integritas Koneksi...',
  'Koneksi Berhasil! Memuat Tampilan...'
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 350);

      const doneTimer = setTimeout(() => {
        setIsDone(true);
      }, 950);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress]);

  if (isDone) return null;

  let statusIndex = 0;
  if (progress < 25) statusIndex = 0;
  else if (progress < 55) statusIndex = 1;
  else if (progress < 80) statusIndex = 2;
  else if (progress < 96) statusIndex = 3;
  else statusIndex = 4;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#070e1b] transition-opacity duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading MITRAXCON"
    >
      {/* Ambient background glow & radial depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,#0d1e38_0%,#060b16_65%,#03060c_100%)]" />
      <div className="absolute w-[440px] h-[440px] rounded-full bg-cyan-500/10 blur-[70px] pointer-events-none animate-pulse" />

      {/* Main Content Container with proper vertical spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-md w-full">
        
        {/* Cosmic Orbit Container */}
        <div className="relative w-44 h-44 flex items-center justify-center mb-8">
          
          {/* Outer dashed spinning circular ring with glowing satellite dot */}
          <div className="preloader-orbit-ring absolute w-40 h-40 rounded-full border-2 border-dashed border-sky-400/35">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00d2ff] shadow-[0_0_12px_#00d2ff,0_0_20px_#00d2ff]" />
          </div>

          {/* Reverse spinning secondary circular ring */}
          <div className="preloader-orbit-ring-rev absolute w-44 h-44 rounded-full border border-teal-400/20" />

          {/* Squircle Emblem Box with MITRAXCON 3D Logo */}
          <div className="preloader-emblem relative z-10 w-28 h-28 rounded-[28px] bg-gradient-to-br from-[#0a192f] to-[#071324] border-2 border-teal-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_35px_rgba(20,184,166,0.35),inset_0_0_20px_rgba(0,210,255,0.2)] flex items-center justify-center p-3">
            <img
              src={logoMitraxcon}
              alt="MITRAXCON Logo"
              className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(45,212,191,0.65)]"
            />
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="preloader-brand-title text-3xl font-extrabold tracking-[0.22em] mb-1 text-center">
          MITRAXCON
        </h1>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-6 text-center">
          High-Speed Fiber Network
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#0f1c30]/90 border border-sky-400/30 p-1 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.7),0_0_20px_rgba(0,71,204,0.2)] mb-3 relative overflow-hidden">
          <div
            className="preloader-laser h-2 rounded-full bg-gradient-to-r from-[#0047cc] via-[#00d2ff] to-[#2dd4bf] shadow-[0_0_16px_rgba(0,210,255,0.9)] transition-all duration-150 relative overflow-hidden"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry Row */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-sky-400 font-medium truncate pr-2">
            <i className="bi bi-arrow-repeat animate-spin text-[10px]" />
            <span className="truncate">{STATUS_TEXTS[statusIndex]}</span>
          </div>
          <span className="font-bold text-[#2dd4bf] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] shrink-0">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
