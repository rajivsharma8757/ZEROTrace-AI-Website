import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowLeft, Home as HomeIcon, Search } from "lucide-react";
import { Logo } from "@/components/Logo";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto shadow-glow-cyan">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold mb-1">
            HTTP 404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-white">Route Not Found</h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            The requested page does not exist in the ZEROTrace AI web navigation tree.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all text-xs font-mono"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/verify"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-900 border border-cyan-500/40 text-cyan-300 font-mono text-xs hover:bg-cyber-850 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Verify Certificate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
