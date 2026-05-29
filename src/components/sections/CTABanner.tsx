import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Interested in Connecting?",
  description = "For academic collaborations, speaking engagements, or professional inquiries.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
}: CTABannerProps) {
  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 bg-gold text-navy hover:bg-gold/90 rounded-full px-8 py-3.5 text-sm font-semibold transition-all"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3.5 text-sm font-semibold transition-all"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
