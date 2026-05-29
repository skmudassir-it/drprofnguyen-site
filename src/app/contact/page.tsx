"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production site, this would send to an API endpoint
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="For academic collaborations, speaking engagements, or professional inquiries"
            light
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <a
                        href="mailto:dans515e@gmail.com"
                        className="text-sm text-muted-foreground hover:text-gold transition-colors"
                      >
                        dans515e@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Phone</p>
                      <a
                        href="tel:317-728-0273"
                        className="text-sm text-muted-foreground hover:text-gold transition-colors"
                      >
                        317-728-0273
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-navy">Location</p>
                      <p className="text-sm text-muted-foreground">
                        McCordsville, Indiana, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream border border-border rounded-xl p-6">
                <h4 className="font-heading font-semibold text-navy mb-3">
                  Online Presence
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://linkedin.com/in/drprofnguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn — linkedin.com/in/drprofnguyen
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=DrProfNguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Google Scholar — View Publications
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-xl text-navy mb-6">
                  Send a Message
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <Send className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="font-heading font-semibold text-lg text-navy mb-2">
                      Message Sent
                    </h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Dr. Nguyen will respond as
                      soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy-light rounded-full px-8 py-3 text-sm font-semibold transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
