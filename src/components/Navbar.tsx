import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          Studio <span className="text-terracotta">Linden</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors hover:text-terracotta",
                  isActive ? "text-terracotta" : "text-foreground/80"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link to="/book-consultation">
            <Button variant="terracotta" size="sm">
              Book a Consultation
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-editorial flex flex-col py-6 gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base border-b border-border/60 transition-colors",
                    isActive ? "text-terracotta" : "text-foreground/80"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/book-consultation" className="mt-5">
              <Button variant="terracotta" className="w-full">
                Book a Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
