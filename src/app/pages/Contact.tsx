import { useState } from "react";
import { Mail, Instagram, Facebook, Send } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* ── Header ── */}
      <section className="pt-20 pb-16 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">{c.badge}</p>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <h1
            className="text-5xl md:text-6xl tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}
          >
            {c.h1}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed self-end pb-1">{c.sub}</p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16">
          {/* Form */}
          <div>
            {sent ? (
              <div
                className="rounded-sm p-12 flex flex-col items-start gap-4"
                style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#22c55e" }}
                >
                  <Send size={18} color="#fff" />
                </div>
                <h2
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {c.successTitle}
                </h2>
                <p className="text-sm text-muted-foreground">{c.successMsg}</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="mt-2 text-xs underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">{c.formName}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">{c.formEmail}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">{c.formService}</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors text-foreground"
                  >
                    <option value="" disabled>Select a service…</option>
                    {c.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">{c.formMessage}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="We need a landing page for our new product launch…"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-foreground/85 transition-colors"
                >
                  {c.formCta} <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-10">
            {/* Email */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {c.infoLabel}
              </p>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors"
                  style={{ backgroundColor: "#f7f7f5" }}
                >
                  <Mail size={15} />
                </div>
                <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                  {c.email}
                </span>
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {c.followLabel}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/qokayqy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors"
                    style={{ backgroundColor: "#fff7f0" }}
                  >
                    <Instagram size={15} style={{ color: "#e1306c" }} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                    @qokayqy
                  </span>
                </a>

                <a
                  href="https://facebook.com/qokayqy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <Facebook size={15} style={{ color: "#1877f2" }} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                    QoKayqy
                  </span>
                </a>
              </div>
            </div>

            {/* Response note */}
            <div
              className="rounded-sm p-5 text-sm leading-relaxed text-muted-foreground"
              style={{ backgroundColor: "#f7f7f5", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              We respond to every inquiry within <strong className="text-foreground">24 hours</strong>, Monday–Saturday.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
