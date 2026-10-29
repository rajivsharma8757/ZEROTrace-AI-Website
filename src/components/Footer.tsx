import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowUpRight, CheckCircle2, Lock, Cpu, RefreshCw, FileText } from "lucide-react";
import { Logo } from "./Logo";
import { ENV } from "@/config/env";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-950 border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Background cyber accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info & SIH Context */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              ZEROTrace AI provides an unbroken, cryptographically verifiable trust loop for enterprise data sanitization, independent residual verification, tamper-evident digital erasure certificates, and responsible IT asset recycling.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SIH25070 • Smart India Hackathon</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Developed in response to Problem Statement SIH25070: <em>Secure Data Wiping for Trustworthy IT Asset Recycling</em>.
            </p>
          </div>

          {/* Navigation & Solutions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Platform &amp; Architecture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solution" className="hover:text-cyan-300 transition-colors">
                  Problem &amp; Solution
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-cyan-300 transition-colors">
                  8-Stage Trust Loop
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-cyan-300 transition-colors">
                  Core Capabilities
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-cyan-300 transition-colors">
                  Cryptographic Security
                </Link>
              </li>
              <li>
                <Link to="/verify" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Verify Certificate</span>
                  <span className="text-[10px] font-mono px-1 rounded bg-cyan-500/10 text-cyan-300">Public</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Application Portals (Configured App Links) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Role Portals (Live App)
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={ENV.ADMIN_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Administrator Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={ENV.EMPLOYEE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Technician Workbench</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={ENV.AUDITOR_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Auditor Inspection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={ENV.CUSTOMER_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Customer Access</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={ENV.APP_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center justify-between group font-medium text-slate-300"
                >
                  <span>Application Login</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Standards Reference */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Governance &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">
                  About ZEROTrace
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact &amp; Inquiry
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-300 transition-colors">
                  Draft Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-300 transition-colors">
                  Draft Terms of Service
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500 font-mono">
                Standards Alignment:
                <br />
                NIST SP 800-88 Rev. 2
                <br />
                IEEE 2883-2022
                <br />
                ISO/IEC 27001 (A.8.10)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 ZEROTrace AI. All rights reserved.</span>
            <span>Smart India Hackathon 2026 — Problem Statement SIH25070</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verification Engine Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
