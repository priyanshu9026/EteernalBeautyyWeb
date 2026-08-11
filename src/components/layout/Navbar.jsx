import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { navLinks, studio } from "../../data/site";

const Wordmark = ({ tone }) => (
  <Link
    to="/"
    className="group flex items-center gap-3"
    aria-label={`${studio.fullName} — home`}
  >
    <img
      src="/assets/logo.png"
      alt=""
      width="150"
      height="108"
      className="h-9 w-auto sm:h-10"
    />
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-[1.35rem] tracking-[0.02em] transition-colors duration-500 sm:text-2xl ${tone}`}
      >
        Eteernal Beautyy
      </span>
      <span className="label mt-1 text-[9px] text-gold sm:text-[10px]">
        Makeup Studio · Lucknow
      </span>
    </span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const barTone = solid
    ? "border-gold/30 bg-ink/95 backdrop-blur-sm"
    : "border-transparent bg-transparent";
  const textTone = solid ? "text-cream" : "text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${barTone} ${
          solid ? "on-ink" : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex items-center justify-between py-4 lg:py-5"
        >
          <Wordmark tone={textTone} />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `label relative py-2 transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-[width] after:duration-500 hover:text-gold ${textTone} ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full focus-visible:after:w-full"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={studio.phoneHref}
              className={`hidden items-center gap-2.5 border px-5 py-3 transition-colors duration-300 md:inline-flex ${
                solid
                  ? "border-gold/50 text-gold hover:bg-gold hover:text-ink"
                  : "border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream"
              }`}
            >
              <FiPhone aria-hidden="true" className="text-sm" />
              <span className="label">{studio.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`-mr-2 p-2 transition-colors duration-300 lg:hidden ${textTone} hover:text-gold`}
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="on-ink fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              aria-label="Mobile"
              className="shell flex flex-1 flex-col justify-center py-28"
            >
              <ul className="space-y-1">
                {navLinks.map(({ label, to }, i) => (
                  <li key={to} className="border-b border-cream/10">
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className={({ isActive }) =>
                        `flex items-baseline gap-5 py-5 font-display text-4xl transition-colors duration-300 sm:text-5xl ${
                          isActive ? "text-gold" : "text-cream hover:text-gold"
                        }`
                      }
                    >
                      <span className="label text-[10px] text-gold/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-3">
                <a
                  href={studio.phoneHref}
                  className="label block text-gold hover:text-gold-light"
                >
                  {studio.phoneDisplay}
                </a>
                <a
                  href={`mailto:${studio.email}`}
                  className="block font-sans text-sm text-cream/70 hover:text-cream"
                >
                  {studio.email}
                </a>
                <p className="max-w-xs pt-3 font-sans text-sm leading-relaxed text-cream/50">
                  {studio.addressLines.join(", ")}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
