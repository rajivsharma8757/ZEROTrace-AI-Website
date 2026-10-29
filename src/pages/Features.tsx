import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  RefreshCw,
  CheckCircle2,
  FileCheck,
  Lock,
  Boxes,
  Users,
  Search,
  Sliders,
  ShieldCheck,
  ArrowRight,
  Database,
  FileText,
  Key,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { ENV } from "@/config/env";

export const Features: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Platform Capabilities"
        title="Enterprise-Grade IT Asset Sanitization Capabilities."
        description="ZEROTrace AI combines hardware telemetry, automated NIST SP 800-88 decision algorithms, residual sector verification, and cryptographic certificates into one unified platform."
      />

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Cpu,
            title: "NIST SP 800-88 AI Guidance",
            tag: "Intelligence",
            desc: "Evaluates physical media architecture, SSD flash endurance, and hardware encryption co-processors to dynamically choose between Purge, Clear, and Cryptographic Erase routines.",
          },
          {
            icon: RefreshCw,
            title: "Multi-Method Sanitization Engine",
            tag: "Execution",
            desc: "Orchestrates standard-compliant sanitization routines: ATA Secure Erase, NVMe Format User Data Erase, DoD 5220.22-M 3-pass overwriting, and IEEE 2883-2022 block purges.",
          },
          {
            icon: CheckCircle2,
            title: "Independent Residual Verification",
            tag: "Verification",
            desc: "Implements strict pre-certification gates: multi-point sampled low-level sector read scans inspect initial, median, trailing, and pseudorandom blocks to confirm zero residual data.",
          },
          {
            icon: FileCheck,
            title: "Tamper-Evident Certificates",
            tag: "Proof",
            desc: "Generates cryptographic certificates with unique serial numbers, SHA-256 digests, scannable QR verification codes, and server-side binary PDF document generation.",
          },
          {
            icon: Lock,
            title: "Chained Audit Ledger",
            tag: "Integrity",
            desc: "Every action (intake, wipe, verify, cert issue) generates an HMAC-SHA256 block linked sequentially to previous events (previousHash ➔ eventHash), ensuring verifiable continuity.",
          },
          {
            icon: Boxes,
            title: "Circular ITAD Recycling Gateway",
            tag: "Sustainability",
            desc: "Prevents unnecessary physical shredding. Certified devices receive compliant ITAD clearance under Indian E-Waste (Management) Rules, 2022 for secondary market resale.",
          },
          {
            icon: Users,
            title: "5-Tier RBAC Permission Matrix",
            tag: "Governance",
            desc: "Complete separation of concerns between Sovereign Owner, Operational Administrator, Compliance Auditor, Engineering Technician, and End Customer.",
          },
          {
            icon: Database,
            title: "PostgreSQL 16 Enterprise Store",
            tag: "Reliability",
            desc: "Backed by PostgreSQL 16 with Prisma ORM (9 relational models). Includes resilient fallback data synchronization ensuring high availability even during maintenance.",
          },
          {
            icon: Search,
            title: "Global Multi-Entity Search",
            tag: "Operations",
            desc: "Instant real-time search indexing asset tags, drive serials, certificate numbers, wipe job identifiers, and operator signatures across the entire platform.",
          },
        ].map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="p-8 rounded-2xl bg-cyber-900/60 border border-slate-800 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Card */}
      <div className="p-8 rounded-2xl bg-cyber-950 border border-cyan-500/30 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience ZEROTrace AI?</h3>
        <p className="text-sm text-slate-400 mb-6">
          Access the live application portal or verify an existing digital certificate today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={ENV.APP_REGISTER_URL}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all shadow-glow-cyan text-sm"
          >
            Launch Platform
          </a>
          <Link
            to="/verify"
            className="px-6 py-3 rounded-xl bg-cyber-900 border border-cyan-500/40 text-cyan-300 font-mono text-sm hover:bg-cyber-850 transition-colors"
          >
            Verify a Certificate
          </Link>
        </div>
      </div>
    </div>
  );
};
