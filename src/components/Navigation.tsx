import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle"; // <-- added

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" }, // <-- added
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { root: null, rootMargin: "-30% 0px -40% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => observerRef.current && observerRef.current.observe(s));
    return () => observerRef.current && observerRef.current.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // deeper/darker lavender active styling
  const activeClasses =
    "scale-105 shadow-2xl text-white transform transition duration-150 bg-gradient-to-br from-[#4b2f97] to-[#6B4BCF]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? // darker solid/nav gradient when scrolled
            "bg-gradient-to-b from-[#05030b]/95 via-[#0b0712]/90 to-[#0a0610]/95 backdrop-blur-md shadow-soft border-b border-[#2a2138]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
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
                  role="tab"
                  aria-selected={isActive}
                  className={
                    "px-3 py-2 rounded-md text-foreground transition-transform transform duration-150 font-medium " +
                    (isActive
                      ? activeClasses
                      : "hover:scale-102 hover:shadow-sm hover:text-[#8C6FEF] hover:bg-[#F6F3FF]/30")
                  }
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme toggle on desktop */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
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
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <div className="flex items-center justify-between px-3 mb-2">
              {/* keep a compact toggle in the mobile header */}
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
                    role="tab"
                    aria-selected={isActive}
                    className={
                      "text-foreground transition-smooth font-medium py-2 px-3 rounded-md " +
                      (isActive
                        ? activeClasses
                        : "hover:text-[#8C6FEF] hover:bg-[#F6F3FF]/30")
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
