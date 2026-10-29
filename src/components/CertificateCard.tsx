import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, QrCode, FileText, CheckCircle2, Lock, ArrowUpRight, ExternalLink } from "lucide-react";
import { ENV } from "@/config/env";

interface CertificateCardProps {
  certificateId?: string;
  assetId?: string;
  model?: string;
  serialNumber?: string;
  method?: string;
  issuedAt?: string;
  hash?: string;
  status?: string;
  isDemo?: boolean;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificateId = "ZT-2026-23478C",
  assetId = "AST-SRV-8240",
  model = "Dell PowerEdge R750 (2TB NVMe SED)",
  serialNumber = "SN-DL-8240-X9A",
  method = "NIST SP 800-88 Purge (Cryptographic Erase + Overwrite)",
  issuedAt = "2026-10-29 01:40:41 UTC",
  hash = "ZT-CERT-CBD13DFABBA77131C2096F29C3FDB56C42A9",
  status = "VALID",
  isDemo = true,
}) => {
  return (
    <div className="relative rounded-2xl bg-cyber-900/90 border-2 border-cyan-500/40 p-6 md:p-8 shadow-2xl shadow-cyan-950/40 text-slate-200 overflow-hidden group">
      {/* Background security guilloche watermark pattern */}
      <div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      
      {/* Decorative Security Corner Accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 mb-6 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                Official Digital Record
              </span>
              {isDemo && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  DEMO SPECIMEN
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Certificate of Media Sanitization
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wide">
            <CheckCircle2 className="w-3.5 h-3.5" />
            STATUS: {status}
          </div>
        </div>
      </div>

      {/* Certificate Specifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm relative mb-6">
        <div>
          <span className="text-xs font-mono text-slate-400 block uppercase">Certificate Serial Number</span>
          <span className="font-mono text-cyan-300 font-bold text-base select-all">{certificateId}</span>
        </div>

        <div>
          <span className="text-xs font-mono text-slate-400 block uppercase">Issuance Timestamp</span>
          <span className="font-mono text-slate-200">{issuedAt}</span>
        </div>

        <div>
          <span className="text-xs font-mono text-slate-400 block uppercase">Target Hardware &amp; Storage</span>
          <span className="text-white font-medium">{model}</span>
          <span className="text-xs text-slate-400 font-mono block">Asset Tag: {assetId}</span>
        </div>

        <div>
          <span className="text-xs font-mono text-slate-400 block uppercase">Device Serial Number</span>
          <span className="font-mono text-slate-300">{serialNumber}</span>
        </div>

        <div className="md:col-span-2">
          <span className="text-xs font-mono text-slate-400 block uppercase">Sanitization Standard Applied</span>
          <span className="text-cyan-300 font-medium">{method}</span>
        </div>

        <div className="md:col-span-2">
          <span className="text-xs font-mono text-slate-400 block uppercase">Independent Post-Sanitization Residual Verification</span>
          <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            PASSED — 256-Point Sampled Low-Level Sector Read Scan (0x00 / Pseudo-random Verification Pattern Confirmed)
          </span>
        </div>
      </div>

      {/* Cryptographic SHA-256 Fingerprint & Scannable QR Block */}
      <div className="rounded-xl bg-cyber-950/80 border border-cyan-500/30 p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Cryptographic SHA-256 Fingerprint</span>
          </div>
          <p className="font-mono text-xs text-slate-400 truncate bg-cyber-900/60 p-2 rounded border border-slate-800 select-all">
            {hash}
          </p>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Cryptographically sealed and chained to the immutable event ledger.
          </span>
        </div>

        {/* QR Code Graphic */}
        <div className="flex flex-col items-center justify-center p-2.5 bg-white rounded-lg border-2 border-cyan-400 shadow-md flex-shrink-0">
          <QrCode className="w-16 h-16 text-slate-900" />
          <span className="text-[9px] font-mono text-slate-900 font-bold uppercase mt-1">
            SCAN TO VERIFY
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
        <div className="text-slate-400 font-mono">
          Governed under SIH25070 • Complies with NIST SP 800-88 Rev. 2 &amp; IEEE 2883-2022
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/verify?id=${certificateId}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 font-medium transition-colors"
          >
            Verify Online
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`${ENV.CERTIFICATE_API_URL}/${certificateId}/pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};
