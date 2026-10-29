import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Cpu,
  RefreshCw,
  CheckCircle2,
  FileCheck,
  Lock,
  Boxes,
  ArrowRight,
  ShieldCheck,
  Check,
  Info,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { WorkflowStage } from "@/types";

const STAGES: WorkflowStage[] = [
  {
    step: "01",
    title: "Register Asset & Intake",
    subtitle: "Hardware Identification & Specification Detection",
    description: "Decommissioned assets are enrolled into the platform. Critical hardware attributes are cataloged including manufacturer, model, serial number, storage geometry, drive interface (NVMe/SATA/SAS), and capacity.",
    standardRef: "ISO/IEC 27001:2022 Control A.8.10",
    details: [
      "Hardware asset tagging and cryptographic record creation",
      "Detection of storage technology (NVMe, SSD, HDD, eMMC)",
      "Identification of Self-Encrypting Drive (SED) capabilities",
      "Custody transfer timestamp and operator assignment",
    ],
  },
  {
    step: "02",
    title: "Analyze Media & Diagnostics",
    subtitle: "Health, Encryption & Partition Geometry Inspection",
    description: "The device characteristics are inspected for hardware-level encryption status, partition geometries, hidden host protected areas (HPA), device configuration overlays (DCO), and flash endurance reserves.",
    standardRef: "NIST SP 800-88 Rev. 2 §4.1",
    details: [
      "SMART telemetry assessment and flash wear-level check",
      "Detection of BitLocker, FileVault, or LUKS software encryption",
      "Scan for hidden sectors, over-provisioned blocks, and spare areas",
      "Analysis of flash memory controller command capabilities",
    ],
  },
  {
    step: "03",
    title: "Recommend Sanitization Routine",
    subtitle: "NIST SP 800-88 & IEEE 2883 Heuristic Selection",
    description: "ZEROTrace AI's recommendation engine evaluates media parameters against international standards to determine whether Clear, Purge, or Cryptographic Erase is optimal for target media.",
    standardRef: "NIST SP 800-88 Rev. 2 & IEEE 2883-2022",
    details: [
      "Purge recommendation for high-density NVMe solid-state drives",
      "Multi-pass binary overwrite scheduling for legacy magnetic platters",
      "Cryptographic Erase determination for hardware SED storage",
      "Execution parameter configuration (pass count, pattern types)",
    ],
  },
  {
    step: "04",
    title: "Perform Sanitization Execution",
    subtitle: "State-Machine Orchestrated Sanitization Routine",
    description: "The sanitization routine executes through step-by-step state machine tracking. In production, this interfaces with native low-level agent daemons (nvme-cli, hdparm, blkdiscard).",
    standardRef: "DoD 5220.22-M / ATA Secure Erase",
    details: [
      "Safe control plane progress monitoring (0% to 100%)",
      "Real-time pass tracking and command timeout protection",
      "Telemetry capture of sector blocks overwritten or keys zeroized",
      "State transition to independent verification queue upon completion",
    ],
  },
  {
    step: "05",
    title: "Verify Residual Sanitization",
    subtitle: "256-Point Sampled Low-Level Sector Read Scan",
    description: "A hard verification gate prevents premature certification. The verification engine performs sampled low-level binary reads across start, middle, end, and randomized block intervals to prove zero residual data.",
    standardRef: "NIST SP 800-88 Rev. 2 §4.7 Verification",
    details: [
      "Automated inspection for residual plaintext patterns or anomalies",
      "Confirmation that blocks return expected zero (0x00) or pseudorandom fills",
      "Independent verification sign-off by compliance auditor or automated script",
      "Rejection of unverified or partially completed wipe jobs",
    ],
  },
  {
    step: "06",
    title: "Issue Tamper-Evident Certificate",
    subtitle: "Cryptographic SHA-256 Fingerprint & QR Generation",
    description: "Once verification passes, the platform issues an official Digital Erasure Certificate sealed with an irreversible SHA-256 digest and generates a scannable QR verification code and dynamic PDF.",
    standardRef: "ISO/IEC 27001 A.8.14 & India E-Waste Rules 2022",
    details: [
      "Unique certificate serial number assignment (e.g. ZT-2026-23478C)",
      "Generation of public verification link and embedded QR image",
      "Cryptographic digest computation sealing device serial and operator signature",
      "High-resolution official PDF certificate rendering",
    ],
  },
  {
    step: "07",
    title: "Maintain Audit Trail Integrity",
    subtitle: "Blockchain-Style Chained HMAC-SHA256 Event Ledger",
    description: "Every action is committed to a sequential hash chain. Each event block calculates its hash from its own payload and the previous block's hash (previousHash ➔ eventHash), rendering backdated modifications immediately evident.",
    standardRef: "SOC 2 Type II / NIST SP 800-88 Auditability",
    details: [
      "Cryptographic sequence linking prevent deletion or insertion of records",
      "Instant 1-click audit chain verification across all ledger blocks",
      "Read-only compliance portal for internal auditors and regulators",
      "Exportable JSON and CSV audit manifests for governance reviews",
    ],
  },
  {
    step: "08",
    title: "Approve Responsible Recycling",
    subtitle: "Circular ITAD Chain-of-Custody Release",
    description: "Hardware with authenticated sanitization certificates can be certified for responsible resale, corporate re-deployment, or transfer to accredited e-waste recyclers under Indian E-Waste Management Rules.",
    standardRef: "CPCB / MoEFCC India E-Waste (Management) Rules, 2022",
    details: [
      "Hardware disposition clearance gate (Refurbish vs. Material E-Waste)",
      "Prevention of un-wiped assets entering secondary distribution",
      "Verification scanning by recyclers before material recovery or resale",
      "Reduction of corporate electronic waste footprint by preserving hardware utility",
    ],
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = STAGES[activeStep];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="8-Stage Trust Loop"
        title="How ZEROTrace AI Works From Intake to Recycling."
        description="Follow the journey of a retired IT storage asset through our unbroken cryptographic verification lifecycle."
      />

      {/* Interactive Stage Selector (Horizontal Tabs on Desktop) */}
      <div className="hidden lg:grid grid-cols-8 gap-2 mb-10">
        {STAGES.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl text-left border transition-all ${
              activeStep === idx
                ? "bg-cyber-900 border-cyan-400 shadow-glow-cyan text-white"
                : "bg-cyber-950 border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="text-xs font-mono font-bold block text-cyan-400 mb-1">
              STAGE {s.step}
            </span>
            <span className="text-xs font-semibold block truncate text-slate-200">
              {s.title.split("&")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Featured Stage Card */}
      <div className="rounded-2xl bg-cyber-900/90 border border-cyan-500/30 p-6 md:p-10 mb-16 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-mono font-extrabold text-xl shadow-glow-cyan">
              {currentStage.step}
            </span>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                Lifecycle Stage {currentStage.step} of 08
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {currentStage.title}
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {currentStage.standardRef}
          </span>
        </div>

        <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
          {currentStage.description}
        </p>

        <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4">
          Core Operational Actions &amp; Verification Checks
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {currentStage.details.map((detail, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-cyber-950 border border-slate-800 flex items-start gap-3"
            >
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-slate-300 font-mono leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>

        {/* Prev / Next Stage Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono hover:bg-slate-700 disabled:opacity-30 transition-colors"
          >
            ← Previous Stage
          </button>

          <button
            onClick={() => setActiveStep(Math.min(STAGES.length - 1, activeStep + 1))}
            disabled={activeStep === STAGES.length - 1}
            className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30 disabled:opacity-30 transition-colors"
          >
            Next Stage →
          </button>
        </div>
      </div>

      {/* Complete Vertical Timeline (Mobile & Overview) */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Complete Vertical Architecture Timeline
        </h3>

        <div className="space-y-6 max-w-4xl mx-auto">
          {STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="p-6 rounded-2xl bg-cyber-950 border border-slate-800 flex flex-col md:flex-row items-start gap-6 hover:border-cyan-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg flex-shrink-0">
                {stage.step}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h4 className="text-lg font-bold text-white">{stage.title}</h4>
                  <span className="text-xs font-mono text-cyan-400">{stage.standardRef}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {stage.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {stage.details.slice(0, 2).map((d, i) => (
                    <div key={i} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
