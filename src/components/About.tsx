const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Research Projects" },
    { number: "6", label: "Languages" },
    { number: "16", label: "Research Methods" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container">
        <p className="font-body text-base tracking-[0.3em] uppercase text-primary mb-4">
          About
        </p>

        <div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Research that
            <br />
            <span className="text-primary italic">moves the needle</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I'm curious - a UX Researcher who takes ownership and initiative. Proactive and committed.
              </p>
              <p>
                As a cognitive scientist at heart, I'm trained to ask the right questions and read between the lines. Being multilingual lets me hear users in their own words and my analytical mind turns what they say into what they need.
              </p>
              <p>
                I thrive as a project leader when leading cross-functional work that balances user needs with business goals. Turning research into revenue. Moving the needle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 min-w-[200px]">
              {stats.map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl bg-background border border-border text-center">
                  <p className="font-display text-3xl text-accent mb-1">{stat.number}</p>
                  <p className="font-body text-base text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
