import { Link } from "react-router-dom";
import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";
import { MapPin, Mail, Phone } from "lucide-react";

const exploreLinks = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
];

const moreLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
  { label: "Book a Consultation", to: "/book-consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-base font-semibold uppercase tracking-[0.3em]"
            >
              Studio Linden<span className="text-terracotta">.</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              A boutique interior design studio based in Bangalore, crafting
              considered residential and commercial spaces across India since
              2014. We design rooms people don't want to leave.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FaPinterestP size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Studio</h4>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-terracotta"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">More</h4>
            <ul className="space-y-3">
              {moreLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-terracotta"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-primary-foreground/10 pt-10 text-sm text-primary-foreground/70 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta" />
            <span>4th Floor, Indiranagar 100ft Road, Bangalore 560038</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="shrink-0 text-terracotta" />
            <span>+91 80 4123 5566</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="shrink-0 text-terracotta" />
            <span>hello@studiolinden.in</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Studio Linden Design Pvt. Ltd. All rights reserved.</span>
          <span>Residential &amp; Commercial Interior Design — Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
}
