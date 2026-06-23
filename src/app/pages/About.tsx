import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">{a.badge}</p>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <h1
            className="text-5xl font-extrabold tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
          >
            {a.h1}
          </h1>
          <p className="text-sm text-muted-foreground self-end pb-1">{a.sub}</p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="text-base max-w-2xl leading-relaxed">{a.mission}</p>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">{a.valuesLabel}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {a.values.map(({ title, desc }) => (
            <div key={title} className="bg-background p-7 hover:bg-secondary transition-colors">
              <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-16 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3">
          {a.why.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={14} style={{ color: "#22c55e" }} />
              <span className="text-sm opacity-80">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-lg font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Let{"'"}s work together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
        >
          {a.ctaLabel} <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}
