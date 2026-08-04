import { createFileRoute, Link } from "@tanstack/react-router";
import resumeAsset from "@/assets/Kaushani_Sen_Resume3.pdf";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaushani Sen" },
      { name: "description", content: "Get in touch with Kaushani Sen." },
      { property: "og:title", content: "Contact — Kaushani Sen" },
      { property: "og:description", content: "Get in touch with Kaushani Sen." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-28">
      <section className="mx-auto max-w-7xl px-6 md:px-10 text-center">
        <div className="text-left">
          <Link to="/" className="mono-eyebrow text-muted-foreground hover:text-gold">← Home</Link>
        </div>
        <div className="mono-eyebrow mt-10 mb-6">CONTACT DETAILS-</div>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.95]">
          From Patterns, <br />
          <span className="italic text-gold">to production</span>.
        </h1>
        <a
          href="mailto:senkaushani6@gmail.com"
          className="inline-block mt-12 font-serif italic text-3xl md:text-4xl gold-underline hover:text-gold transition-colors"
        >
          senkaushani6@gmail.com
        </a>
        <div className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground flex-wrap">
          <a href="https://github.com/KAUSHANISEN" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/kaushani-sen-250876253" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
          <a
            href={resumeAsset}
            download="Kaushani_Sen_Resume3.pdf"
            className="text-gold hover:text-gold-light transition-colors"
          >
            Download Resume ↓
          </a>
        </div>
      </section>
    </div>
  );
}