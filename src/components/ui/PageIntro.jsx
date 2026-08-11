import React from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

/** Shared masthead for the inner routes. Cream, so the navbar stays legible. */
const PageIntro = ({ eyebrow, title, lead, index }) => (
  <header className="paper relative bg-cream pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
    <div className="shell">
      <div className="grid grid-cols-12 items-end gap-y-8">
        <div className="col-span-12 lg:col-span-8">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-7 text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.01em] text-ink">
              {title}
            </h1>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Reveal delay={0.12}>
            {index ? (
              <span
                aria-hidden="true"
                className="mb-4 hidden font-display text-6xl font-light text-gold/40 lg:block lg:text-right"
              >
                {index}
              </span>
            ) : null}
            {lead ? <p className="copy">{lead}</p> : null}
          </Reveal>
        </div>
      </div>

      <hr className="rule mt-14 sm:mt-20" />
    </div>
  </header>
);

export default PageIntro;
