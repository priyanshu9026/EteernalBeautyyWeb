import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";

const WORDMARK = "text-[clamp(3.25rem,8vw,7rem)] leading-[0.85] tracking-[-0.015em]";

const PLATES = [
  {
    src: "/assets/bridal-01.jpg",
    alt: "Bride in a red and gold lehenga with a kundan maang tikka and warm bridal makeup",
    wrap: "col-span-7 sm:col-span-5 lg:col-span-4 lg:translate-y-16",
    height: "lg:h-[clamp(260px,27vw,380px)]",
    position: "object-[50%_30%]",
    delay: "0ms",
    framed: true,
  },
  {
    src: "/assets/editorial-01.jpg",
    alt: "Editorial beauty portrait with sculpted bronze makeup on a warm beige backdrop",
    wrap: "col-span-5 sm:col-span-4 lg:col-span-5 lg:-translate-y-2",
    height: "lg:h-[clamp(300px,33vw,470px)]",
    position: "object-center",
    delay: "140ms",
    framed: false,
  },
  {
    src: "/assets/hair-01.jpg",
    alt: "Braided bridal bun dressed with baby's breath and a fine gold hair chain",
    wrap: "hidden sm:block sm:col-span-3 lg:col-span-3 lg:translate-y-28",
    height: "lg:h-[clamp(220px,23vw,320px)]",
    position: "object-[50%_18%]",
    delay: "280ms",
    framed: false,
  },
];

const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    className="paper relative overflow-hidden bg-cream pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44"
  >
    {/* Rotated masthead rail running up the left edge. */}
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-5 hidden w-6 flex-col items-center justify-center gap-6 xl:flex"
    >
      <span className="w-px flex-1 bg-gradient-to-b from-transparent to-gold/50" />
      <span className="label vertical-rl rotate-180 whitespace-nowrap text-gold">
        Lucknow · Bridal Atelier
      </span>
      <span className="w-px flex-1 bg-gradient-to-t from-transparent to-gold/50" />
    </div>

    <div className="shell xl:pl-20">
      <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-5">
          <p
            className="label flex items-center gap-4 text-gold opacity-0 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            Est. 2018 · Bangla Bazaar
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display font-light text-ink opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className={`block ${WORDMARK}`}>Eteernal</span>
            <span className="mt-1 flex items-center gap-4 sm:gap-6">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-gold sm:w-16"
              />
              <span className={`italic ${WORDMARK}`}>Beautyy</span>
            </span>
          </h1>

          <p
            className="copy mt-9 max-w-md opacity-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            Bridal and occasion makeup by{" "}
            <strong className="font-normal text-ink">
              Sanjoli Singh
            </strong>{" "}
            — skin matched honestly, built quietly, and made to hold from the
            first pheras to the last photograph.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            <Link to="/contact" className="btn btn-gold">
              Book a trial
            </Link>
            <Link to="/gallery" className="btn btn-outline-ink">
              See the work
              <FiArrowDownRight aria-hidden="true" size={15} />
            </Link>
          </div>

          <p
            className="label mt-12 text-ink-muted/70 opacity-0 animate-fade-up"
            style={{ animationDelay: "560ms" }}
          >
            Now booking the 2026–27 wedding season
          </p>
        </div>

        {/* Asymmetric trio, offset vertically and broken past the shell edge. */}
        <div className="col-span-12 lg:col-span-7 lg:-ml-8 lg:-mr-12">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
            {PLATES.map(({ src, alt, wrap, height, position, delay, framed }) => (
              <figure key={src} className={`group ${wrap}`}>
                {/* The reveal animation lives inside so it cannot clobber the
                    figure's layout offset. */}
                <div
                  className="relative overflow-hidden opacity-0 animate-fade-up"
                  style={{ animationDelay: delay }}
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="eager"
                    className={`aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] lg:aspect-auto ${position} ${height}`}
                  />
                  {framed ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-2 border border-cream/40"
                    />
                  ) : null}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
