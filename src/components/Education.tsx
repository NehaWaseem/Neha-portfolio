import React, { useEffect, useState } from "react";
import nuImg from "@/assets/fast.png";   // National University image
import kcImg from "@/assets/kc.png";   // Kinnaird College image (kc)
import bssImg from "@/assets/bss.png"; // Beaconhouse image (bss)

const cards = [
  {
    title: "National University",
    subtitle: "B.Sc. — Computer Science",
    body:
      "Focused on software fundamentals, data structures and system design. Built several course projects exploring mobile and web integrations.",
    badge: "Cgpa: 3.25/4",
  },
  {
    title: "Kinnaird College",
    subtitle: "Diploma / Coursework",
    body:
      "Concentrated on interface design and multimedia with hands-on projects in interaction design and prototyping.",
    badge: "Grade:A+",
  },
  {
    title: "Beaconhouse",
    subtitle: "High School — Graduated A+",
    body:
      "Strong academic foundation with a focus on analytical thinking and creative problem solving. Graduated with A+ across core subjects.",
    badge: "Grade: A+",
  },
];

const Education: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="education" aria-label="Education" className="mx-auto max-w-6xl px-4 mt-6">
      {/* Centered heading styled to match Experience/Skills (larger, bolder, wider cyan accent) */}
      <header className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#6B4BCF] dark:text-[#6B4BCF]">
          Education
        </h2>
        <div className="mt-3 flex justify-center">
          <span
            aria-hidden
            className="block h-1 w-36 md:w-48 rounded bg-cyan-500/90 dark:bg-cyan-400/80"
          />
        </div>
      </header>

      <div
        className={
          "w-full grid gap-4 grid-cols-1 md:grid-cols-3 transition-transform duration-700 ease-out transform " +
          (mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98")
        }
      >
        {cards.map((c) => (
          <article
            key={c.title}
            className="w-full rounded-2xl shadow-md ring-1 ring-border/40 p-5"
            style={{
              background:
                "radial-gradient(500px 200px at 30% 10%, rgba(107,75,207,0.22) 0%, rgba(139,111,239,0.10) 30%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
              borderLeft: "6px solid #6B4BCF",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* image: use imported asset per institution */}
            <div className="w-full h-36 md:h-40 rounded-md overflow-hidden">
              <img
                src={
                  c.title === "National University"
                    ? nuImg
                    : c.title === "Kinnaird College"
                    ? kcImg
                    : bssImg
                }
                alt={`${c.title} image`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{c.title}</h4>
            <p className="mt-1 text-xs text-muted-foreground dark:text-slate-300">{c.subtitle}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{c.body}</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-[#6B4BCF]/12 text-[#6B4BCF] dark:bg-[#6B4BCF]/18 dark:text-[#EDE6FF]">
                {c.badge}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
