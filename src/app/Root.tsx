import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLang, Lang } from "./context/LanguageContext";

const NAV_ROUTES = [
  { key: "home" as const, path: "/" },
  { key: "process" as const, path: "/process" },
  { key: "techStack" as const, path: "/tech-stack" },
  { key: "about" as const, path: "/about" },
  { key: "contact" as const, path: "/contact" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Qo<span style={{ color: "#22c55e" }}>Kayqy</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ROUTES.map(({ key, path }) => (
              <NavLink
                key={key}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {t.nav[key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center border border-border rounded-sm overflow-hidden text-xs font-semibold">
              {(["en", "am"] as Lang[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 transition-colors duration-150 ${
                    lang === l
                      ? "bg-foreground text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } ${i === 0 ? "" : "border-l border-border"}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <NavLink
              to="/contact"
              className="flex items-center gap-1.5 bg-foreground text-primary-foreground text-sm px-4 py-2 rounded-sm font-medium hover:bg-foreground/85 transition-colors duration-200"
            >
              {t.nav.cta} <ArrowRight size={14} />
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 flex flex-col gap-4">
            {NAV_ROUTES.map(({ key, path }) => (
              <NavLink
                key={key}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[key]}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center border border-border rounded-sm overflow-hidden text-xs font-semibold">
                {(["en", "am"] as Lang[]).map((l, i) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1.5 transition-colors ${
                      lang === l ? "bg-foreground text-primary-foreground" : "text-muted-foreground"
                    } ${i === 0 ? "" : "border-l border-border"}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <NavLink
                to="/contact"
                className="flex items-center gap-1.5 bg-foreground text-primary-foreground text-sm px-4 py-2 rounded-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.cta} <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span
              className="text-lg font-extrabold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            >
              Qo<span style={{ color: "#22c55e" }}>Kayqy</span>
            </span>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {NAV_ROUTES.map(({ key, path }) => (
              <NavLink
                key={key}
                to={path}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav[key]}
              </NavLink>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
