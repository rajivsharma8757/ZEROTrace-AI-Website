import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  HardDrive,
  Cpu,
  Boxes,
  Lock,
  Layers,
  FileCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { ENV } from "@/config/env";

export const Solution: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Problem & Solution"
        title="Why Traditional IT Asset Disposal Fails Enterprises."
        description="Organizations face a painful dilemma between the fear of catastrophic data leaks and the environmental guilt of physical electronic shredding. ZEROTrace AI delivers cryptographic certainty without destruction."
      />

      {/* The Crisis Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/30 text-slate-300">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">The Dual Crisis: Breaches vs. E-Waste</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            When organizations decommission storage assets, ordinary OS formatting is dangerously inadequate. Wear leveling on SSDs leaves unmapped flash cells holding plaintext data, while magnetic remanence on HDDs exposes sensitive corporate records.
          </p>
          <div className="space-y-3 text-xs font-mono text-red-300">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>Fear of regulatory fines (GDPR, HIPAA, DPDPA) leads to panic shredding</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>Millions of healthy enterprise SSDs crushed into toxic e-waste landfills</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>Paper shredding receipts offer zero cryptographic authenticity or verifiable proof</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-cyber-900 border border-cyan-500/40 text-slate-300 shadow-glow-cyan">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">The ZEROTrace AI Verifiable Solution</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            ZEROTrace AI transforms IT asset retirement into an unbroken cryptographic trust chain. We replace physical destruction with mathematical certainty: AI-guided media sanitization, independent sector verification, and verifiable digital certificates.
          </p>
          <div className="space-y-3 text-xs font-mono text-cyan-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>NIST SP 800-88 Rev. 2 &amp; IEEE 2883-2022 compliant media sanitization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>256-point low-level sampled read verification for residual confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Restores hardware into the circular economy for safe ITAD asset resale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Media Specific Analysis */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          How ZEROTrace AI Treats Different Storage Architectures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
            <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">NVMe Solid-State Drives</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard overwrites damage flash write endurance without reaching wear-leveling reserves. ZEROTrace AI leverages PCIe/NVMe Format commands with User Data Erase and Cryptographic Erase routines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
            <HardDrive className="w-8 h-8 text-teal-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Magnetic Rotational HDDs</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Traditional platters require multi-pass binary overwrites to overwrite magnetic domain edges. ZEROTrace AI guides DoD 5220.22-M 3-pass overwriting followed by full surface verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyber-950 border border-slate-800">
            <Lock className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Self-Encrypting Drives (SED)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hardware-encrypted SEDs allow instantaneous sanitization via Cryptographic Erase: changing the internal Media Encryption Key (MEK) instantly turns stored cipher blocks permanently indecipherable.
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="rounded-2xl bg-cyber-950 border border-slate-800 p-6 md:p-8 mb-20 overflow-x-auto">
        <h3 className="text-xl font-bold text-white mb-6">Detailed Capability Comparison</h3>
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="py-3 px-4">DISPOSAL METRIC</th>
              <th className="py-3 px-4 text-red-400">TRADITIONAL OS FORMAT</th>
              <th className="py-3 px-4 text-amber-400">PHYSICAL SHREDDING</th>
              <th className="py-3 px-4 text-cyan-400">ZEROTRACE AI TRUST LOOP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            <tr>
              <td className="py-3.5 px-4 font-bold text-white">Data Sanitization Guarantee</td>
              <td className="py-3.5 px-4 text-red-400">Low (Index cleared only)</td>
              <td className="py-3.5 px-4 text-emerald-400">High (Media destroyed)</td>
              <td className="py-3.5 px-4 text-cyan-300 font-bold">100% Cryptographically Verified</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-white">Hardware Reusability</td>
              <td className="py-3.5 px-4 text-emerald-400">100% Reusable (Unsafe)</td>
              <td className="py-3.5 px-4 text-red-400">0% (Crushed E-Waste)</td>
              <td className="py-3.5 px-4 text-cyan-300 font-bold">100% Circular Asset Recovery</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-white">Proof of Sanitization</td>
              <td className="py-3.5 px-4 text-red-400">None</td>
              <td className="py-3.5 px-4 text-amber-300">Paper Waste Manifest</td>
              <td className="py-3.5 px-4 text-cyan-300 font-bold">SHA-256 Digital Certificate + QR</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-white">Audit Trail Integrity</td>
              <td className="py-3.5 px-4 text-red-400">Unverifiable</td>
              <td className="py-3.5 px-4 text-slate-400">Manual Paper Log</td>
              <td className="py-3.5 px-4 text-cyan-300 font-bold">Cryptographically Chained Ledger</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Bottom Banner */}
      <div className="text-center">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all shadow-glow-cyan"
        >
          <span>Explore the 8-Stage Trust Loop</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
