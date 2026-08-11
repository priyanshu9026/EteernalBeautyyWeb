import React from "react";
import { Link } from "react-router-dom";
import Eyebrow from "../../components/ui/Eyebrow";
import { navLinks } from "../../data/site";

const NotFound = () => (
  <section className="paper flex min-h-[80vh] items-center bg-cream pb-24 pt-40">
    <div className="shell">
      <div className="max-w-2xl">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] text-ink">
          This page has been
          <span className="italic"> touched up</span> away.
        </h1>
        <p className="copy mt-8">
          The link you followed does not exist any more. Everything on the site
          is one of these five pages:
        </p>

        <ul className="mt-10 border-t border-gold/40">
          {navLinks.map(({ label, to }, i) => (
            <li key={to} className="border-b border-gold/30">
              <Link
                to={to}
                className="flex items-baseline gap-5 py-5 font-display text-2xl text-ink transition-colors duration-300 hover:text-gold sm:text-3xl"
              >
                <span className="label text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default NotFound;
