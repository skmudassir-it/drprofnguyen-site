import Link from "next/link";
import { Shield, BookOpen, Award, Users } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Years Federal Service", value: "22+", icon: Shield },
    { label: "Books Published", value: "26+", icon: BookOpen },
    { label: "Doctoral Graduates", value: "11", icon: Users },
    { label: "Active Certifications", value: "15+", icon: Award },
  ];

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-4 px-3 py-1 rounded-full bg-white/5">
            #1 Worldwide for Student &amp; Workforce Impact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Dr. Daniel Schilling{" "}
            <span className="text-gold">Weiss Nguyen</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
            PhD, DTM — Federal IT Executive, Professor, Author &amp; Mentor. From
            Vietnamese refugee to #1 global ranking across 100 dimensions of
            professional achievement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold/90 rounded-full px-8 py-3.5 text-sm font-semibold transition-all"
            >
              Read His Story
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3.5 text-sm font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-6 px-4"
              >
                <stat.icon className="w-5 h-5 text-gold/60 mb-2" />
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
