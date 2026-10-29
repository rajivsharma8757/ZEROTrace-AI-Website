import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Cpu,
  RefreshCw,
  Lock,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  HardDrive,
  Laptop,
  Server,
  Layers,
  Search,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Users,
  Eye,
  SlidersHorizontal,
  Check,
  AlertCircle,
  HelpCircle,
  Building2,
  Boxes,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { CertificateCard } from "@/components/CertificateCard";
import { ENV } from "@/config/env";
import { DeviceProfile } from "@/types";

// Device profiles for the interactive AI intelligence panel
const DEMO_PROFILES: DeviceProfile[] = [
  {
    id: "thinkpad-ssd",
    name: "Corporate Ultrabook (Lenovo ThinkPad X1)",
    category: "Laptop",
    driveType: "SATA SSD",
    capacity: "512 GB",
    encryption: "Software BitLocker",
    wearLevel: "14% Endurance Used (Good Health)",
    recommendedMethod: "NIST SP 800-88 Rev. 2 Clear",
    standardRef: "NIST 800-88 / IEEE 2883-2022",
    confidence: 94,
    reasoning: "Solid-state drive with software encryption. Standard multi-pass overwrite with pseudo-random patterns across all logical block addresses clears accessible user data without damaging flash endurance.",
    passesRequired: 1,
  },
  {
    id: "poweredge-nvme",
    name: "Enterprise Database Server (Dell R750)",
    category: "Server",
    driveType: "NVMe SSD",
    capacity: "2.0 TB",
    encryption: "Hardware SED (AES-256)",
    wearLevel: "8% Endurance Used (Excellent)",
    recommendedMethod: "NIST SP 800-88 Rev. 2 Purge (Cryptographic Erase)",
    standardRef: "NIST SP 800-88 Rev. 2 §4.3",
    confidence: 98,
    reasoning: "NVMe Self-Encrypting Drive (SED) with dedicated cryptographic coprocessor. Instant cryptographic erase invalidates the Media Encryption Key (MEK), rendering all residual cipher blocks permanently unrecoverable in under 15 seconds.",
    passesRequired: 1,
  },
  {
    id: "seagate-hdd",
    name: "Legacy Storage Workstation (HP Z4 G5)",
    category: "Workstation",
    driveType: "Magnetic HDD",
    capacity: "4.0 TB",
    encryption: "None / Legacy",
    wearLevel: "Magnetic Surface Nominal (38,000 POH)",
    recommendedMethod: "DoD 5220.22-M 3-Pass Overwrite",
    standardRef: "DoD 5220.22-M / NIST 800-88 Clear",
    confidence: 92,
    reasoning: "Rotational magnetic platter drive without hardware encryption. Requires multi-pass binary pattern overwriting (0x00, 0xFF, pseudo-random) followed by full-surface read verification to eliminate magnetic force microscopy recovery.",
    passesRequired: 3,
  },
  {
    id: "tablet-mobile",
    name: "Field Inspection Tablet (Surface Pro 9)",
    category: "Tablet",
    driveType: "Mobile UFS/eMMC",
    capacity: "256 GB",
    encryption: "Hardware SED (AES-256)",
    wearLevel: "22% Flash Reserve Remaining",
    recommendedMethod: "IEEE 2883-2022 Purge Block Erase",
    standardRef: "IEEE 2883-2022 §5.2",
    confidence: 91,
    reasoning: "Embedded flash memory with integrated flash translation layer (FTL). Direct firmware block erase purges wear-leveling spare blocks, over-provisioned space, and bad block reserves.",
    passesRequired: 1,
  },
];

// Product Preview Tabs
const PREVIEW_TABS = [
  { id: "owner", label: "Owner Governance", role: "OWNER" },
  { id: "admin", label: "Admin Operations", role: "ADMINISTRATOR" },
  { id: "auditor", label: "Auditor Office", role: "AUDITOR" },
  { id: "technician", label: "Technician Workbench", role: "TECHNICIAN" },
  { id: "customer", label: "Customer Portal", role: "CUSTOMER" },
  { id: "intake", label: "Asset Intake", role: "ALL" },
  { id: "ai", label: "AI Guidance", role: "ALL" },
  { id: "wipe", label: "Sanitization Engine", role: "ALL" },
  { id: "verification", label: "Verification Proof", role: "ALL" },
  { id: "cert", label: "Digital Certificate", role: "ALL" },
];

