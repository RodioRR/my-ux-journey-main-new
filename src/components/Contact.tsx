import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-base tracking-[0.3em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Let's work together
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-12">
            If you're building something and want research that drives decisions, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <a href="mailto:gierszal.melanie@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body text-base">
              <Mail className="w-5 h-5 text-primary" />
              gierszal.melanie@gmail.com
            </a>
            <div className="flex items-center gap-3 text-foreground font-body text-base">
              <MapPin className="w-5 h-5 text-primary" />
              Warsaw, Poland
            </div>
          </div>

          <a
            href="mailto:gierszal.melanie@gmail.com"
            className="inline-flex items-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-body font-medium text-base tracking-wide hover:opacity-90 transition-opacity"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
