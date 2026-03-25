import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";

const Hero = () => {
  const buzzwords = [
    { text: "curious.", color: "#805AD5" },
    { text: "a cognitive scientist.", color: "#8B5CF6" },
    { text: "multilingual.", color: "#9B6ED8" },
    { text: "asking the right questions.", color: "#7C3AED" },
    { text: "proactive.", color: "#A78BFA" },
    { text: "reading between the lines.", color: "#9F7AEA" },
    { text: "taking ownership.", color: "#7E57C2" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % buzzwords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative flex flex-col overflow-x-hidden pt-16 md:pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container relative z-10 flex flex-1 flex-col justify-center pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:pb-6 sm:pt-6 md:pb-8 md:pt-8">
        <div className="max-w-3xl w-full">
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3 sm:tracking-[0.3em] sm:mb-4 md:mb-6 animate-fade-in">
            UX Research Portfolio
          </p>
          <h1 className="font-display text-[clamp(2rem,calc(5.5vw+0.5rem),6rem)] text-foreground leading-[1.05] mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            Hi, I'm
            <br />
            <span className="text-primary">Melanie Gierszal</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            and I'm{" "}
            <span
              key={currentIndex}
              className="font-display text-[clamp(1.25rem,calc(3vw+0.5rem),2.25rem)] font-semibold inline transition-all duration-500 animate-fade-in"
              style={{ color: buzzwords[currentIndex].color }}
            >
              {buzzwords[currentIndex].text}
            </span>
          </p>
          <div
            className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4 md:mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover:opacity-90 transition-opacity no-print sm:px-8 sm:py-3.5"
            >
              Get in Touch
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#work");
              }}
              className="inline-flex items-center px-5 py-3 rounded-lg border border-foreground/20 text-foreground font-body font-medium text-sm tracking-wide hover:bg-foreground/5 transition-colors no-print sm:px-8 sm:py-3.5"
            >
              View Case Studies
            </a>
            <a
              href="/assets/Melanie%20Gierszal%20RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-foreground/20 text-foreground font-body font-medium text-sm tracking-wide hover:bg-foreground/5 transition-colors no-print sm:px-8 sm:py-3.5"
            >
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
