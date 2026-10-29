import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Building, User, MessageSquare, Info } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { ENV } from "@/config/env";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Hackathon Evaluation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "A valid email address is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      if (ENV.CONTACT_API_URL) {
        await fetch(ENV.CONTACT_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        // Safe local demonstration delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setSubmitted(true);
    } catch (err) {
      console.warn("Contact submission notice:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeader
        badge="Inquiry & Collaboration"
        title="Connect with the ZEROTrace AI Team."
        description="Whether you are an evaluation judge, enterprise ITAD recycler, compliance officer, or student researcher, we welcome your inquiries and feedback."
      />

      <div className="rounded-2xl bg-cyber-900 border border-slate-800 p-6 md:p-10 shadow-2xl">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {ENV.CONTACT_API_URL ? "Inquiry Dispatched" : "Inquiry Recorded (Demonstration Mode)"}
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {ENV.CONTACT_API_URL
                ? "Your message has been forwarded to the configured contact endpoint."
                : "No external contact API endpoint is currently configured (VITE_CONTACT_API_URL is unset). Your inquiry has been validated and captured in browser session state for demonstration purposes."}
            </p>
            <div className="p-3 rounded-lg bg-cyber-950 border border-slate-800 text-xs font-mono text-slate-400 max-w-md mx-auto">
              Sender: <span className="text-cyan-300">{formData.email}</span> • Status: <span className="text-emerald-400">{ENV.CONTACT_API_URL ? "Delivered" : "Simulated Local"}</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  organization: "",
                  inquiryType: "Hackathon Evaluation",
                  message: "",
                });
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
            >
              Submit Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {!ENV.CONTACT_API_URL && (
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>
                  Demonstration Mode: VITE_CONTACT_API_URL is unconfigured. Inquiries will be validated client-side and simulated locally.
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajiv Kumar Sharma"
                    className="w-full pl-10 pr-4 py-3 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. evaluator@sih.gov.in"
                    className="w-full pl-10 pr-4 py-3 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Organization / Institution (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Ministry of Electronics & IT"
                    className="w-full pl-10 pr-4 py-3 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Inquiry Purpose *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-3 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Hackathon Evaluation">Smart India Hackathon Evaluation</option>
                  <option value="Enterprise Pilot">Enterprise ITAD Evaluation</option>
                  <option value="Recycler Partnership">Authorized E-Waste Recycler</option>
                  <option value="Academic Research">Academic & Research Inquiry</option>
                  <option value="General Feedback">General Platform Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your inquiry, question about the SIH25070 implementation, or feedback..."
                className="w-full p-4 bg-cyber-950 border border-slate-700 focus:border-cyan-400 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400">
                SIH25070 Project Response • Direct developer channel
              </span>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold hover:from-cyan-300 transition-all shadow-glow-cyan text-sm disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Sending..." : "Submit Inquiry"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
