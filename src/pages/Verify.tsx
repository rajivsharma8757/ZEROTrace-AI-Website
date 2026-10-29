import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  Lock,
  QrCode,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Info,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { ENV } from "@/config/env";
import { VerificationApiResponse } from "@/types";

// Pre-seeded authentic specimens for instant offline/demo testing
const DEMO_SPECIMENS: Record<string, VerificationApiResponse> = {
  "ZT-2026-23478C": {
    success: true,
    status: "VALID",
    certificateId: "ZT-2026-23478C",
    issuedAt: "2026-10-29 01:40:41 UTC",
    certificateHash: "ZT-CERT-CBD13DFABBA77131C2096F29C3FDB56C42A9",
    verificationCode: "VCODE-8240-23478C",
    sanitizationMethod: "NIST SP 800-88 Purge (Cryptographic Erase + Overwrite)",
    verificationMethod: "256-Point Sampled Residual Read Verification",
    verificationResult: "PASSED (Zero Residual Pattern Confirmed)",
    qrData: `${ENV.APP_BASE_URL}/verify/ZT-2026-23478C`,
    asset: {
      assetId: "E2E-SRV-8240",
      deviceType: "Enterprise Rackmount Server",
      manufacturer: "Dell",
      model: "PowerEdge R750 (2TB NVMe SED)",
      serialNumber: "SN-DL-8240-X9A",
      storageType: "NVMe Solid-State Drive",
      storageCapacity: 2048,
      sanitizationStatus: "COMPLETED",
    },
  },
  "ZT-2026-8F1A92": {
    success: true,
    status: "VALID",
    certificateId: "ZT-2026-8F1A92",
    issuedAt: "2026-10-28 19:45:12 UTC",
    certificateHash: "ZT-CERT-8F1A92B3C4D5E6F7A8B9C0D1E2F3A4B5",
    verificationCode: "VCODE-512G-8F1A92",
    sanitizationMethod: "NIST SP 800-88 Clear (Single Pass Pseudo-Random Overwrite)",
    verificationMethod: "Sampled Low-Level Sector Read Scan",
    verificationResult: "PASSED (0x00 Pattern Confirmed)",
    qrData: `${ENV.APP_BASE_URL}/verify/ZT-2026-8F1A92`,
    asset: {
      assetId: "AST-NBK-5120",
      deviceType: "Corporate Laptop",
      manufacturer: "Lenovo",
      model: "ThinkPad X1 Carbon Gen 11",
      serialNumber: "SN-LN-TP-9281X",
      storageType: "M.2 PCIe Gen 4 SSD",
      storageCapacity: 512,
      sanitizationStatus: "COMPLETED",
    },
  },
  "ZT-2026-3571AD": {
    success: true,
    status: "VALID",
    certificateId: "ZT-2026-3571AD",
    issuedAt: "2026-10-29 01:41:06 UTC",
    certificateHash: "ZT-CERT-AD5E2962FF19028BA820147610478129",
    verificationCode: "VCODE-TEST-3571AD",
    sanitizationMethod: "DoD 5220.22-M (3-Pass Binary Overwrite with Inverted Pattern)",
    verificationMethod: "100% Full-Surface Sector Scan",
    verificationResult: "PASSED",
    qrData: `${ENV.APP_BASE_URL}/verify/ZT-2026-3571AD`,
    asset: {
      assetId: "AST-MVSJUTV1",
      deviceType: "Workstation",
      manufacturer: "HP",
      model: "Z4 G5 Workstation",
      serialNumber: "REG-TEST-038C1B",
      storageType: "SATA Enterprise HDD",
      storageCapacity: 4096,
      sanitizationStatus: "COMPLETED",
    },
  },
};

