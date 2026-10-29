import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md", showTagline = false }) => {
  const sizeMap = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-12 w-12",
  };

  const textMap = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 ${className}`}>
      {/* Geometric Security Shield with Verification Checkmark Motif */}
      <div className={`relative flex items-center justify-center ${sizeMap[size]} rounded-lg bg-cyber-900 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-glow-cyan`}>
        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#00e5a3" />
            </linearGradient>
          </defs>
          <polygon
            points="50,8 90,26 90,62 50,92 10,62 10,26"
            className="fill-cyber-950 stroke-[url(#shieldGrad)]"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <polyline
            points="32,50 45,63 68,36"
            fill="none"
            stroke="url(#shieldGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
      </div>

      <div className="flex flex-col">
        <div className={`font-bold tracking-tight text-white flex items-center gap-1 ${textMap[size]}`}>
          <span>ZERO<span className="text-cyan-400">Trace</span></span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold tracking-wider">
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            Secure • Verify • Prove • Recycle
          </span>
        )}
      </div>
    </Link>
  );
};
