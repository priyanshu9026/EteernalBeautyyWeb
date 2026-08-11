import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import PageIntro from "../../components/ui/PageIntro";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import GoldMarquee from "../../components/ui/GoldMarquee";
import ContactCta from "../../components/ui/ContactCta";
import { serviceGroups } from "../../data/site";

const INCLUDED = [
  "A written quote before anything is confirmed",
  "Skin prep, primer and a shade test on the day",
  "Lashes, setting spray and a small touch-up kit to carry",
  "Draping and hair included on all bridal bookings",
];

const Services = () => (
  <>
    <PageIntro
      eyebrow="Services & pricing"
      index="II"
      title={
        <>
          The
          <span className="italic"> full</span> list
        </>
      }
      lead="Everything the studio offers, with indicative starting prices. Final quotes depend on the look, the number of faces and travel — you will always have the figure in writing before you commit."
    />

    <div className="paper bg-cream">
      <div className="shell">
        {serviceGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="border-b border-ink/10 py-20 last:border-b-0 sm:py-24 lg:py-28"
          >
            <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
              {/* Image and intro swap sides between groups. */}
              <div
                className={`col-span-12 lg:col-span-4 ${
                  groupIndex % 2 === 1 ? "lg:order-2 lg:col-start-9" : ""
                }`}
              >
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-4xl font-light text-gold">
                      {group.numeral}
                    </span>
                    <h2
                      id={`${group.id}-heading`}
                      className="text-[clamp(2.1rem,4vw,3.25rem)] leading-none text-ink"
                    >
                      {group.title}
                    </h2>
                  </div>
                  <p className="copy mt-6">{group.blurb}</p>

                  <div className="group mt-9 overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </Reveal>
              </div>

              <div
                className={`col-span-12 lg:col-span-7 ${
                  groupIndex % 2 === 1
                    ? "lg:order-1 lg:col-start-1"
                    : "lg:col-start-6"
                }`}
              >
                <dl>
                  {group.items.map((item, i) => (
                    <Reveal
                      key={item.name}
                      delay={i * 0.06}
                      className="grid grid-cols-12 items-start gap-x-4 gap-y-2 border-b border-gold/30 py-7 first:border-t"
                    >
                      <dt className="col-span-12 sm:col-span-7">
                        <span className="block font-display text-[1.6rem] leading-snug text-ink sm:text-[1.75rem]">
                          {item.name}
                        </span>
                        <span className="copy mt-2 block text-[15px] sm:text-[15px]">
                          {item.description}
                        </span>
                      </dt>
                      <dd className="col-span-6 sm:col-span-3 sm:text-right">
                        <span className="label block text-ink-muted/60">
                          Duration
                        </span>
                        <span className="mt-1.5 block font-sans text-[15px] text-ink-muted">
                          {item.duration}
                        </span>
                      </dd>
                      <dd className="col-span-6 sm:col-span-2 sm:text-right">
                        <span className="label block text-ink-muted/60">
                          From
                        </span>
                        <span className="mt-1.5 block font-display text-2xl text-ink">
                          {item.price}
                        </span>
                      </dd>
                    </Reveal>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>

    <GoldMarquee />

    <section
      aria-labelledby="included-heading"
      className="bg-cream-dark py-24 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <Eyebrow>Before you book</Eyebrow>
              <h2
                id="included-heading"
                className="mt-7 text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.06] text-ink"
              >
                What every price
                <span className="italic"> already</span> includes.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul>
              {INCLUDED.map((line, i) => (
                <Reveal
                  as="li"
                  key={line}
                  delay={i * 0.07}
                  className="flex items-start gap-5 border-b border-gold/30 py-5 first:border-t"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                  />
                  <span className="font-sans text-[16px] leading-relaxed text-ink-muted">
                    {line}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <p className="copy mt-10 border-l border-gold pl-6 text-[15px] italic sm:text-[15px]">
                Prices are a starting point and vary by look, number of faces
                and travel. Venue and out-of-city bookings are quoted with
                travel and an early-start charge where the call time is before
                6&nbsp;am. Peak wedding dates are held against a 40% advance.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <Link to="/contact" className="btn btn-outline-ink mt-10">
                Ask for a quote
                <FiArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    <ContactCta
      eyebrow="Next step"
      title="Tell me the date and the look."
      body="Send your function dates, venue and a photograph of the outfit. I will come back with availability and an exact quote."
    />
  </>
);

export default Services;
