import { useState } from "react";
import { ImageIcon } from "lucide-react";
import ImageLightbox from "./case-studies/ImageLightbox";

import certBaymard from "@/assets/cert-baymard-ux-professional.png";
import certUsabilityTesting from "@/assets/cert-conducting-usability-testing.jpeg";
import certUserMethods from "@/assets/cert-user-methods.jpeg";
import certProductAnalytics1 from "@/assets/cert-product-analytics-1.png";
import certProductAnalytics2 from "@/assets/cert-product-analytics-2.png";
import certUxStrategy from "@/assets/cert-ux-strategy.png";

const researchMethods = [
  "A/B & Multivariate Testing",
  "Surveys",
  "Analytics & Clickstream Analysis",
  "Moderated & Unmoderated Usability Testing",
  "In-depth Interviews & Contextual Inquiry",
  "Card Sorting & Tree Testing",
  "Concept Testing & First-Click Testing",
  "Eyetracking",
  "Expert Reviews & Heuristic Evaluation",
];

const toolCategories = [
  { label: "Data analysis", tools: ["Excel (Advanced)", "BigQuery (basic SQL)"] },
  { label: "Survey", tools: ["Alchemer", "Survicate", "SurveyMonkey", "Typeform", "Microsoft Forms", "Google Forms"] },
  { label: "Usability Testing", tools: ["Sharewell", "Lookback", "Maze", "Optimal Workshop"] },
  { label: "Analytics", tools: ["Google Analytics", "Hotjar", "Clarity"] },
  { label: "Project Management", tools: ["Confluence", "Jira", "Trello"] },
  { label: "Design tools", tools: ["Canva", "Sketch", "Figma", "InVision"] },
];

const languages = [
  { name: "Polish", level: "Native" },
  { name: "German", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Communicative" },
  { name: "Swedish", level: "Basic" },
  { name: "Russian", level: "Basic" },
];

type CertType = {
  name: string;
  issuer: string;
  image?: string | string[];
  pdf?: string;
  inProgress?: boolean;
};

const certificates: CertType[] = [
  { name: "UX Professional", issuer: "Baymard", image: certBaymard },
  { name: "Product Analytics", issuer: "Witflow", image: [certProductAnalytics1, certProductAnalytics2] },
  { name: "UX Strategy Fundamentals", issuer: "Joe Natoli", image: certUxStrategy },
  { name: "Conducting Usability Testing", issuer: "Interaction Design Foundation", image: certUsabilityTesting },
  { name: "User Methods and Best Practices", issuer: "Interaction Design Foundation", image: certUserMethods },
];

const Skills = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | string[]>("");
  const [lightboxAlt, setLightboxAlt] = useState("");
  const openCert = (cert: CertType) => {
    if (cert.image) {
      setLightboxSrc(cert.image);
      setLightboxAlt(`${cert.name} - ${cert.issuer}`);
      setLightboxOpen(true);
    } else if (cert.pdf) {
      window.open(cert.pdf, "_blank");
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-card">
      <div className="container">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Expertise
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-1">
          Skills & Methods
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-16 max-w-2xl">
          Methods I use, tools I work with, and how I keep learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-xl text-primary mb-6">Research Methods</h3>
            <ul className="space-y-3">
              {researchMethods.map((method) => (
                <li key={method} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {method}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-primary mb-6">Tools</h3>
            <div className="space-y-4">
              {toolCategories.map((cat) => (
                <div key={cat.label}>
                  <p className="font-body text-xs font-medium text-foreground mb-1.5">{cat.label}:</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-body text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-primary mb-6">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div key={cert.name} className="font-body text-sm flex items-start justify-between gap-2">
                  <div>
                    <p className="text-foreground">
                      {cert.name}
                      {cert.inProgress && (
                        <span className="text-xs text-muted-foreground ml-1.5 italic">(in progress)</span>
                      )}
                    </p>
                    <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  </div>
                  {(cert.image || cert.pdf) && (
                    <button
                      onClick={() => openCert(cert)}
                      className="shrink-0 mt-0.5 p-1 rounded text-primary hover:text-accent hover:bg-muted/50 transition-colors"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      <ImageIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-primary mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center font-body text-sm">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground text-xs px-2.5 py-1 rounded-full bg-muted">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </section>
  );
};

export default Skills;
