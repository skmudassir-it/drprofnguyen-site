import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Anchor, Heart, Flag } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
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
            label="Origin"
            title="From Hamlet 2, Huế to Global Recognition"
            description="A story of resilience, survival, and the American Dream"
            light
          />
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dr. Daniel Schilling Weiss Nguyen was born in Hamlet 2, Huế, in
              Central Vietnam — the heartland region stretching along the narrow
              coastal corridor that includes historic cities such as Huế, Đà
              Nẵng, and Quảng Ngãi. Central Vietnam bore some of the most
              devastating human costs of the Vietnam War, and its people endured
              the transition of 1975 with particular intensity.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              When Saigon fell on April 30, 1975, the consequences reverberated
              across every province, and the years that followed saw wave after
              wave of families from Central Vietnam making the most consequential
              decision of their lives: to flee by sea rather than live under
              conditions that offered no future for their children.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mt-6">
              Dr. Nguyen survived three separate open-ocean escape attempts —
              each one a brush with death that could have ended his journey
              before it began. On one attempt, a Communist soldier&apos;s pistol
              clicked in the dark — a moment that should have been fatal but,
              through divine grace, was not. He arrived in the United States in
              1983 as part of the post-Fall of Saigon refugee wave, carrying
              nothing but an unshakeable will to build a life worthy of the
              sacrifices that made it possible.
            </p>
          </div>
        </div>
      </section>

      {/* Military Service */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Military Service"
            title="United States Marine Corps"
            description="A historic distinction in service to his adopted nation"
            align="left"
          />

          <div className="mt-10 bg-white border border-border rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Flag className="w-8 h-8 text-navy shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  First Documented Central Vietnamese Refugee in the U.S. Marine
                  Corps
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Nguyen is the first documented Central Vietnamese refugee
                  — from the Huế, Đà Nẵng, Quảng Ngãi region — to have enlisted
                  and served in the United States Marine Corps. Extensive
                  open-source research across U.S. military records,
                  Vietnamese-American community archives, and public biographical
                  databases yielded no comparable precedent. This distinction
                  places him in a category of one among the Vietnamese refugee
                  generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="What Drives Him"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: "Resilience",
                description:
                  "Three open-ocean escapes and a lifetime of perseverance forged an unbreakable spirit. Every challenge is met with the calm decisiveness of someone who has already survived the worst.",
              },
              {
                icon: Heart,
                title: "Gratitude",
                description:
                  "Dr. Nguyen works harder than most because he carries the weight of those who did not survive. Every degree, publication, and student mentored is a tribute to that sacrifice.",
              },
              {
                icon: Flag,
                title: "Service",
                description:
                  "From the U.S. Marine Corps to federal IT leadership to doctoral mentorship — service is not an obligation but a sacred trust. Leadership means building organizations that endure.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white border border-border rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <value.icon className="w-10 h-10 text-navy mb-4" />
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Discover His Professional Journey"
        description="Explore Dr. Nguyen's federal IT leadership, academic career, and global impact."
        primaryLabel="View Experience"
        primaryHref="/experience"
        secondaryLabel="Academia"
        secondaryHref="/academia"
      />
    </>
  );
}
