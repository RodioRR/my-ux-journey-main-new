type Testimonial = {
  /** Short version shown in the card. */
  quote: string;
  /** Full / long wording — shown under “Original”. Leave empty to show a placeholder until you add it. */
  quoteOriginal?: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Melanie shows how much impact excellent UX research can have on a business. (...) What's most impressive in her work is her ability to connect the user's perspective with company goals. (...) she always delivered concrete, actionable recommendations whose implementation brought measurable business benefits. (...)",
    quoteOriginal:
      "Współpraca z Melanie to dowód na to, jak ogromny wpływ na biznes potrafi mieć świetny UX Research. Melanie to profesjonalistka w każdym calu. Jej przenikliwość i analityczny umysł pozwalają jej dostrzegać niuanse w zachowaniach użytkowników, które inni łatwo przeoczają. Najbardziej imponująca w pracy Melanie jest jej umiejętność łączenia perspektywy użytkownika z celami firmy. Jej badania nigdy nie kończyły się na samej diagnozie problemu, zawsze dostarczała konkretne, wartościowe rekomendacje, których wdrożenie przynosiło nam wymierne korzyści biznesowe. Gorąco polecam Melanie każdej organizacji, która chce tworzyć lepsze produkty i usługi w oparciu o rzetelne dane.",
    author: "Maciej Rynarzewski",
    role: "Strategy Director at ZEN.COM",
  },
  {
    quote:
      "During my time at G2A, Melanie was my team leader and my mentor. She is very thorough, pays attention to every small detail and has a very broad knowledge of research methods and cognitive science. (...)As a manager, she was very supportive, offered her help and shared her expertise whenever we needed it. (...)",
    quoteOriginal:
      "During my time at G2A, Melanie was my team leader and my mentor. She is very thorough, pays attention to every small detail and has a very broad knowledge of research methods and cognitive science. She also has an impeccable command of four (!) languages, which makes her able to talk to users from all around the world. As a manager, she was very supportive, offered her help and shared her expertise whenever we needed it. I learned a lot from Melanie and I'm sure whoever gets to work with her will learn a lot, too.",
    author: "Olga Skoczek (Wojnarowska)",
    role: "UX Researcher at G2A.COM",
  },
  {
    quote:
      "(...) She's a very knowledgable researcher that has provided critical data and solutions to company's projects and has improved the flow of information across many branches in the company. I'm very thankful I get to design, knowing that my every move is being backed by such a professional.",
    quoteOriginal:
      "I have pleasure to work with Melanie on many projects that focus strongly on UX Research. She has helped me improve my UX Designs plenty of times and as well as optimising many products. She's a very knowledgable researcher that has provided critical data and solutions to company's projects and has improved the flow of information across many branches in the company. I'm very thankful I get to design, knowing that my every move is being backed by such a professional.",
    author: "Kamil Rejman",
    role: "UX Designer at G2A.COM",
  },
  {
    quote:
      "Melanie is an outstanding collaborator who excels in team environments. She prioritizes relationships, proactively communicates, and fosters a positive atmosphere. Over four years she supported the development of my mobile application, (...) Her experience in leading UXR projects repeatedly enabled us to overcome significant challenges.",
    quoteOriginal:
      "Melanie is an outstanding collaborator who excels in team environments. She prioritizes relationships, proactively communicates, and fosters a positive atmosphere. Over four years she supported the development of my mobile application, ensuring our team stayed closely connected to users and had access to valuable data, insights, and recommendations. Melanie demonstrates strong professionalism, curiosity and the ability to ask insightful questions. Her experience in leading UXR projects repeatedly enabled us to overcome significant challenges.",
    author: "Monika Majnert",
    role: "Product Owner of Mobile App at G2A.COM",
  },
  {
    quote:
      "(...) She demonstrates strong commitment to projects, reliability, and openness to dialogue and collaboration, even when opinions differ. Curious and engaged, she is willing to go beyond surface-level work and take a deeper interest in the project. She works effectively across the organization, not just within her own team or function. (...)",
    quoteOriginal:
      "I have been working with Melanie on a strategically important project that has evolved through several iterations over the past few years. She demonstrates strong commitment to projects, reliability, and openness to dialogue and collaboration, even when opinions differ. Curious and engaged, she is willing to go beyond surface-level work and take a deeper interest in the project. She works effectively across the organization, not just within her own team or function. She is also open to feedback and able to explain complex topics in a clear and accessible way, making them understandable to people with different levels of expertise in various parts of the company.",
    author: "Joanna Frota Kurkowska",
    role: "Head of Strategic Research at Zaiks Lab",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container">
        <p className="font-body text-base tracking-[0.3em] uppercase text-primary mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 md:mb-16">
          What people say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const originalBody = t.quoteOriginal?.trim();
            return (
              <blockquote
                key={i}
                className="p-8 rounded-xl bg-background border border-border flex flex-col justify-between min-h-0"
              >
                <div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <details className="mt-4">
                    <summary className="font-body text-sm text-primary cursor-pointer hover:underline">
                      Original
                    </summary>
                    {originalBody ? (
                      <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed italic border-l-2 border-border pl-3">
                        "{originalBody}"
                      </p>
                    ) : (
                      <p className="mt-3 font-body text-sm text-muted-foreground/80 leading-relaxed italic border-l-2 border-border pl-3">
                        Full version to be added.
                      </p>
                    )}
                  </details>
                </div>
                <footer className="mt-6">
                  <p className="font-display text-foreground">{t.author}</p>
                  <p className="font-body text-base text-muted-foreground">{t.role}</p>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
