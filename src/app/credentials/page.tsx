import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Award, Trophy, Star, Users, Megaphone } from "lucide-react";

const certifications = [
  {
    category: "Core Security Certifications",
    items: [
      "CompTIA Security+ CE — Exp. 05/2027",
      "SSCP — (ISC)² Systems Security Certified Practitioner",
      "ISC2 Certified in Cybersecurity (CC)",
    ],
    icon: Shield,
  },
  {
    category: "AI & Data Science",
    items: [
      "CAIP — CertNexus Certified AI Practitioner",
      "CDSP — CertNexus Certified Data Science Practitioner",
    ],
    icon: Award,
  },
  {
    category: "Cybersecurity Specializations",
    items: [
      "IBM Cybersecurity Analyst Professional",
      "Cybersecurity Risk Management Framework — INFOSEC",
      "NIST CSF, NIST DoD RMF, NIST 800-171",
      "Managing Cybersecurity — University System of Georgia",
    ],
    icon: Shield,
  },
  {
    category: "Enterprise Administration",
    items: [
      "Red Hat Enterprise Linux (RHEL) Administration",
      "Windows Server Enterprise Administration",
      "Oracle 19c Database Administration",
      "RPA Specialist — UiPath / Coursera",
    ],
    icon: Award,
  },
  {
    category: "Project Management",
    items: ["IBM Project Manager Professional"],
    icon: Trophy,
  },
];

const toastmasters = [
  {
    role: "Distinguished Toastmaster (DTM)",
    description: "Highest individual honor — Toastmasters International",
    icon: Star,
  },
  {
    role: "Distinguished Director of the Year",
    description: "Excellence in District Leadership",
    icon: Trophy,
  },
  {
    role: "Club President",
    description: "Club Executive Leadership",
    icon: Users,
  },
  {
    role: "Club Coach — Two Clubs",
    description:
      "Assigned to guide and revitalize two clubs to Distinguished status",
    icon: Megaphone,
  },
  {
    role: "VP of Membership",
    description: "Club Officer Leadership & Member Growth",
    icon: Users,
  },
  {
    role: "District 11 Conference Finance Committee Chair",
    description: "District-Level Financial Leadership & Conference Operations",
    icon: Award,
  },
  {
    role: "Sergeant At Arms",
    description: "Club Officer & Meeting Operations Leadership",
    icon: Shield,
  },
  {
    role: "Club Sponsor",
    description: "Founded & Sponsored a New Toastmasters Club",
    icon: Star,
  },
];

export default function CredentialsPage() {
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
            label="Credentials"
            title="Professional Certifications & Awards"
            description="Industry-recognized qualifications spanning cybersecurity, AI, and IT leadership"
            light
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Certifications"
            title="Technical & Professional Qualifications"
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <group.icon className="w-6 h-6 text-navy" />
                  <h3 className="font-heading font-semibold text-lg text-navy">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toastmasters */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Toastmasters International"
            description="A decorated career in communication and leadership development"
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toastmasters.map((item) => (
              <div
                key={item.role}
                className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <item.icon className="w-6 h-6 text-navy mb-3" />
                <h4 className="font-heading font-semibold text-sm text-navy mb-1">
                  {item.role}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy text-white rounded-2xl p-8 text-center">
            <Star className="w-10 h-10 text-gold mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold mb-2">
              Distinguished Toastmaster (DTM)
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
              The highest individual honor awarded by Toastmasters International,
              recognizing superior achievement in both communication and
              leadership. The DTM designation represents mastery of public
              speaking, evaluation, and organizational leadership — skills that
              Dr. Nguyen applies daily in federal IT leadership, academic
              instruction, and mentorship.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Explore His Mentorship Legacy"
        description="Meet the 11 doctoral graduates Dr. Nguyen has guided to completion."
        primaryLabel="View Mentorship"
        primaryHref="/mentorship"
        secondaryLabel="Contact"
        secondaryHref="/contact"
      />
    </>
  );
}
