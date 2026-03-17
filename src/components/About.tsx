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
        {/* "About" label */}
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          About
        </p>

        {/* Heading full width, then 3 columns */}
        <div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Research that
            <br />
            <span className="text-primary italic">moves the needle</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-12 items-start">
            {/* Column 1: Paragraphs */}
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm curious—a UX Researcher who takes ownership and initiative. Proactive and committed.
              </p>
              <p>
                As a cognitive scientist at heart, I'm trained to ask the right questions and read between the lines. Being multilingual lets me hear users in their own words; an analytical mind turns what they say into what they need.
              </p>
              <p>
                I thrive as a project leader when leading cross-functional work that balances user needs with business goals. Turning research into revenue. Moving the needle.
              </p>
            </div>

            {/* Column 2: Stats boxes in 2 rows */}
          <div className="grid grid-cols-2 gap-3 min-w-[200px]">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl bg-background border border-border text-center">
                <p className="font-display text-3xl text-accent mb-1">{stat.number}</p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Column 3: Degrees */}
          <div>
            <h3 className="font-display text-xl text-primary text-left mb-4">Degrees</h3>
            <div className="space-y-5">
              <div className="font-body text-sm">
                <p className="text-foreground font-medium">M.A. in Cognitive Science</p>
                <p className="text-muted-foreground">Human-Computer Interaction</p>
                <p className="text-muted-foreground">Cognitive Neuropsychology</p>
              </div>
              <div className="font-body text-sm">
                <p className="text-foreground font-medium">Postgraduate in Business Planning and Strategy</p>
              </div>
              <div className="font-body text-sm">
                <p className="text-foreground font-medium">B.A. in Applied Linguistics</p>
                <p className="text-muted-foreground">Intercultural Communication</p>
                <p className="text-muted-foreground">Translations</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
