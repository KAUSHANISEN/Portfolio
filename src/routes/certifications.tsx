import { createFileRoute, Link } from "@tanstack/react-router";
import { certifications } from "@/lib/certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Kaushani Sen" },
      {
        name: "description",
        content:
          "Professional certifications earned by Kaushani Sen across AI, machine learning, and cloud engineering.",
      },
      { property: "og:title", content: "Certifications — Kaushani Sen" },
      {
        property: "og:description",
        content:
          "A curated log of credentials in AI, machine learning, and cloud engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="font-serif text-xl italic">
            Kaushani<span className="text-gold">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <Link to="/" hash="work" className="hover:text-gold transition-colors">Work</Link>
            <Link to="/" hash="about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/certifications" className="text-gold">Certifications</Link>
            <Link to="/" hash="contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>
          <a
            href="mailto:hello@kaushani.dev"
            className="hidden md:inline-flex items-center gap-2 text-sm border-b border-gold pb-0.5 text-gold"
          >
            Let's talk
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-40 pb-16">
        <div className="mono-eyebrow mb-8">Credentials — Vol. I / 2026</div>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-4xl">
          Certifications <span className="italic text-gold">&amp;</span> continuing study.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          A living record of the coursework and credentials shaping my path
          into AI engineering — from foundations to applied deep learning.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ul className="divide-y divide-border">
            {certifications.map((c, i) => (
              <li
                key={c.slug}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 items-start hover:bg-card/40 transition-colors"
              >
                <div className="md:col-span-1 font-serif italic text-gold text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-6">
                  <h2 className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">
                    {c.title}
                  </h2>
                  <div className="mt-3 mono-eyebrow">{c.issuer}</div>
                  <p className="mt-4 text-muted-foreground max-w-xl">{c.summary}</p>
                </div>
                <div className="md:col-span-3 space-y-3">
                  <div>
                    <div className="mono-eyebrow mb-1">Year</div>
                    <div className="text-sm">{c.year}</div>
                  </div>
                  {c.credentialId && (
                    <div>
                      <div className="mono-eyebrow mb-1">Credential</div>
                      <div className="text-sm text-muted-foreground break-all">
                        {c.credentialId}
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <div className="mono-eyebrow">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs border border-border px-2 py-1 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      className="mt-2 text-xs text-gold gold-underline w-fit"
                    >
                      Verify →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="mono-eyebrow mb-4">Next</div>
            <h3 className="font-serif text-4xl md:text-5xl">
              Back to <span className="italic text-gold">selected work</span>.
            </h3>
          </div>
          <Link
            to="/"
            hash="work"
            className="font-serif italic text-2xl gold-underline hover:text-gold transition-colors"
          >
            View projects →
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-4">
          <span>© 2026 Kaushani Sen. All rights reserved.</span>
          <span className="mono-eyebrow">Crafted with care</span>
        </div>
      </footer>
    </div>
  );
}