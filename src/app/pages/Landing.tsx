import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Globe, Bot, Zap } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const SERVICE_ICONS = [Globe, Bot, Zap];

function CyclingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className="block transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        background: "linear-gradient(90deg, #22c55e 0%, #6ee7b7 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        paddingBottom: "0.5em",
      }}
    >
      {words[index]}
    </span>
  );
}

export default function Landing() {
  const { t } = useLang();
  const l = t.landing;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-24 pb-28 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              className="text-5xl font-extrabold leading-[1.0] tracking-tight mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.035em"  }}
            >
              {l.line1}
              <br />
              <CyclingWord words={l.cycleWords} />
            </h1>
            <p className="text-base text-muted-foreground mb-10 max-w-sm">{l.sub}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
              >
                {l.cta1} <ArrowRight size={15} />
              </Link>
              <Link
                to="/tech-stack"
                className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-sm border border-border hover:border-foreground/30 transition-colors"
              >
                {l.cta2}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            {l.stats.map((s) => (
              <div
                key={s.label}
                className="border border-border rounded-sm px-6 py-7 flex flex-col gap-1"
              >
                <span
                  className="text-4xl font-extrabold"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">
            {l.servicesLabel}
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {l.services.map(({ title, desc, tags }, idx) => {
              const Icon = SERVICE_ICONS[idx];
              return (
                <div key={title} className="bg-background p-8 hover:bg-card transition-colors duration-200">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Icon size={16} style={{ color: "#16a34a" }} />
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-sm border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-sm px-12 py-14 relative overflow-hidden"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-25 blur-3xl"
              style={{ backgroundColor: "#22c55e" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h2
                  className="text-3xl font-extrabold tracking-tight mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.025em" }}
                >
                  {l.ctaBannerH2}
                </h2>
                <p className="text-sm text-muted-foreground">{l.ctaBannerSub}</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
              >
                {l.ctaEmail} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
