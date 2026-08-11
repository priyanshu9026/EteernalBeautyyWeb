import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const StudioIntro = () => (
  <section
    aria-labelledby="studio-heading"
    className="paper bg-cream py-24 sm:py-28 lg:py-36"
  >
    <div className="shell">
      <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-16">
        {/* Overlapping collage — the small plate sits over the large one. */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative">
            <Reveal className="group relative w-[82%] overflow-hidden">
              <img
                src="/assets/detail-mehndi.jpg"
                alt="Bridal hands with fresh mehndi resting on an ivory embroidered lehenga"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </Reveal>

            <Reveal
              delay={0.18}
              className="group absolute -bottom-12 right-0 w-[46%] overflow-hidden shadow-lift sm:-bottom-16"
            >
              <img
                src="/assets/studio-detail.jpg"
                alt="Brushes, a bronze eyeshadow palette and a gold lipstick on the studio vanity"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 border border-cream/40"
              />
            </Reveal>

            <span
              aria-hidden="true"
              className="absolute -left-4 top-6 hidden h-32 w-px bg-gold/50 lg:block"
            />
          </div>
        </div>

        <div className="col-span-12 pt-16 lg:col-span-6 lg:pt-0">
          <Reveal>
            <Eyebrow>Welcome to my studio</Eyebrow>
            <h2
              id="studio-heading"
              className="mt-7 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-ink"
            >
              Makeup that looks like
              <span className="italic"> you</span>, on the loudest day of your
              life.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="copy mt-8">
              Eteernal Beautyy is a two-chair studio in Bangla Bazaar. There is
              no assembly line here — one bride at a time, one trial before the
              day, and a base shade mixed to your actual skin rather than three
              tones above it.
            </p>
            <p className="copy mt-5">
              I work the way a Lucknow wedding actually runs: early starts,
              long hours, heat, hugs and a hundred photographs. Everything is
              chosen for how it holds after hour eight, not how it looks in the
              first five minutes.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/about" className="btn btn-outline-ink">
                Meet Sanjoli
                <FiArrowUpRight aria-hidden="true" size={15} />
              </Link>
              <Link
                to="/services"
                className="link-underline label text-ink-muted hover:text-ink"
              >
                Services &amp; pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default StudioIntro;
