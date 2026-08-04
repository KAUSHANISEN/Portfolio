import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Kaushani Sen" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Kaushani Sen`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="font-serif text-xl italic">
            Kaushani<span className="text-gold">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <Link to="/" hash="work" className="hover:text-gold transition-colors">Work</Link>
            <Link to="/" hash="about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/" hash="contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
            ← Index
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img
          src={project.img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 pb-20 pt-40">
          <div className="mono-eyebrow mb-6">
            {project.tag} — {project.year}
          </div>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.9] tracking-tight">
            {project.title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="italic text-gold">{w}</span>
              ) : (
                <span key={i}>{w} </span>
              ),
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "Client", v: project.client },
            { k: "Timeline", v: project.timeline },
            { k: "Discipline", v: project.tag },
            { k: "Year", v: project.year },
          ].map((m) => (
            <div key={m.k}>
              <div className="mono-eyebrow mb-2">{m.k}</div>
              <div className="text-sm text-foreground/90">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="mono-eyebrow mb-4">Overview</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
            The <span className="italic text-gold">brief</span>, and what came of it.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground">
          {project.overview.map((para, i) => (
            <p key={i} className={i === project.overview.length - 1 ? "text-foreground" : ""}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Roles + Stack */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <div className="mono-eyebrow mb-6">Role</div>
            <ul className="space-y-4">
              {project.roles.map((r, i) => (
                <li key={r} className="flex items-baseline gap-6 border-b border-border pb-4">
                  <span className="font-serif italic text-gold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono-eyebrow mb-6">Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Project Links */}
{(project.githubUrl || project.demoUrl) && (
  <section className="border-t border-border">
    <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
      <div className="mono-eyebrow mb-4">Project Links</div>

      <div className="flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors"
          >
          GitHub Repository
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors"
          >
          Project Demo
          </a>
        )}
      </div>
    </div>
  </section>
)}

      

      {/* Gallery */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28">
          <div className="mono-eyebrow mb-4">Gallery</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">
            Selected <span className="italic text-gold">frames</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[240px]">
            <div className="md:col-span-4 md:row-span-2 relative overflow-hidden border border-border group">
              <img
                src={project.gallery[0]}
                alt={`${project.title} — frame 1`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden border border-border group">
              <img
                src={project.gallery[1]}
                alt={`${project.title} — frame 2`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden border border-border group">
              <img
                src={project.gallery[2]}
                alt={`${project.title} — frame 3`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="block group relative overflow-hidden"
        >
          <img
            src={next.img}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-32 text-center">
            <div className="mono-eyebrow mb-4">Next project</div>
            <h3 className="font-serif text-6xl md:text-8xl group-hover:text-gold transition-colors">
              {next.title} <span className="italic">→</span>
            </h3>
          </div>
        </Link>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-4">
          <span>© 2026 Kaushani Sen.</span>
          <Link to="/" className="mono-eyebrow hover:text-gold transition-colors">
            Back to index
          </Link>
        </div>
      </footer>
    </div>
  );
}