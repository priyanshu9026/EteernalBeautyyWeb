import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { signatureServices } from "../../data/site";

const ServicesPreview = () => (
  <section
    aria-labelledby="services-heading"
    className="bg-cream-dark py-24 sm:py-28 lg:py-36"
  >
    <div className="shell">
      <div className="grid grid-cols-12 items-end gap-y-8">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <Eyebrow>What I do</Eyebrow>
            <h2
              id="services-heading"
              className="mt-7 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-ink"
            >
              Four things, done
              <span className="italic"> properly</span>.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3 lg:text-right">
          <Reveal delay={0.1}>
            <Link
              to="/services"
              className="link-underline label text-ink-muted hover:text-ink"
            >
              Full list &amp; pricing
            </Link>
          </Reveal>
        </div>
      </div>

      <hr className="rule mt-12 sm:mt-16" />

      <ol className="mt-4 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-x-8">
        {signatureServices.map((service, i) => (
          <Reveal
            as="li"
            key={service.numeral}
            delay={i * 0.09}
            className={i % 2 === 1 ? "lg:mt-20" : "lg:mt-4"}
          >
            <Link
              to="/services"
              className="group block focus-visible:outline-none"
            >
              <div className="flex items-baseline justify-between border-t border-gold/40 pt-5">
                <span className="font-display text-4xl font-light text-gold transition-opacity duration-500 group-hover:opacity-70">
                  {service.numeral}
                </span>
                <span className="label text-ink-muted/70">
                  from {service.from}
                </span>
              </div>

              <div className="mt-6 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>

              <h3 className="mt-6 flex items-center gap-2 text-2xl text-ink sm:text-[1.75rem]">
                <span className="link-underline">{service.title}</span>
                <FiArrowUpRight
                  aria-hidden="true"
                  size={16}
                  className="translate-y-0.5 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              </h3>
              <p className="copy mt-3 text-[15px] sm:text-[15px]">
                {service.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ServicesPreview;
