import React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-300">
      <SectionHeader
        badge="Legal & Governance"
        title="Draft Privacy Policy"
        description="Data handling principles governing the ZEROTrace AI platform and digital erasure certificate registry."
      />

      {/* Draft Disclaimer Notice */}
      <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 flex items-start gap-3">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">DRAFT DOCUMENT FOR EVALUATION &amp; REVIEW:</span> This policy outlines the intended data privacy framework for ZEROTrace AI (Smart India Hackathon project SIH25070). It does not constitute formal legal counsel.
        </div>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h3 className="text-lg font-bold text-white mb-2">1. Overview and Scope</h3>
          <p className="text-slate-400">
            ZEROTrace AI is designed to assist organizations in managing IT asset data sanitization, independent verification, and circular recycling authorization. This policy explains how information is collected, processed, and maintained across the website and application.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">2. Hardware Telemetry &amp; Sanitization Data</h3>
          <p className="text-slate-400">
            To generate verifiable erasure certificates, the platform records hardware-identifying information, including device manufacturer, model, serial numbers, drive interface specifications, and partition sizes. ZEROTrace AI processes metadata regarding the sanitization process itself (e.g. wipe algorithm, completion timestamp, sampled sector verification digests). ZEROTrace AI does not extract, replicate, or store user file contents from target storage media.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">3. Public Certificate Verification Registry</h3>
          <p className="text-slate-400">
            Digital Erasure Certificates contain a unique certificate serial number, completion timestamp, sanitization method, and cryptographic SHA-256 fingerprint. These records are accessible through the public verification gateway to allow secondary equipment purchasers, auditors, and e-waste recyclers to verify sanitization compliance. Personal account credentials and sensitive organizational configurations are not exposed on public verification endpoints.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">4. User Account &amp; Access Information</h3>
          <p className="text-slate-400">
            For authenticated roles (Owner, Administrator, Auditor, Technician, Customer), the platform collects user names, email addresses, hashed passwords (via bcrypt), and assigned system roles to enforce strict server-side Role-Based Access Control (RBAC).
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">5. Compliance with Indian E-Waste &amp; Privacy Regulations</h3>
          <p className="text-slate-400">
            The platform architecture is designed with considerations for India's Digital Personal Data Protection Act (DPDPA), 2023, and the E-Waste (Management) Rules, 2022, to support lawful, transparent chain-of-custody transfer during IT asset disposition.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">6. Contact Information</h3>
          <p className="text-slate-400">
            For inquiries regarding this privacy framework or the SIH25070 project architecture, please use the platform's <a href="/contact" className="text-cyan-400 hover:underline">Contact Form</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
