import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Kaushani Sen" },
      { name: "description", content: "Academic background of Kaushani Sen." },
      { property: "og:title", content: "Education — Kaushani Sen" },
      { property: "og:description", content: "Academic background of Kaushani Sen." },
    ],
  }),
  component: EducationPage,
});

const education = [
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
];

function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-28">
      <section className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-12 mb-8">
          <Link to="/" className="mono-eyebrow text-muted-foreground hover:text-gold">← Home</Link>
        </div>
        <div className="md:col-span-4">
          <div className="mono-eyebrow mb-4">Education</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            Where I <span className="italic text-gold">studied</span>.
          </h1>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-10">
          {education.map((e) => (
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
      </section>
    </div>
  );
}