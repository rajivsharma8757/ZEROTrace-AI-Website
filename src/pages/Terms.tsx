import React from "react";
import { Info } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Terms: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-300">
      <SectionHeader
        badge="Legal & Governance"
        title="Draft Terms of Service"
        description="Conditions governing access to the ZEROTrace AI website, public verification service, and application prototypes."
      />

      {/* Draft Disclaimer Notice */}
      <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 flex items-start gap-3">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">DRAFT DOCUMENT FOR EVALUATION &amp; REVIEW:</span> These terms are provided for demonstration and review purposes within the context of Smart India Hackathon project SIH25070.
        </div>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h3 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h3>
          <p className="text-slate-400">
            By accessing the ZEROTrace AI website or querying the public certificate verification gateway, you acknowledge that you have read and understand these Terms of Service.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">2. Evaluation Prototype Scope</h3>
          <p className="text-slate-400">
            ZEROTrace AI is developed as an engineering prototype for the Smart India Hackathon 2026. The web-based demonstration environment simulates sanitization operations through a secure software control plane to protect evaluator hardware. Production physical wiping requires authorized deployment of verified low-level agent daemons in controlled environments.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">3. Certificate Verification Reliance</h3>
          <p className="text-slate-400">
            The public certificate verification interface provides status information retrieved from the platform's cryptographic ledger. Verification confirms that an official record matching the queried certificate serial and SHA-256 fingerprint was logged by an authorized operator. Users must exercise due diligence before purchasing or recycling secondary hardware.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">4. Prohibited Uses</h3>
          <p className="text-slate-400">
            You agree not to attempt unauthorized penetration testing, denial-of-service attacks, brute-force key attacks, or cryptographic forgery against the verification registry or API endpoints.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white mb-2">5. Disclaimer of Warranties</h3>
          <p className="text-slate-400">
            The website, demonstrations, and prototype services are provided on an "as is" and "as available" basis without express or implied warranties. Standards citations (NIST SP 800-88, IEEE 2883) refer to engineering specifications and do not imply sovereign certifications.
          </p>
        </section>
      </div>
    </div>
  );
};
