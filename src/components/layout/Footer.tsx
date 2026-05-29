import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-7 h-7 text-gold" />
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                Dr. Nguyen
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Federal IT Executive, Professor, Author &amp; Mentor. Ranked #1 worldwide for student and workforce impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/academia", label: "Academia" },
                { href: "/credentials", label: "Credentials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              More
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/mentorship", label: "Mentorship" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="mailto:dans515e@gmail.com" className="hover:text-gold transition-colors">
                  dans515e@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:317-728-0273" className="hover:text-gold transition-colors">
                  317-728-0273
                </a>
              </li>
              <li>McCordsville, Indiana, USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Dr. Daniel Schilling Weiss Nguyen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
