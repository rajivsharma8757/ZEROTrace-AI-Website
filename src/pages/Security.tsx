import React from "react";
import { Link } from "react-router-dom";
import {
  Lock,
  ShieldCheck,
  Key,
  Database,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Layers,
  Search,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";

export const Security: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Security & Trust Center"
        title="Security Is Built Directly Into the Workflow."
        description="Our cryptographic architecture ensures tamper-evident traceability, strict role separation, and mathematically verifiable data sanitization proof."
      />

      {/* Core Cryptographic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 rounded-2xl bg-cyber-900 border border-cyan-500/30 shadow-glow-cyan">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Tamper-Evident Hash Chains</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Every lifecycle event computes an HMAC-SHA256 digest linking back to the previous block's hash. Any retroactive modification to past event timestamps, device serials, or verification outcomes invalidates downstream hashes.
          </p>
          <span className="text-xs font-mono text-cyan-400">
            Formula: H(i) = SHA256( H(i-1) + EventPayload )
          </span>
        </div>

        <div className="p-8 rounded-2xl bg-cyber-900 border border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
            <Key className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">5-Role Privilege Isolation</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Separation of duties prevents compromised operator accounts from signing their own verifications. Only verified Auditors can attest to residual scans, and only the Sovereign Owner can authorize privileged role promotions.
          </p>
          <span className="text-xs font-mono text-teal-400">
            RBAC: Owner • Admin • Auditor • Tech • User
          </span>
        </div>

        <div className="p-8 rounded-2xl bg-cyber-900 border border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
            <FileCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Public Verifiable Proof</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Erasure certificates are verifiable by secondary buyers, ITAD recyclers, and corporate compliance officers without requiring login credentials. Anyone with the certificate serial or QR code can query the official ledger.
          </p>
          <span className="text-xs font-mono text-emerald-400">
            Gateway: /verify/:certificateId
          </span>
        </div>
      </div>

      {/* Honest Prototype Disclosures & Regulatory Context */}
      <div className="rounded-2xl bg-cyber-950 border border-amber-500/30 p-8 mb-20">
        <div className="flex items-center gap-3 text-amber-400 font-mono text-xs uppercase font-bold tracking-wider mb-4">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span>Honest Prototype Disclosure &amp; Scope Specification</span>
        </div>
        <h4 className="text-xl font-bold text-white mb-4">
          Hackathon Prototype Architecture vs. Production Deployment
        </h4>
        <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>1. Safe Control Plane Simulation:</strong> In the current web demonstration prototype (developed for Smart India Hackathon 2026, Problem Statement SIH25070), sanitization and disk-wiping workflows execute safely through an orchestrated state machine. The application does not issue physical low-level disk-wiping commands to the browser host machine, ensuring total safety during presentations and evaluations. Production sanitization executes via native Linux daemons (<code className="text-cyan-300 font-mono">nvme-cli</code>, <code className="text-cyan-300 font-mono">hdparm</code>, <code className="text-cyan-300 font-mono">blkdiscard</code>) in dedicated bootable environments.
          </p>
          <p>
            <strong>2. Cryptographic Ledger vs. Public Blockchain:</strong> The current audit ledger implements a sequential HMAC-SHA256 cryptographic hash chain stored in PostgreSQL. It is not currently anchored to a public proof-of-work/stake blockchain, but its deterministic block structures are designed for future zero-knowledge consensus anchoring.
          </p>
          <p>
            <strong>3. Regulatory Standards Alignment:</strong> References to NIST SP 800-88 Rev. 2, IEEE 2883-2022, ISO/IEC 27001, and Indian E-Waste Rules 2022 describe engineering alignment and algorithmic implementation, not third-party government accreditation or endorsements.
          </p>
        </div>
      </div>

      {/* Verification CTA */}
      <div className="text-center">
        <Link
          to="/verify"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all shadow-glow-cyan text-sm"
        >
          <Search className="w-4 h-4" />
          <span>Test Public Verification Gateway</span>
        </Link>
      </div>
    </div>
  );
};
