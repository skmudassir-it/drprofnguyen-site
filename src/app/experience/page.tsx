import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Building2, Shield, Server, Globe, Cpu } from "lucide-react";

const agencies = [
  {
    name: "NOAA — National Logistics Support Center",
    role: "IT Supervisor & Acting Director",
    description:
      "Leads IT operations and infrastructure for the National Logistics Support Center, ensuring mission-critical systems support NOAA's environmental monitoring and prediction capabilities.",
    icon: Globe,
  },
  {
    name: "Defense Finance & Accounting Service",
    role: "Federal IT Service",
    description:
      "Served in IT management roles supporting the financial operations of the Department of Defense, ensuring secure and reliable financial systems for military personnel and operations.",
    icon: Building2,
  },
  {
    name: "Defense Information Systems Agency",
    role: "IT Contractor",
    description:
      "Provided IT services and support to DISA, the combat support agency responsible for secure communications and information sharing across the Department of Defense.",
    icon: Shield,
  },
  {
    name: "Department of the Army",
    role: "IT Contractor",
    description:
      "Delivered IT solutions and infrastructure support to Army operations, gaining foundational experience in large-scale federal technology environments.",
    icon: Server,
  },
];

const expertiseAreas = [
  {
    title: "Cybersecurity Governance",
    description:
      "Expert in NIST frameworks including CSF, RMF, and 800-171 compliance. Leads cybersecurity risk management and governance for federal IT systems.",
  },
  {
    title: "Information Systems Management",
    description:
      "Manages complex IT infrastructures spanning multiple systems, ensuring reliability, security, and operational continuity for mission-critical federal operations.",
  },
  {
    title: "AI & Data Science",
    description:
      "Certified AI Practitioner (CAIP) and Data Science Practitioner (CDSP). Applies AI-assisted approaches to federal infrastructure management and recovery.",
  },
  {
    title: "IT Leadership & Strategy",
    description:
      "Provides strategic IT direction as Acting Director, managing teams, budgets, and technology roadmaps aligned with federal mission objectives.",
  },
  {
    title: "Federal IT Compliance",
    description:
      "Deep expertise in FISMA, NIST standards, and federal cybersecurity requirements. Ensures systems meet rigorous government security and compliance standards.",
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Oracle 19c DBA, RHEL & Windows Server Administration, RPA Specialist. Hands-on technical depth across enterprise platforms.",
  },
];

export default function ExperiencePage() {
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
            label="Federal Service"
            title="22+ Years of Federal IT Leadership"
            description="Serving across NOAA, DFAS, DISA, and the Department of the Army"
            light
          />
        </div>
      </section>

      {/* Federal Career Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dr. Nguyen&apos;s federal service spans over 22 years — 4 years
              as a contractor at DISA and the Department of the Army, followed
              by 18+ years of direct federal service at NOAA&apos;s National
              Logistics Support Center and the Defense Finance & Accounting
              Service. His career has been defined by increasing responsibility,
              from hands-on technical roles to executive IT leadership.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              As IT Supervisor and Acting Director at NOAA/NLSC, he leads
              technology operations that support the nation&apos;s environmental
              monitoring infrastructure — systems that scientists and
              policymakers rely on for weather prediction, climate monitoring,
              and oceanographic research.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Cards */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Agencies Served"
            title="Federal Career Timeline"
            align="left"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {agencies.map((agency) => (
              <div
                key={agency.name}
                className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <agency.icon className="w-8 h-8 text-navy mb-4" />
                <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                  {agency.name}
                </h3>
                <p className="text-sm font-medium text-gold mb-3">
                  {agency.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {agency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Expertise"
            title="Areas of Professional Focus"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <Cpu className="w-6 h-6 text-navy mb-3" />
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Federal Savings Highlight */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl font-bold text-gold mb-4">$3.5M+</div>
          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            Federal IT Cost Savings
          </h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Through strategic IT optimization, infrastructure modernization, and
            efficient resource management, Dr. Nguyen has delivered over $3.5
            million in documented cost savings to federal agencies.
          </p>
        </div>
      </section>

      <CTABanner
        title="Explore His Academic Career"
        description="Discover Dr. Nguyen's contributions to higher education, research, and doctoral mentorship."
        primaryLabel="View Academia"
        primaryHref="/academia"
        secondaryLabel="Credentials"
        secondaryHref="/credentials"
      />
    </>
  );
}
