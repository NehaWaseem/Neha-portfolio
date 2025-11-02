import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-muted/30 py-12 sm:py-14 md:py-16 lg:py-20"
    >
      {/* Responsive container with consistent gutters */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="font-bold text-primary leading-tight
                       text-[clamp(1.75rem,1.6vw+1rem,2.5rem)]"
          >
            Get In Touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 sm:w-20 bg-accent rounded-full" />
          <p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground
                       text-[clamp(0.95rem,0.35vw+0.85rem,1.05rem)]"
          >
            I’m currently looking for new opportunities and would love to hear from you.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Content Card */}
        <Card
          className="border-2 shadow-glow p-4 sm:p-6 md:p-8
                     rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-background/70"
        >
          {/* Robust grid: 1 col on mobile; 2 cols from lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {/* Left: Contact Info */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3
                className="text-primary font-bold
                           text-[clamp(1.25rem,0.6vw+1rem,1.5rem)]"
              >
                Contact Information
              </h3>

              {/* Item */}
              <a
                href="mailto:nehawaseem846@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl bg-secondary p-3.5 sm:p-4
                           hover:bg-accent hover:text-background transition-colors"
              >
                <span
                  className="grid place-items-center rounded-lg p-2
                             bg-accent/10 group-hover:bg-background/20"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-background" />
                </span>
                <span className="min-w-0">
                  <p className="font-semibold text-muted-foreground/90 group-hover:text-background/80 text-xs sm:text-sm">
                    Email
                  </p>
                  <p className="font-medium truncate text-[clamp(0.95rem,0.35vw+0.85rem,1.05rem)]">
                    nehawaseem846@gmail.com
                  </p>
                </span>
              </a>

              {/* Item */}
              <a
                href="tel:+923234807000"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl bg-secondary p-3.5 sm:p-4
                           hover:bg-accent hover:text-background transition-colors"
              >
                <span className="grid place-items-center rounded-lg p-2 bg-accent/10 group-hover:bg-background/20">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-background" />
                </span>
                <span>
                  <p className="font-semibold text-muted-foreground/90 group-hover:text-background/80 text-xs sm:text-sm">
                    Phone
                  </p>
                    <p className="font-medium text-[clamp(0.95rem,0.35vw+0.85rem,1.05rem)]">
                    +92 323 480 7000
                  </p>
                </span>
              </a>

              {/* Item (static block) */}
              <div className="flex items-center gap-3 sm:gap-4 rounded-xl bg-secondary p-3.5 sm:p-4">
                <span className="grid place-items-center rounded-lg p-2 bg-accent/10">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </span>
                <span>
                  <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-[clamp(0.95rem,0.35vw+0.85rem,1.05rem)]">
                    Lahore, Pakistan
                  </p>
                </span>
              </div>
            </div>

            {/* Right: Social / CTA */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3
                className="text-primary font-bold
                           text-[clamp(1.25rem,0.6vw+1rem,1.5rem)]"
              >
                Connect With Me
              </h3>

              <Button
                asChild
                size="lg"
                className="w-full justify-start rounded-xl bg-primary hover:bg-primary/90 shadow-soft
                           py-4 sm:py-5"
              >
                <a
                  href="https://github.com/NehaWaseem"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-[clamp(1rem,0.4vw+0.95rem,1.125rem)]">GitHub</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full justify-start rounded-xl bg-primary hover:bg-primary/90 shadow-soft
                           py-4 sm:py-5"
              >
                <a
                  href="https://www.linkedin.com/in/neha-waseem-9944762aa/"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-[clamp(1rem,0.4vw+0.95rem,1.125rem)]">LinkedIn</span>
                </a>
              </Button>

              <div className="mt-2 sm:mt-4 rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <p className="mb-3 sm:mb-4 text-muted-foreground text-xs sm:text-sm">
                  Available from October 2025 for full-time opportunities
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl border-2 py-4 sm:py-5"
                >
                  <a href="mailto:nehawaseem846@gmail.com">Send Me an Email</a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Accessibility: reduce motion if user prefers */}
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            .transition-colors { transition: none !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
