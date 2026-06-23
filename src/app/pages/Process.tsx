import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">{p.badge}</p>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <h1
            className="text-5xl tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
          >
            {p.h1}
          </h1>
          <p className="text-sm text-muted-foreground self-end pb-1">{p.sub}</p>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        {p.steps.map(({ num, title, desc }, idx) => (
          <div
            key={num}
            className={`grid md:grid-cols-[80px_1fr] gap-8 py-12 ${
              idx < p.steps.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-sm h-fit w-fit"
              style={{ backgroundColor: "#dcfce7", color: "#16a34a", fontFamily: "'Outfit', sans-serif" }}
            >
              {num}
            </span>
            <div>
              <h2
                className="text-2xl font-bold mb-2 tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
              >
                {title}
              </h2>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Principles ── */}
      <section className="py-16 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {p.principles.map(({ title, desc }) => (
            <div key={title} className="bg-foreground p-8">
              <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {title}
              </h3>
              <p className="text-xs opacity-55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-lg font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Ready to start?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
        >
          Get in touch <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}
