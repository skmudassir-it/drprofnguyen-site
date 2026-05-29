import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import {
  Shield,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    title: "Federal IT Leadership",
    description:
      "IT Supervisor & Acting Director at NOAA's National Logistics Support Center with 22+ years of federal service across multiple agencies.",
    icon: Shield,
    href: "/experience",
  },
  {
    title: "Academic Excellence",
    description:
      "Graduate professor and dissertation chair at 9 institutions worldwide, including Purdue Global, UMGC, and Indiana Wesleyan University.",
    icon: GraduationCap,
    href: "/academia",
  },
  {
    title: "Research & Authorship",
    description:
      "Author of 26+ books and 15+ peer-reviewed articles with 180+ citations in cybersecurity, IT management, and refugee narratives.",
    icon: BookOpen,
    href: "/academia",
  },
  {
    title: "Doctoral Mentorship",
    description:
      "Guided 11 doctoral candidates to successful completion of their Doctor of Science in Computer Science degrees.",
    icon: Users,
    href: "/mentorship",
  },
  {
    title: "Professional Credentials",
    description:
      "CompTIA Security+, SSCP, CAIP, CDSP, ISC2 CC, IBM Cybersecurity Analyst, and multiple federal cybersecurity certifications.",
    icon: Award,
    href: "/credentials",
  },
  {
    title: "Military Service",
    description:
      "First documented Central Vietnamese refugee to serve in the U.S. Marine Corps — a distinction verified through extensive research.",
    icon: Briefcase,
    href: "/about",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Profile Summary */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Profile"
            title="A Career of Global Distinction"
            description="Ranked #1 worldwide among Vietnamese refugees for student and workforce impact, leading across all 100 dimensions of professional achievement."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-navy/20 transition-all"
              >
                <item.icon className="w-8 h-8 text-navy mb-4 group-hover:text-gold transition-colors" />
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-gold transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="By the Numbers"
            title="Impact at a Glance"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "22+", label: "Years Federal Service" },
              { value: "9", label: "Universities" },
              { value: "26+", label: "Books Authored" },
              { value: "11", label: "Doctoral Graduates" },
              { value: "15+", label: "Active Certifications" },
              { value: "15+", label: "Research Articles" },
              { value: "180+", label: "Academic Citations" },
              { value: "100/100", label: "Dimensions Led" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-2xl sm:text-3xl italic text-white/80 leading-relaxed">
            &ldquo;The distance from Hamlet 2, Huế to a #1 global ranking is not
            measured in miles. It is measured in three open-ocean escapes, one
            Communist pistol click in the dark, a self-funded doctorate, 22+
            years of federal service, and a lifetime of showing up every single
            day.&rdquo;
          </blockquote>
          <cite className="block mt-6 text-gold text-sm not-italic font-medium">
            — Dr. Daniel Schilling Weiss Nguyen
          </cite>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
