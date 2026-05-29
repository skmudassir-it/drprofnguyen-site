import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import {
  GraduationCap,
  Building2,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";

const institutions = [
  "University of Maryland Global Campus",
  "Indiana Wesleyan University — Lead Faculty, Dissertation Chair & Peer Reviewer",
  "Aspen University — DBA Research Chair & Dissertation Chair",
  "Purdue University Global",
  "Grand Canyon University",
  "Colorado Technical University — Associate Professor",
  "CSU Global (Colorado State University Global)",
  "Saudi Electronic University",
  "Ivy Tech Community College",
];

const books = [
  {
    title:
      "Three Prayers, Three Boats: From Saigon Refugee to Silicon Valley Professor",
    year: "2025",
    theme: "Faith · Survival · Refugee · American Dream · Divine Providence",
    description:
      "Three near-death escapes from Communist Vietnam — divine intervention on the South China Sea — from Hamlet 2, Huế to the top 1% of American academia. Foundational faith witness behind every career achievement.",
  },
  {
    title:
      "Three Prayers, Three Boats: From Vietnamese Refugee to Federal IT Executive, Doctoral Mentor, and Global Educator",
    year: "2025",
    theme: "Faith · Federal Service · Doctoral Mentorship · Global Education",
    description:
      "Traces miraculous divine interventions on the South China Sea and the journey to federal IT executive leadership, doctoral mentorship, and global education across nine institutions.",
  },
  {
    title:
      "Earned, Not Given: A Vietnamese Refugee's Rise to America's Top 1%",
    year: "2025/26",
    theme: "Refugee Journey · Top 1% · Academic Achievement · Faith",
    description:
      "Definitive personal account of surviving three near-death escapes and rising to federal IT executive, dissertation chair for 11 graduates, and professor at nine institutions worldwide.",
  },
  {
    title:
      "Earned, Not Given: Grace Multiplied — From Pistol Click and Tempest Waves to #1 Worldwide Impact and Eleven Doctoral Legacies",
    year: "2026",
    theme: "Grace · Survival · #1 Ranking · Doctoral Legacy",
    description:
      "A sweeping account of grace multiplied from the terror of a Communist pistol click in Huế and three miraculous sea escapes to a #1 worldwide ranking and eleven doctoral graduates mentored to completion.",
  },
];

export default function AcademiaPage() {
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
            label="Academia"
            title="Professor, Author & Researcher"
            description="Teaching across 9 institutions worldwide and authoring 26+ books"
            light
          />
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Education"
            title="Academic Credentials"
            align="left"
          />

          <div className="mt-10 space-y-6">
            {[
              {
                degree: "PhD, Management — Information Systems Management",
                institution: "Walden University",
                year: "2013",
                note: "Completed without any prior transfer credits — every doctoral credit earned from the ground up. Dissertation Chair: Dr. David Gould.",
              },
              {
                degree: "MS, Computer Science",
                institution: "Northeastern Illinois University",
                year: "",
              },
              {
                degree: "BS, Electrical Engineering",
                institution: "Illinois Institute of Technology",
                year: "",
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="bg-white border border-border rounded-xl p-6 flex items-start gap-4"
              >
                <GraduationCap className="w-8 h-8 text-navy shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-lg text-navy">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {edu.institution}
                    {edu.year && ` — ${edu.year}`}
                  </p>
                  {edu.note && (
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Institutions */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Teaching"
            title="Academic Appointments"
            description="Serving as graduate professor and dissertation chair across 9 institutions worldwide"
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {institutions.map((inst, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-border rounded-lg p-4"
              >
                <Building2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{inst}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Research"
            title="Selected Publications"
            description="26+ books and 15+ peer-reviewed articles with 180+ citations"
            align="left"
          />

          <div className="mt-10 space-y-6">
            {books.map((book, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-navy shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-gold/10 text-gold rounded-full">
                        {book.year}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {book.theme}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-cream border border-border rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-navy shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  Peer-Reviewed Research
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  15+ peer-reviewed articles published across leading academic
                  journals in cybersecurity, information systems management, AI
                  governance, and IT leadership. Dr. Nguyen&apos;s research has
                  garnered 180+ citations, reflecting substantive impact on both
                  academic scholarship and industry practice.
                </p>
                <a
                  href="https://scholar.google.com/citations?user=DrProfNguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors mt-3"
                >
                  View on Google Scholar{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="View His Credentials"
        description="Explore Dr. Nguyen's professional certifications, awards, and qualifications."
        primaryLabel="View Credentials"
        primaryHref="/credentials"
        secondaryLabel="Mentorship"
        secondaryHref="/mentorship"
      />
    </>
  );
}
