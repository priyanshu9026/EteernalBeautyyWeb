import React from "react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/site";

const Testimonials = () => (
  <section
    aria-labelledby="testimonials-heading"
    className="paper bg-cream py-24 sm:py-28 lg:py-36"
  >
    <div className="shell">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>In their words</Eyebrow>
          <h2
            id="testimonials-heading"
            className="mt-7 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-ink"
          >
            Three brides, three
            <span className="italic"> very</span> different mornings.
          </h2>
        </Reveal>
      </div>

      <ul className="mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-3 md:gap-x-10 lg:mt-20 lg:gap-x-16">
        {testimonials.map(({ quote, name, detail }, i) => (
          <Reveal
            as="li"
            key={name}
            delay={i * 0.12}
            className={`border-t border-gold/40 pt-8 ${
              i === 1 ? "md:mt-14" : i === 2 ? "md:mt-6" : ""
            }`}
          >
            <figure>
              <span
                aria-hidden="true"
                className="block font-display text-5xl leading-none text-gold/50"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 font-display text-[1.45rem] font-light leading-[1.45] text-ink sm:text-[1.6rem]">
                {quote}
              </blockquote>
              <figcaption className="mt-7">
                <p className="label text-ink">{name}</p>
                <p className="mt-2 font-sans text-sm text-ink-muted">
                  {detail}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Testimonials;
