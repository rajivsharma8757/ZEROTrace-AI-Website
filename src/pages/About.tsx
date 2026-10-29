import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Cpu,
  Boxes,
  Award,
  ArrowRight,
  ExternalLink,
  Target,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Mission & Vision"
        title="Built for the Future of Trustworthy IT Asset Recycling."
        description="ZEROTrace AI is an enterprise cybersecurity and ITAD platform conceived to bridge the gap between military-grade data sanitization and circular electronic sustainability."
      />

      {/* SIH Context Callout Card */}
      <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-cyber-900 border border-cyan-500/40 mb-16 shadow-glow-cyan relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-cyan-400" />
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
              Smart India Hackathon 2026
            </span>
            <h3 className="text-xl font-bold text-white">Problem Statement Reference: SIH25070</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Developed in direct response to <strong>SIH25070: "Secure Data Wiping for Trustworthy IT Asset Recycling"</strong>. The challenge addresses how organizations can safely transition retired IT hardware (laptops, storage drives, servers) into verified circular secondary use without risking enterprise data leakage or resorting to destructive shredding.
        </p>

        <div className="p-4 rounded-xl bg-cyber-950 border border-slate-800 text-xs text-slate-400 font-mono">
          Note: ZEROTrace AI is an independent engineering project developed for the Smart India Hackathon problem statement. References to SIH25070 identify the challenge context and do not represent official government endorsement or awards.
        </div>
      </div>

      {/* The 4 Pillars of ZEROTrace AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold">
            01
          </div>
          <h4 className="text-lg font-bold text-white mb-2">SECURE</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            AI-assisted media sanitization recommendations aligned with NIST SP 800-88 Rev. 2 and IEEE 2883-2022 standards across NVMe, SSD, HDD, and hardware Self-Encrypting Drives (SED).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 font-mono font-bold">
            02
          </div>
          <h4 className="text-lg font-bold text-white mb-2">VERIFY</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Independent 256-point low-level sampled read verification confirms zero residual data patterns across initial, median, trailing, and pseudo-random logical sectors before certification.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold">
            03
          </div>
          <h4 className="text-lg font-bold text-white mb-2">PROVE</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Tamper-evident digital erasure certificates with SHA-256 fingerprints, scannable QR verification stickers, and dynamic PDF generation backed by an HMAC-SHA256 audit ledger.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 font-mono font-bold">
            04
          </div>
          <h4 className="text-lg font-bold text-white mb-2">RECYCLE</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Authorized chain-of-custody transfer to accredited e-waste recyclers under Indian E-Waste (Management) Rules, 2022, preventing landfill waste and extending device lifespans.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all shadow-glow-cyan text-sm"
        >
          <span>Get in Touch or Request Demonstration</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
