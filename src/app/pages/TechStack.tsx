import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const CATEGORY_COLORS: Record<string, { bg: string; dot: string }> = {
  Frontend:    { bg: "#f0fdf4", dot: "#22c55e" },
  Backend:     { bg: "#f8fafc", dot: "#475569" },
  Database:    { bg: "#fefce8", dot: "#ca8a04" },
  "Automation & Bots": { bg: "#fdf4ff", dot: "#a21caf" },
  "DevOps & Cloud":    { bg: "#eff6ff", dot: "#2563eb" },
  "Design & CMS":      { bg: "#fff7ed", dot: "#ea580c" },
};

const defaultColor = { bg: "#f0fdf4", dot: "#22c55e" };

export default function TechStack() {
  const { t } = useLang();
  const ts = t.techStack;

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">{ts.badge}</p>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <h1
            className="text-5xl tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
          >
            {ts.h1}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed self-end pb-1">{ts.sub}</p>
        </div>
      </section>

      {/* ── Categories grid ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ts.categories.map(({ name, techs }) => {
            const color = CATEGORY_COLORS[name] ?? defaultColor;
            return (
              <div
                key={name}
                className="border border-border rounded-sm p-7 hover:border-foreground/20 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color.dot }} />
                  <h2
                    className="text-sm font-bold tracking-wide uppercase"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {name}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-sm font-medium border border-border transition-colors duration-150 group-hover:border-foreground/15"
                      style={{ backgroundColor: color.bg }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Note ── */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div
          className="rounded-sm p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
        >
          <div className="max-w-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">{ts.note}</p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
          >
            {ts.ctaLabel} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