export const Home: React.FC = () => {
  // AI Intelligence Interactive State
  const [selectedProfile, setSelectedProfile] = useState<DeviceProfile>(DEMO_PROFILES[1]);

  // Wipe Simulation State Machine
  const [simState, setSimState] = useState<"IDLE" | "INITIALIZING" | "DETECTING" | "PURGING" | "VERIFYING" | "COMPLETED">("IDLE");
  const [simProgress, setSimProgress] = useState(0);
  const [isSimRunning, setIsSimRunning] = useState(false);

  // Product Preview Tab State
  const [activeTab, setActiveTab] = useState("technician");

  // FAQ Accordion Open State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Simulation timer loop
  useEffect(() => {
    let interval: any;
    if (isSimRunning) {
      interval = setInterval(() => {
        setSimProgress((prev) => {
          if (prev >= 100) {
            setIsSimRunning(false);
            setSimState("COMPLETED");
            return 100;
          }
          const next = prev + 5;
          if (next < 25) setSimState("INITIALIZING");
          else if (next < 50) setSimState("DETECTING");
          else if (next < 85) setSimState("PURGING");
          else if (next < 100) setSimState("VERIFYING");
          return next;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isSimRunning]);

  const resetSim = () => {
    setIsSimRunning(false);
    setSimProgress(0);
    setSimState("IDLE");
  };

  const stepSim = () => {
    setSimProgress((prev) => {
      const next = Math.min(prev + 20, 100);
      if (next === 100) setSimState("COMPLETED");
      else if (next > 75) setSimState("VERIFYING");
      else if (next > 45) setSimState("PURGING");
      else if (next > 20) setSimState("DETECTING");
      else setSimState("INITIALIZING");
      return next;
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* ============================================================== */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* SIH Context Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-glow-cyan animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Smart India Hackathon 2026 • Problem Statement SIH25070</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Secure Data. <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent glow-text-cyan">
                Verified Proof.
              </span>{" "}
              <br className="hidden sm:block" />
              Trusted Recycling.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              ZEROTrace AI helps organizations manage secure data sanitization, verify sanitization outcomes, generate verifiable digital certificates, and maintain an accountable path toward responsible IT asset recycling.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href={ENV.APP_REGISTER_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 text-base"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                to="/verify"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono font-medium text-cyan-300 bg-cyber-900 border border-cyan-500/40 hover:bg-cyber-850 hover:border-cyan-400 transition-all text-base shadow-glow-cyan"
              >
                <Search className="w-4 h-4" />
                <span>Verify Certificate</span>
              </Link>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white transition-colors text-base"
              >
                <span>Explore Platform</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Capability Trust Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-cyan-400" /> AI-Assisted Analysis
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-400" /> Verification Workflow
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Digital Evidence
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400" /> Traceable Lifecycle
              </span>
            </div>
          </div>

          {/* Animated Hardware Pipeline Visualization */}
          <div className="mt-16 max-w-5xl mx-auto rounded-2xl bg-cyber-900/80 border border-cyan-500/20 p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Sliders className="w-4 h-4" />
                END-TO-END VERIFIABLE TRUST LOOP ARCHITECTURE
              </span>
              <span className="text-[11px] text-slate-400">7 Connected Lifecycle Stages</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
              {[
                { label: "REGISTER", icon: Laptop, status: "Intake Ready" },
                { label: "ANALYZE", icon: Cpu, status: "NIST 800-88" },
                { label: "SANITIZE", icon: RefreshCw, status: "Active Wipe" },
                { label: "VERIFY", icon: CheckCircle2, status: "Sampled Reads" },
                { label: "CERTIFY", icon: FileCheck, status: "SHA-256 QR" },
                { label: "AUDIT", icon: Lock, status: "Hash Ledger" },
                { label: "RECYCLE", icon: Boxes, status: "ITAD Release" },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-cyber-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyber-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 group-hover:shadow-glow-cyan transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      {step.label}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {step.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PROBLEM SECTION — WHY DELETION IS NOT ENOUGH                */}
      {/* ============================================================== */}
      <section className="py-20 bg-cyber-900/40 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Fundamental Flaw"
            title="Deleting a File Is Not the Same as Securing Data."
            description="Ordinary deletion and quick formatting only clear file system pointers. Underlying data blocks remain fully intact and trivially recoverable with standard forensics tools."
          />

          {/* Retired Devices Inventory */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { name: "Laptops & Desktops", icon: Laptop, note: "End-of-lease fleets" },
              { name: "SATA & NVMe SSDs", icon: HardDrive, note: "Wear leveling challenges" },
              { name: "Magnetic HDDs", icon: HardDrive, note: "Residual magnetism" },
              { name: "Enterprise Servers", icon: Server, note: "Multi-tenant arrays" },
              { name: "External Media", icon: Layers, note: "Unmonitored offline assets" },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.name}
                  className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 text-center flex flex-col items-center"
                >
                  <Icon className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-sm font-semibold text-white">{device.name}</span>
                  <span className="text-[11px] text-slate-400 font-mono mt-1">{device.note}</span>
                </div>
              );
            })}
          </div>

          {/* Traditional vs ZEROTrace Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Traditional Flawed Way */}
            <div className="p-6 md:p-8 rounded-2xl bg-red-950/10 border border-red-500/20 text-slate-300">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" />
                The Traditional Broken Approach
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                DELETE ➔ FORMAT ➔ RECYCLE
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Formatting simply resets the index table. Hidden partitions, bad blocks, over-provisioned flash blocks, and raw sectors remain completely exposed.
              </p>
              <ul className="space-y-3 text-xs font-mono text-red-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  Zero cryptographic verification of sector overwrites
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  No formal chain-of-custody or tamper-evident certificates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  Forces premature physical shredding of healthy hardware
                </li>
              </ul>
            </div>

            {/* The ZEROTrace Verified Way */}
            <div className="p-6 md:p-8 rounded-2xl bg-cyber-900 border border-cyan-500/40 text-slate-300 shadow-glow-cyan">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                The ZEROTrace Verified Trust Loop
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                REGISTER ➔ ANALYZE ➔ SANITIZE ➔ VERIFY ➔ CERTIFY ➔ AUDIT ➔ RECYCLE
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                An unbroken cryptographic lifecycle ensuring target storage is analyzed, appropriately wiped according to NIST SP 800-88, verified, and sealed with a verifiable certificate.
              </p>
              <ul className="space-y-3 text-xs font-mono text-cyan-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  NIST SP 800-88 Rev. 2 &amp; IEEE 2883-2022 heuristic guidance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  256-point sampled sector read residual verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Tamper-evident SHA-256 certificate with public QR validation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SOLUTION OVERVIEW — 6 PREMIUM FEATURE CARDS                 */}
      {/* ============================================================== */}
      <section id="solution" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Architecture"
            title="Meet ZEROTrace AI."
            description="An integrated platform for managing IT asset sanitization, verification evidence, digital erasure certificates, auditability, and responsible recycling in one traceable workflow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "AI-Assisted Guidance",
                desc: "Analyzes drive architecture, SSD wear leveling, SED encryption capabilities, and capacity to recommend NIST SP 800-88 Purge, Clear, or Crypto Erase.",
                ctaText: "Explore Guidance",
                ctaLink: "#ai-guidance",
              },
              {
                icon: RefreshCw,
                title: "Sanitization Workflow",
                desc: "State-machine controlled sanitization tracking real-time progress, sector passes, ATA Secure Erase, and NVMe format operations.",
                ctaText: "View Workflow",
                ctaLink: "#workflow-demo",
              },
              {
                icon: CheckCircle2,
                title: "Verification Engine",
                desc: "Independent residual verification performing multi-point sampled low-level sector read scans to confirm zero data retention before certification.",
                ctaText: "Inspect Engine",
                ctaLink: "/features",
              },
              {
                icon: FileCheck,
                title: "Digital Erasure Certificates",
                desc: "Issues official certificates with cryptographic SHA-256 fingerprints, scannable QR verification links, and dynamic PDF generation.",
                ctaText: "Verify Certificate",
                ctaLink: "/verify",
              },
              {
                icon: Lock,
                title: "Tamper-Evident Audit Trail",
                desc: "Every event is cryptographically linked in a sequential HMAC-SHA256 hash chain (previousHash ➔ eventHash) with instant ledger integrity verification.",
                ctaText: "Security Details",
                ctaLink: "/security",
              },
              {
                icon: Boxes,
                title: "Responsible Recycling Approval",
                desc: "Ensures only verifiably certified, sanitized IT assets can receive circular economy ITAD recycling authorization and transfer to accredited recyclers.",
                ctaText: "How It Works",
                ctaLink: "/how-it-works",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl bg-cyber-900/70 border border-slate-800 p-8 hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    <Link
                      to={card.ctaLink}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. AI-ASSISTED SANITIZATION INTELLIGENCE (INTERACTIVE PANEL)   */}
      {/* ============================================================== */}
      <section id="ai-guidance" className="py-20 bg-cyber-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Decision Support"
            title="AI-Assisted Sanitization Intelligence"
            description="Our heuristic model evaluates physical media capabilities, wear leveling, and cryptographic encryption states to recommend the optimal NIST SP 800-88 routine."
          />

          <div className="max-w-5xl mx-auto">
            {/* Demo Notice Disclaimer */}
            <div className="mb-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs flex items-center justify-between">
              <span className="font-mono">
                INTERACTIVE DEMONSTRATION PANEL — AI DECISION SUPPORT HEURISTIC
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                SAMPLE DATA
              </span>
            </div>

            {/* Profile Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {DEMO_PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => setSelectedProfile(profile)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    selectedProfile.id === profile.id
                      ? "bg-cyber-850 border-cyan-400 shadow-glow-cyan text-white"
                      : "bg-cyber-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                    {profile.driveType}
                  </span>
                  <span className="text-xs font-bold block truncate text-slate-200">
                    {profile.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Technical Panel Card */}
            <div className="rounded-2xl bg-cyber-950 border border-slate-800 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Target Device</span>
                  <span className="text-white font-bold text-base">{selectedProfile.name}</span>
                  <span className="text-xs text-slate-400 font-mono block">Category: {selectedProfile.category}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Storage Geometry</span>
                  <span className="text-slate-200 font-mono text-sm">{selectedProfile.driveType} ({selectedProfile.capacity})</span>
                  <span className="text-xs text-slate-400 font-mono block">Health: {selectedProfile.wearLevel}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Encryption Architecture</span>
                  <span className="text-slate-200 font-mono text-sm">{selectedProfile.encryption}</span>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="rounded-xl bg-cyber-900 border border-cyan-500/30 p-5 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-300 uppercase font-bold tracking-wider">
                      Heuristic Recommendation
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Confidence: {selectedProfile.confidence}% (Model Heuristic)
                  </span>
                </div>

                <div className="text-lg md:text-xl font-bold text-white mb-2">
                  {selectedProfile.recommendedMethod}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProfile.reasoning}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Governing Reference: {selectedProfile.standardRef}</span>
                <span className="text-cyan-400">Passes Scheduled: {selectedProfile.passesRequired} Pass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SANITIZATION WORKFLOW VISUALIZATION (CONTROL PLANE)         */}
      {/* ============================================================== */}
      <section id="workflow-demo" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Control Plane"
            title="From Device to a Verified State."
            description="Observe our real-time sanitization orchestration state machine transitioning from storage geometry inspection through multi-phase execution to residual verification."
          />

          <div className="max-w-4xl mx-auto rounded-2xl bg-cyber-900/90 border border-cyan-500/30 p-6 md:p-8 shadow-2xl">
            {/* Prominent Demo Notice */}
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold mb-6 flex items-center justify-between">
              <span>INTERACTIVE DEMONSTRATION — NO PHYSICAL WIPE IS PERFORMED</span>
              <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-amber-500/20">SIMULATOR</span>
            </div>

            {/* Progress Bar & Phase Title */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                  Phase: {simState}
                </span>
                <span className="text-base font-mono font-bold text-white">
                  {simProgress}%
                </span>
              </div>

              <div className="w-full h-3 bg-cyber-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 transition-all duration-300 shadow-glow-cyan"
                  style={{ width: `${simProgress}%` }}
                />
              </div>
            </div>

            {/* State Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { label: "1. Initializing", active: simProgress >= 10 },
                { label: "2. Detecting Media", active: simProgress >= 35 },
                { label: "3. Sanitization Pass", active: simProgress >= 65 },
                { label: "4. Sector Verification", active: simProgress >= 95 },
              ].map((st) => (
                <div
                  key={st.label}
                  className={`p-3 rounded-lg border text-xs font-mono text-center transition-colors ${
                    st.active
                      ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                      : "bg-cyber-950 border-slate-800 text-slate-400"
                  }`}
                >
                  {st.label}
                </div>
              ))}
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSimRunning(!isSimRunning)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 font-medium text-xs font-mono transition-colors"
                >
                  {isSimRunning ? (
                    <>
                      <Pause className="w-4 h-4" /> Pause Simulation
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Start Simulation
                    </>
                  )}
                </button>

                <button
                  onClick={stepSim}
                  disabled={simProgress >= 100}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 font-medium text-xs font-mono transition-colors disabled:opacity-50"
                >
                  Step (+20%)
                </button>

                <button
                  onClick={resetSim}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 font-medium text-xs font-mono transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400">
                Target: Simulated Enterprise NVMe Array (Dell R750)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. DIGITAL ERASURE CERTIFICATE SHOWCASE                        */}
      {/* ============================================================== */}
      <section className="py-20 bg-cyber-900/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Cryptographic Proof"
            title="Proof That Can Be Verified."
            description="Every sanitized IT asset receives an official digital erasure certificate with a SHA-256 fingerprint, scannable QR verification code, and permanent inclusion in the audit ledger."
          />

          <div className="max-w-4xl mx-auto">
            <CertificateCard
              certificateId="ZT-2026-23478C"
              assetId="E2E-SRV-8240"
              model="Dell PowerEdge R750 (2TB NVMe SED)"
              serialNumber="SN-DL-8240-X9A"
              method="NIST SP 800-88 Purge (Cryptographic Erase)"
              issuedAt="2026-10-29 01:40:41 UTC"
              hash="ZT-CERT-CBD13DFABBA77131C2096F29C3FDB56C42A9"
              status="VALID"
              isDemo={true}
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. ALL FIVE ROLE PORTALS (EXACT APPLICATION ROLES)             */}
      {/* ============================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Role-Based Access Control"
            title="Tailored Interfaces for All Five Stakeholder Personas."
            description="ZEROTrace AI provides dedicated role experiences ensuring separation of duties between governance, operations, independent auditing, engineering, and client review."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "SOVEREIGN OWNER",
                title: "Platform Governance",
                desc: "Sovereign platform control, PostgreSQL 16 node monitoring, cryptographic key governance, team administration, and privileged role management.",
                icon: ShieldCheck,
                scope: "Root Authority",
                url: ENV.APP_LOGIN_URL,
              },
              {
                role: "ADMINISTRATOR",
                title: "Operations Directorate",
                desc: "Operational flight deck, active wipe orchestration, asset disposition funnel, team management, and global audit exports.",
                icon: SlidersHorizontal,
                scope: "Fleet Management",
                url: ENV.ADMIN_APP_URL,
              },
              {
                role: "AUDITOR / INSPECTOR",
                title: "Compliance Office",
                desc: "Independent proof inspection, sequential SHA-256 hash chain verification, compliance checklists (NIST, ISO, IEEE), and evidence review.",
                icon: Eye,
                scope: "Independent Verification",
                url: ENV.AUDITOR_APP_URL,
              },
              {
                role: "TECHNICIAN / OPERATOR",
                title: "Engineering Workbench",
                desc: "Hardware intake, physical drive diagnostics, live wipe job execution (+20% advancing), residual verification submission.",
                icon: Cpu,
                scope: "Sanitization Execution",
                url: ENV.EMPLOYEE_APP_URL,
              },
              {
                role: "CUSTOMER / CLIENT",
                title: "Client Portal",
                desc: "Enterprise client asset tracking, self-service certificate viewing, 1-click PDF certificate download, and public verification lookup.",
                icon: Users,
                scope: "Asset Ownership & Proof",
                url: ENV.CUSTOMER_APP_URL,
              },
              {
                role: "AUTHORIZED RECYCLER",
                title: "ITAD Chain-of-Custody",
                desc: "CPCB/MoEFCC compliance gateway ensuring only verified, certified hardware is released into secondary circular recycling markets.",
                icon: Boxes,
                scope: "Circular Disposition",
                url: ENV.APP_LOGIN_URL,
              },
            ].map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.role}
                  className="rounded-2xl bg-cyber-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-glow-cyan transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {role.scope}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">
                      {role.role}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{role.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{role.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <span>Open Application Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. LIVE PRODUCT PREVIEW TABS (10 VIEWS)                        */}
      {/* ============================================================== */}
      <section className="py-20 bg-cyber-900/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Interface Showcase"
            title="Explore the Platform in Action."
            description="Explore the clean, high-contrast cybersecurity interface designed for enterprise operators, compliance auditors, and hardware engineers."
          />

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {PREVIEW_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan"
                    : "bg-cyber-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Preview Canvas */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-cyber-950 border border-slate-800 p-6 md:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                ZEROTrace AI Control Console • {PREVIEW_TABS.find((t) => t.id === activeTab)?.label}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                ILLUSTRATIVE DEMO INTERFACE
              </span>
            </div>

            {/* Dynamic Tab Mockup */}
            {activeTab === "technician" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-cyber-900 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 block">Assigned Hardware</span>
                    <span className="text-2xl font-bold font-mono text-white mt-1 block">14 Devices</span>
                  </div>
                  <div className="p-4 rounded-xl bg-cyber-900 border border-cyan-500/30">
                    <span className="text-xs font-mono text-cyan-400 block">Active Sanitization Wipes</span>
                    <span className="text-2xl font-bold font-mono text-cyan-300 mt-1 block">3 Jobs Running</span>
                  </div>
                  <div className="p-4 rounded-xl bg-cyber-900 border border-emerald-500/30">
                    <span className="text-xs font-mono text-emerald-400 block">Residual Tests Passed</span>
                    <span className="text-2xl font-bold font-mono text-emerald-300 mt-1 block">100% Zero Residual</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-cyber-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-white text-sm">Active Job: Dell PowerEdge R750 (2TB NVMe)</span>
                    <span className="text-xs font-mono text-cyan-400">Progress: 65% (Purging NAND)</span>
                  </div>
                  <div className="w-full h-2 bg-cyber-950 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-3">
                    <span>Algorithm: NIST SP 800-88 Purge</span>
                    <span>SOP Step 3 of 4: Cryptographic Key Invalidation</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "auditor" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cyber-900 border border-slate-800 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-cyan-400 font-bold">
                    <span>EVENT HASH</span>
                    <span>PREVIOUS HASH</span>
                    <span>VERIFICATION</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-1">
                    <span className="text-emerald-400">e9a8f102...3b1d</span>
                    <span className="text-slate-400">c4b182e0...89a1</span>
                    <span className="text-emerald-400">VALID (SHA-256 MATCH)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-1">
                    <span className="text-emerald-400">c4b182e0...89a1</span>
                    <span className="text-slate-400">10ad948f...20bc</span>
                    <span className="text-emerald-400">VALID (SHA-256 MATCH)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Auditor office verifies HMAC-SHA256 continuity across all sequential blocks. Zero gaps, zero modifications.
                </p>
              </div>
            )}

            {activeTab !== "technician" && activeTab !== "auditor" && (
              <div className="p-8 rounded-xl bg-cyber-900/60 border border-slate-800 text-center">
                <h4 className="text-base font-bold text-white mb-2">
                  {PREVIEW_TABS.find((t) => t.id === activeTab)?.label} Console
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed mb-4">
                  Fully implemented in the production application. Accessible via role-based access control with live PostgreSQL persistence.
                </p>
                <a
                  href={ENV.APP_BASE_URL}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30"
                >
                  <span>Launch Live Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FAQ ACCORDION (14 QUESTIONS)                                */}
      {/* ============================================================== */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need to Know."
            description="Clear, honest answers about our technology stack, compliance standards, prototype architecture, and roadmap."
          />

          <div className="space-y-3">
            {[
              {
                q: "What is ZEROTrace AI?",
                a: "ZEROTrace AI is an enterprise IT asset sanitization and recycling management platform designed for Smart India Hackathon (SIH25070). It combines AI-assisted sanitization recommendations with independent residual verification, tamper-evident digital erasure certificates, and circular ITAD recycling authorization.",
              },
              {
                q: "Why is ordinary deletion not always enough?",
                a: "Ordinary deletion only unlinks file references from file allocation tables. The binary data blocks remain intact on storage media until overwritten, making recovery trivial with forensic software. Modern flash storage also utilizes wear leveling, meaning files can remain inside unaddressed physical blocks.",
              },
              {
                q: "What types of devices can the platform manage?",
                a: "ZEROTrace AI manages enterprise rackmount servers, corporate laptops, workstations, NVMe solid-state drives, SATA SSDs, legacy rotational magnetic HDDs, and mobile tablets/smartphones.",
              },
              {
                q: "How does AI assist sanitization decisions?",
                a: "The heuristic decision engine inspects drive architecture, hardware encryption coprocessors (SED/Opal), wear-leveling reserves, and capacity to recommend the appropriate NIST SP 800-88 Rev. 2 routine (Purge vs. Clear vs. Cryptographic Erase).",
              },
              {
                q: "What is a digital erasure certificate?",
                a: "An official digital document containing target device metadata, serial numbers, applied wipe standard, post-wipe residual verification proof, operator details, and an immutable SHA-256 fingerprint anchored to the platform's audit chain.",
              },
              {
                q: "How can a certificate be verified?",
                a: "Anyone can navigate to the public verification gateway at /verify or scan the certificate's physical QR code sticker. The verification service retrieves the authentic record from the registry with zero login required.",
              },
              {
                q: "What does QR verification prove?",
                a: "The QR code links directly to the immutable record on the ZEROTrace AI public verification gateway. Scanning it verifies that the certificate serial exists in the official registry and has not been forged, revoked, or altered.",
              },
              {
                q: "How does the audit trail work?",
                a: "Every critical lifecycle action (Asset Registered, Wipe Started, Wipe Completed, Verification Passed, Certificate Issued) generates an HMAC-SHA256 block cryptographically linked to the previous block's hash, making retrospective alterations detectable.",
              },
              {
                q: "Does the platform currently use a public blockchain?",
                a: "No. The current prototype utilizes a tamper-evident sequential SHA-256 hash-chained cryptographic ledger stored in PostgreSQL. It is engineered with deterministic hash interfaces designed for future public/consortium blockchain anchoring in production.",
              },
              {
                q: "Can customers access their certificates?",
                a: "Yes. Enterprise clients log into the dedicated Customer Portal to track registered assets, inspect sanitization milestones, and download official high-resolution PDF certificates.",
              },
              {
                q: "Does the prototype physically wipe devices?",
                a: "In the web demonstration prototype, sanitization workflows run through a safe control plane simulation to guarantee zero risk of accidental host data destruction during hackathon evaluations. Real hardware wiping runs via native agent daemons (nvme-cli, hdparm, blkdiscard) in Phase 2.",
              },
              {
                q: "Can the platform integrate with real sanitization tools?",
                a: "Yes. The backend API is designed to receive execution heartbeats and telemetry from native command-line sanitization agents running on bootable Linux environments (e.g. secure USB or PXE network boot).",
              },
              {
                q: "What happens when certificate verification is unavailable?",
                a: "The public verification page provides clear diagnostic feedback if the backend server is unreachable and offers pre-loaded verified demonstration specimens for evaluation.",
              },
              {
                q: "How are different user roles protected?",
                a: "ZEROTrace AI enforces strict server-side Role-Based Access Control (RBAC) across five distinct roles: Owner, Administrator, Auditor, Technician, and Customer. Privilege escalation is blocked at the middleware layer.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-cyber-900/60 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-200 hover:text-white"
                  >
                    <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL CALL TO ACTION                                       */}
      {/* ============================================================== */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-cyber-900 to-cyber-950 border border-cyan-500/30 p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Smart India Hackathon • SIH25070</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Turn End-of-Life Devices Into Verified Assets.
            </h2>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Secure the data. Verify the result. Generate proof. Recycle responsibly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ENV.APP_REGISTER_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-glow-cyan transition-all text-base"
              >
                <span>Launch Application</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/verify"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono text-cyan-300 bg-cyber-900 border border-cyan-500/40 hover:bg-cyber-850 transition-colors text-base"
              >
                <Search className="w-4 h-4" />
                <span>Verify Certificate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
