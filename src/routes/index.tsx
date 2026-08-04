import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-noir.jpg";
import { projects } from "@/lib/projects";
import resumeAsset from "@/assets/Kaushani_Sen_Resume3.pdf";
import portraitAsset from "@/assets/KaushaniPicture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-serif text-xl italic">
            Kaushani<span className="text-gold">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <Link to="/work" className="hover:text-gold transition-colors">Work</Link>
            <Link to="/education" className="hover:text-gold transition-colors">Education</Link>
            <Link to="/certifications" className="hover:text-gold transition-colors">Certifications</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-6">
            <a
              href={resumeAsset}
              download="kaushani-sen-resume.pdf"
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Resume ↓
            </a>
            <a
              href="mailto:senkaushani6@gmail.com"
              className="inline-flex items-center gap-2 text-sm border-b border-gold pb-0.5 text-gold"
            >
              Let's talk
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 pb-24 pt-40">
          <div className="mono-eyebrow mb-8 uppercase tracking-widest">Personal Portfolio -</div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8">
              <h1 className="font-serif text-[13vw] md:text-[9vw] leading-[0.9] tracking-tight">
                Kaushani <span className="italic text-gold">Sen</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Software engineer building precise, resilient systems — from
                distributed backends to the interfaces that make them feel
                inevitable.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 border border-gold/40" aria-hidden />
                <img
                  src={portraitAsset}
                  alt="Portrait of Kaushani Sen"
                  width={260}
                  height={340}
                  className="relative h-64 w-52 md:h-80 md:w-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-12">
            <div className="mono-eyebrow mb-2">Currently</div>
            <div className="text-sm text-foreground/80">
              Aspiring AI Engineer &middot; Open to opportunities
            </div>
          </div>
        </div>
      </section>

      {/* Marquee band */}
      <div className="border-y border-border py-6 overflow-hidden">
        <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap font-serif text-2xl italic">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>JavaScript</span>
              <span className="text-gold">✦</span>
              <span>MatPlotLib</span>
              <span className="text-gold">✦</span>
              <span>Python</span>
              <span className="text-gold">✦</span>
              <span>SQL</span>
              <span className="text-gold">✦</span>
              <span>NumPy</span>
              <span className="text-gold">✦</span>
              <span>Pandas</span>
              <span className="text-gold">✦</span>
              <span>Tailwind CSS</span>
              <span className="text-gold">✦</span>
              <span>React</span>
              <span className="text-gold">✦</span>
              <span>Next.js</span>
            </span>
          ))}
        </div>
      </div>

      {/* Work — masonry */}
      <section id="work" className="mx-auto max-w-7xl px-6 md:px-10 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="mono-eyebrow mb-4">Selected Work</div>
            <h2 className="font-serif text-5xl md:text-6xl">
              Solutions <span className="italic text-gold">delivered</span>.
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">
            {projects.length} projects &middot; 2022 — present
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group relative overflow-hidden bg-card border border-border hover:border-gold transition-colors ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs">
                  <span className="mono-eyebrow">{p.tag}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-2 group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.summary}
                  </p>
                  <div className="mt-3 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View case study →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="mono-eyebrow mb-4">About-</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Engineering Intelligent Systems <span className="italic text-gold">and extracting</span> the insights that power them.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground">
            <p>
              I'm Kaushani — an aspiring AI/ML engineer based in Kolkata, India.
              I specialize in bridging the gap between raw data analytics and intelligent,
              predictive modeling.
            </p>
            <p>
              With a dual focus on analytical strategy and predictive modeling,
              I am equipped to handle everything from initial exploratory data analysis
              and preprocessing to final model deployment and evaluation.
            </p>
            <p className="text-foreground">
              I believe good data science should never look complicated;
              it should feel effortless, intuitive, and driven by logic.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="mono-eyebrow mb-4">Education</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Where I <span className="italic text-gold">studied</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {[
              {
                school: "Techno India University, Kolkata",
                degree: "B.Tech in Computer Science & Engineering",
                years: "2022 — 2026",
                note: "Focused on web-development, Data-analysis, Machine learning, and applied mathematics.",
              },
              {
                school: "St. Jude's High School, Madhyamgram",
                degree: "Higher Secondary (ISC) — Science",
                years: "2020 — 2022",
                note: "Head of the School's Art club. House Vice-Captain.",
              },
            ].map((e) => (
              <div key={e.school} className="border-t border-border pt-6 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                <div>
                  <h3 className="font-serif text-2xl">{e.school}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{e.degree}</p>
                  <p className="text-muted-foreground text-sm mt-2 max-w-md">{e.note}</p>
                </div>
                <span className="mono-eyebrow text-gold whitespace-nowrap">{e.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="mono-eyebrow mb-4">Languages</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              My <span className="italic text-gold">Linguistic</span> Toolkit-
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 grid grid-cols-2 gap-px bg-border">
            {[
              { lang: "English", level: "Fluent, (IELTS-7.5)" },
              { lang: "Bengali", level: "Native" },
              { lang: "Hindi", level: "Fluent" },
              { lang: "German", level: "Intermediate, (A2-Goethe)" },
              { lang: "Japanese", level: "Basic" },
            ].map((l) => (
              <div key={l.lang} className="bg-background p-8">
                <div className="font-serif text-2xl">{l.lang}</div>
                <div className="mono-eyebrow text-gold mt-2">{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft grid */}
      <section id="craft" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28">
          <div className="mono-eyebrow mb-4">Skills-</div>
          <h2 className="font-serif text-5xl md:text-6xl mb-16">
            What I do <span className="italic text-gold">well</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { n: "01", t: "Frontend Development", d: "HTML, CSS, ReactJS, TailWindCSS" },
              { n: "02", t: "Backend Engineering", d: "Node.js, Express.js" },
              { n: "03", t: "Languages", d: "C, C++, JavaScript, Python" },
              { n: "04", t: "Libraries", d: " React Router, NumPy, Pandas, Matplotlib, Scikit-Learn" },
              { n: "05", t: "Databases", d: " SQL, MongoDB" },
              { n: "06", t: "Tools/Deployment", d: "Kaggle, Git, GitHub, Jupyter Notebook" },
            ].map((c) => (
              <div key={c.n} className="bg-background p-10 hover:bg-card transition-colors">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif italic text-gold text-2xl">{c.n}</span>
                  <h3 className="font-serif text-2xl">{c.t}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-32 text-center">
          <div className="mono-eyebrow mb-6">CONTACT DETAILS-</div>
          <h2 className="font-serif text-6xl md:text-8xl leading-[0.95]">
            From patterns, <br />
            <span className="italic text-gold">to production.</span>.
          </h2>
          <a
            href="mailto:senkaushani6@gmail.com"
            className="inline-block mt-12 font-serif italic text-3xl md:text-4xl gold-underline hover:text-gold transition-colors"
          >
            senkaushani6@gmail.com
          </a>
          <div className="mt-16 flex justify-center gap-8 text-sm text-muted-foreground">
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
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-4">
          <span>© 2026 Kaushani Sen.</span>
          <span className="mono-eyebrow">Let's Collaborate </span>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
