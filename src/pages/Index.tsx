import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // small delay so the animation feels smooth after initial paint
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />

        <About />

        {/* Summary flashcard (lavender accented, animated) */}
        <section
          id="about-summary"
          aria-label="About summary for Neha Waseem"
          className="mx-auto max-w-6xl px-4 mt-8"
        >
          <div
            className={
              "w-full rounded-2xl transition-transform duration-700 ease-out transform shadow-xl ring-1 ring-border/40 " +
              (mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98")
            }
            style={{
              padding: "1.5rem",
              background:
                "radial-gradient(1000px 420px at 40% 18%, rgba(107,75,207,0.34) 0%, rgba(139,111,239,0.22) 28%, rgba(180,150,255,0.10) 50%, rgba(255,255,255,0.04) 78%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
              borderLeft: "6px solid #6B4BCF",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="w-full">
              <h3 className="text-lg font-semibold text-[#6B4BCF] dark:text-[#D9CCFF]">
                Summary
              </h3>

              <div className="mt-3 max-w-prose text-slate-700 dark:text-slate-300 space-y-3">
                <p className="text-sm md:text-base leading-7">
                  I'm a product-focused engineer and designer who builds polished experiences across
                  mobile and web. I specialise in Android development, UI/UX and web design,
                  crafting interfaces that feel intuitive and performant. I combine pragmatic
                  engineering with design thinking to turn concepts into reliable, user-centered
                  products that scale.
                </p>

                <p className="text-sm md:text-base leading-7">
                  Day-to-day I work across native and cross-platform stacks, prototype interactions,
                  and refine designs into production-ready implementations. I focus on usability,
                  performance, and accessibility while mentoring peers and collaborating with product
                  teams to drive measurable outcomes.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Android (Kotlin, Java)", "UI / UX & Prototyping", "Web Design & Front-end", "React Native • Flutter", "Accessibility • Performance", "Prototyping • Figma"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs md:text-sm font-medium bg-[#6B4BCF]/12 text-[#6B4BCF] dark:bg-[#6B4BCF]/18 dark:text-[#EDE6FF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Education />

        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Neha Waseem. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
};

export default Index;