import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
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
