import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const SignatureBand = () => (
  <section
    aria-labelledby="signature-heading"
    className="on-ink relative isolate overflow-hidden bg-ink"
  >
    <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[60%]">
      <img
        src="/assets/bridal-feature.jpg"
        alt="Bride in a deep maroon embroidered veil and kundan jewellery, lit by a single warm light"
        loading="lazy"
        className="h-full w-full object-cover object-[62%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45 lg:via-ink/55 lg:to-transparent"
      />
    </div>

    <div className="shell py-28 sm:py-32 lg:py-44">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow tone="cream">The signature bridal look</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote
            id="signature-heading"
            className="mt-9 font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-light italic leading-[1.16] text-cream"
          >
            &ldquo;A bride should catch herself in a mirror at midnight and
            still recognise the face looking back.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-gold" />
            <p className="label text-gold">Sanjoli Singh</p>
          </div>

          <p className="copy-invert mt-8">
            The wedding-day booking is the whole morning: skin prep, a base
            mixed and tested on your jaw in daylight, HD or airbrush depending
            on your venue&rsquo;s cameras, hair set with pins that actually
            hold, and the dupatta pinned last so nothing shifts when you sit.
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-6 border-t border-cream/15 pt-8">
            {[
              ["From", "₹18,000"],
              ["Duration", "About 3 hours"],
              ["Includes", "Makeup, hair & draping"],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="label text-cream/45">{term}</dt>
                <dd className="mt-2 font-display text-2xl text-cream">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <Link to="/services" className="btn btn-outline-cream mt-10">
            See what is included
            <FiArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default SignatureBand;
