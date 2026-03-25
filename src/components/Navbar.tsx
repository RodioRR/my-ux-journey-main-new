import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

type NavLinkItem =
  | { label: string; href: string }
  | { label: string; href: string; external: true; pdfBadge?: boolean };

const navLinks: NavLinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  {
    label: "Resume",
    href: "/assets/Melanie%20Gierszal%20RESUME.pdf",
    external: true,
    pdfBadge: true,
  },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-body text-base text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#");
          }}
          className="font-display text-xl text-foreground"
        >
          M<span className="text-primary">.</span>G
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={link.pdfBadge ? "Resume (PDF, opens in new tab)" : undefined}
              >
                <span>{link.label}</span>
                {link.pdfBadge && (
                  <span className="rounded border border-border/80 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    PDF
                  </span>
                )}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={linkClass}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={linkClass}
                  aria-label={link.pdfBadge ? "Resume (PDF, opens in new tab)" : undefined}
                >
                  <span>{link.label}</span>
                  {link.pdfBadge && (
                    <span className="rounded border border-border/80 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      PDF
                    </span>
                  )}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMobileOpen(false);
                  }}
                  className={linkClass}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
