import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Kaushani Sen" },
      { name: "description", content: "Selected engineering work by Kaushani Sen." },
      { property: "og:title", content: "Work — Kaushani Sen" },
      { property: "og:description", content: "Selected engineering work by Kaushani Sen." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-28">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Link to="/" className="mono-eyebrow text-muted-foreground hover:text-gold">← Home</Link>
        <div className="flex items-end justify-between mt-8 mb-16">
          <div>
            <div className="mono-eyebrow mb-4">Selected Work</div>
            <h1 className="font-serif text-5xl md:text-7xl">
              Solutions <span className="italic text-gold">delivered</span>.
            </h1>
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
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs">
                  <span className="mono-eyebrow">{p.tag}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">{p.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}