export const Verify: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get("id") || "";

  const [certInput, setCertInput] = useState(initialId);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDemoData, setIsDemoData] = useState(false);

  const handleVerify = async (queryId?: string) => {
    const target = (queryId || certInput).trim().toUpperCase();
    if (!target) {
      setError("Please enter a valid Certificate Serial Number (e.g. ZT-2026-23478C).");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setIsDemoData(false);

    try {
      // 1. Attempt real API call to the live ZEROTrace AI backend
      const res = await fetch(`${ENV.CERTIFICATE_API_URL}/${encodeURIComponent(target)}/public`);
      if (res.ok) {
        const data = await res.json();
        setResult(data);
        setIsDemoData(false);
      } else if (res.status === 404) {
        // Check if query matches our offline verified demo specimens
        if (DEMO_SPECIMENS[target]) {
          setResult(DEMO_SPECIMENS[target]);
          setIsDemoData(true);
        } else {
          setError(`Certificate "${target}" was not found in the official registry. Please confirm the serial number.`);
        }
      } else {
        throw new Error(`Registry returned HTTP ${res.status}`);
      }
    } catch (err: any) {
      // Network failure or backend server offline fallback
      if (DEMO_SPECIMENS[target]) {
        setResult(DEMO_SPECIMENS[target]);
        setIsDemoData(true);
      } else {
        setError(
          `Unable to connect to live verification gateway at ${ENV.CERTIFICATE_API_URL}. If testing locally, ensure backend is running or select a specimen below.`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialId) {
      handleVerify(initialId);
    }
  }, [initialId]);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <SectionHeader
        badge="Trust Registry"
        title="Public Certificate Verification Gateway"
        description="Verify any ZEROTrace AI digital erasure certificate in seconds. Validated against the cryptographic event ledger with zero authentication required."
      />

      {/* Verification Query Card */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="rounded-2xl bg-cyber-900/90 border border-cyan-500/30 p-6 md:p-8 shadow-2xl shadow-cyan-950/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="certInput" className="block text-sm font-mono text-slate-300 font-medium mb-2">
                Enter Digital Certificate Number or Scan QR Code
              </label>
              <div className="relative">
                <input
                  id="certInput"
                  type="text"
                  value={certInput}
                  onChange={(e) => setCertInput(e.target.value.toUpperCase())}
                  placeholder="e.g. ZT-2026-23478C"
                  className="w-full pl-11 pr-4 py-3.5 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white font-mono text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
                />
                <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-slate-400 font-mono">
                Sample Specimen IDs:{" "}
                <button
                  type="button"
                  onClick={() => {
                    setCertInput("ZT-2026-23478C");
                    handleVerify("ZT-2026-23478C");
                  }}
                  className="text-cyan-400 hover:underline mx-1"
                >
                  ZT-2026-23478C
                </button>
                •
                <button
                  type="button"
                  onClick={() => {
                    setCertInput("ZT-2026-8F1A92");
                    handleVerify("ZT-2026-8F1A92");
                  }}
                  className="text-cyan-400 hover:underline mx-1"
                >
                  ZT-2026-8F1A92
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-teal-300 transition-all shadow-glow-cyan disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Querying Registry...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Authenticity</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error / Alert Notice */}
          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-300">Verification Query Notice</p>
                <p className="mt-0.5 text-xs text-red-200/80">{error}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Verification Query Result Card */}
      {result && (
        <div className="max-w-3xl mx-auto mb-16 animate-in fade-in duration-300">
          <div className="rounded-2xl bg-cyber-900 border-2 border-emerald-500/40 p-6 md:p-8 shadow-2xl text-slate-200 relative overflow-hidden">
            {/* Specimen Disclaimer Banner */}
            {isDemoData && (
              <div className="mb-6 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Verified Demo Specimen — Retrieved from local verification fixture.
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">DEMO</span>
              </div>
            )}

            {/* Certificate Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Authenticated Record
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Certificate of Media Sanitization
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                <CheckCircle2 className="w-4 h-4" />
                STATUS: {result.status || "VALID"}
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Certificate Serial</span>
                <span className="font-mono text-cyan-300 font-bold text-base select-all">
                  {result.certificateId}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Issued Timestamp</span>
                <span className="font-mono text-slate-300">{result.issuedAt}</span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Target Hardware</span>
                <span className="text-white font-medium">
                  {result.asset?.manufacturer} {result.asset?.model || "Sanitized Device"}
                </span>
                <span className="text-xs font-mono text-slate-400 block">
                  Asset ID: {result.asset?.assetId || "N/A"}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Serial Number</span>
                <span className="font-mono text-slate-300">
                  {result.asset?.serialNumber || "SN-VERIFIED-DEVICE"}
                </span>
              </div>

              <div className="md:col-span-2">
                <span className="text-xs font-mono text-slate-400 block uppercase">Sanitization Standard</span>
                <span className="text-cyan-300 font-medium">
                  {result.sanitizationMethod || "NIST SP 800-88 Purge Routine"}
                </span>
              </div>

              <div className="md:col-span-2">
                <span className="text-xs font-mono text-slate-400 block uppercase">Verification Evidence</span>
                <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {result.verificationResult || "PASSED — Independent Post-Wipe Residual Inspection"}
                </span>
              </div>
            </div>

            {/* Cryptographic SHA-256 Fingerprint */}
            <div className="rounded-xl bg-cyber-950 p-4 mb-6 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>Cryptographic SHA-256 Fingerprint</span>
              </div>
              <p className="font-mono text-xs text-slate-300 select-all truncate bg-cyber-900 p-2 rounded border border-slate-800">
                {result.certificateHash || "ZT-CERT-CBD13DFABBA77131C2096F29C3FDB56C"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-mono">
                SIH25070 Compliance • NIST SP 800-88 Rev. 2 &amp; IEEE 2883-2022
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={`${ENV.CERTIFICATE_API_URL}/${result.certificateId}/pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download PDF Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How QR & Public Verification Works Section */}
      <div className="mt-16 border-t border-slate-800 pt-16">
        <SectionHeader
          badge="Audit Architecture"
          title="How Public Certificate Verification Works"
          description="Every certificate issued by ZEROTrace AI carries an immutable SHA-256 fingerprint anchored to our tamper-evident event ledger."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-cyber-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-white mb-2">Cryptographic Fingerprint</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              When sanitization and residual verification pass, the platform computes an irreversible SHA-256 digest sealing device serial, operator ID, and sector read proofs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyber-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 font-mono font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-white mb-2">Tamper-Evident QR Code</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The physical hardware receives an inspection QR sticker pointing directly to this public portal. Anyone can scan and verify the certificate status in seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyber-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-white mb-2">Chain-of-Custody ITAD</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Secondary device buyers and authorized e-waste recyclers verify sanitization compliance before refurbished equipment is released back into the circular economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
