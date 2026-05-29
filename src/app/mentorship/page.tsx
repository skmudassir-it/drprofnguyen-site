import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Users, Lightbulb, Quote, Mail } from "lucide-react";

const graduates = [
  "Desmond Alemiluyi",
  "Freeman Jackson",
  "Derege Kobre",
  "Farhan Hallane",
  "Richard Odigie",
  "Zahid Malik",
  "Juliette Sondano",
  "Larzaro Serrano",
  "Dawood Fadhil Alrubie",
  "Kirstie J. Ballance",
  "Taoufik Ennoure",
  "Quynh-Thu Le",
];

const lessons = [
  {
    title: "The Refugee's Lens: Seeing Opportunity Where Others See Obstacles",
    description:
      "When you escape with nothing, you learn that every opportunity is a miracle. While others complain about barriers, refugees ask: \"How do I use what I have to build something?\" This lens transforms challenge into possibility — in federal IT, it meant finding elegant solutions with limited budgets. In academia, it meant creating teaching models that could reach students across continents simultaneously.",
  },
  {
    title: "Gratitude as Fuel: The Work Ethic That Never Stops",
    description:
      "Dr. Nguyen works harder than most because he carries the weight of those who did not survive. Every degree, every publication, every student mentored feels like a tribute to that sacrifice. This is not burden — it is fuel. Gratitude has a way of renewing energy even when exhaustion threatens. It transforms obligation into privilege.",
  },
  {
    title: "Resilience as Culture: Building Organizations That Endure",
    description:
      "In federal government, the stakes are not academic. Systems must work, data must be protected, operations must continue uninterrupted. The refugee who survived three drowning attempts brings a different sensibility to this work — not panic but calm, not hesitation but decisiveness, not blame but solutions.",
  },
  {
    title: "Service as Spirituality: Leadership as Sacred Trust",
    description:
      "For Dr. Nguyen, leadership is not a position — it is a sacred trust. Every student, every team member, every doctoral candidate represents someone who trusted him with their future. That trust cannot be treated casually. It demands excellence, presence, and a willingness to invest deeply in others' success.",
  },
];

export default function MentorshipPage() {
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
            label="Mentorship"
            title="Building the Next Generation"
            description="11 doctoral graduates, countless students, and a lifetime of guidance"
            light
          />
        </div>
      </section>

      {/* Doctoral Graduates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Graduates"
            title="Doctoral Students Mentored to Completion"
            description="As Dissertation Committee Chair at Aspen University, Dr. Nguyen has guided twelve doctoral candidates through their Doctor of Science in Computer Science degrees."
            align="left"
          />

          <div className="mt-10 bg-white border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {graduates.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 border border-border rounded-lg p-4 hover:border-navy/30 transition-colors"
                >
                  <Users className="w-5 h-5 text-navy shrink-0" />
                  <div>
                    <p className="font-medium text-navy text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">
                      DSc — Computer Science
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-cream rounded-xl border border-border">
              <Quote className="w-6 h-6 text-navy mb-3" />
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                Dr. Nguyen brings a rare authenticity to this mentorship role:
                he completed his own doctoral dissertation without any prior
                transfer credits, earning every credit from the ground up —
                while many of his peers at the time took 10 or more years to
                finish their dissertation work. This discipline and
                determination is what he now instills in every candidate he
                chairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Wisdom"
            title="Lessons Learned"
            description="From refugee to leader — insights that shape every endeavor"
            align="left"
          />

          <div className="mt-12 space-y-8">
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-3">
                      {lesson.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Advisory */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Student Advisory"
            title="Letters of Recommendation & PhD Guidance"
            description="Supporting the next generation of scholars and professionals"
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy/20 rounded-xl p-8 border-t-4 border-t-navy">
              <Mail className="w-8 h-8 text-navy mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                Letters of Recommendation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For current and former students seeking letters of
                recommendation for graduate programs, fellowships, or
                professional opportunities. Please provide your CV, statement of
                purpose, and deadline information when reaching out.
              </p>
            </div>

            <div className="bg-white border border-gold/30 rounded-xl p-8 border-t-4 border-t-gold">
              <Users className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                PhD Program Advisory
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Guidance for prospective doctoral students on program selection,
                application strategy, and dissertation planning. Dr. Nguyen
                offers perspective drawn from his own doctoral journey and
                experience chairing 12 dissertation committees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Connect?"
        description="For academic collaborations, mentorship inquiries, or professional opportunities."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Credentials"
        secondaryHref="/credentials"
      />
    </>
  );
}
