import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  // Active link tracking
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { root: null, rootMargin: "-30% 0px -40% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (href: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  const activeClasses =
    "scale-105 shadow-2xl text-white transform transition duration-150 bg-gradient-to-br from-[#4b2f97] to-[#6B4BCF]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? // When scrolled — adjust for theme automatically
            "bg-white/80 dark:bg-gradient-to-b dark:from-[#05030b]/95 dark:via-[#0b0712]/90 dark:to-[#0a0610]/95 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            aria-label="Home - Neha Waseem"
            className="text-2xl font-bold text-[#6B4BCF] hover:text-[#8C6FEF] transition-smooth dark:text-[#BFAAFF] dark:hover:text-[#D9CCFF]"
          >
            Neha Waseem
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className={
                    "px-3 py-2 rounded-md font-medium text-[clamp(0.9rem,0.3vw+0.8rem,1rem)] transition-transform duration-150 " +
                    (isActive
                      ? activeClasses
                      : "text-foreground hover:text-[#6B4BCF] hover:bg-[#EDE9FF]/60 dark:hover:text-[#BFAAFF] dark:hover:bg-[#201733]/60")
                  }
                >
                  {link.label}
                </a>
              );
            })}
            {/* Theme toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#6B4BCF] hover:text-[#8C6FEF] dark:text-[#BFAAFF] dark:hover:text-[#D9CCFF]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border bg-white/95 dark:bg-[#0a0610]/95 backdrop-blur-md rounded-b-lg"
          >
            <div className="flex items-center justify-between px-3 mb-2">
              <div />
              <div>
                <ThemeToggle />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className={
                      "text-foreground font-medium py-2 px-3 rounded-md transition-colors " +
                      (isActive
                        ? activeClasses
                        : "hover:text-[#6B4BCF] hover:bg-[#EDE9FF]/60 dark:hover:text-[#BFAAFF] dark:hover:bg-[#201733]/60")
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
