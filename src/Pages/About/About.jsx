import React from "react";
import PageIntro from "../../components/ui/PageIntro";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import ContactCta from "../../components/ui/ContactCta";
import { credentials, stats, studio } from "../../data/site";

const PRINCIPLES = [
  {
    numeral: "01",
    title: "Match the skin, not the trend",
    body: "Foundation is mixed and tested on your jaw in daylight. No shade above your own, no grey cast in the group photographs, no surprises when the flash goes off.",
  },
  {
    numeral: "02",
    title: "Build it to survive the day",
    body: "Lucknow weddings are long and warm. Products are chosen for hour eight — sweat-resistant bases, sealed eyes, and a lip you can eat a paan with.",
  },
  {
    numeral: "03",
    title: "One bride at a time",
    body: "I do not run parallel chairs on a wedding morning. Your slot is yours, family looks are scheduled around it, and nobody gets rushed at the end.",
  },
];

const About = () => (
  <>
    <PageIntro
      eyebrow="The artist"
      index="I"
      title={
        <>
          Sanjoli
          <span className="italic"> Singh</span>
        </>
      }
      lead="Nine years behind the chair, four hundred-odd brides, and a small studio in Bangla Bazaar where every wedding morning still starts with a cup of chai and a shade test."
    />

    <section
      aria-labelledby="story-heading"
      className="paper bg-cream pb-24 pt-16 sm:pb-28 lg:pb-36 lg:pt-20"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal className="relative">
              <div className="group overflow-hidden">
                <img
                  src="/assets/artist-portrait.jpg"
                  alt="Sanjoli Singh standing at her makeup station in the Eteernal Beautyy studio"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-4 hidden h-40 w-40 border-b border-r border-gold/60 sm:block"
              />
              <p className="label mt-5 text-ink-muted/70">
                At the studio · Bangla Bazaar
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>How it started</Eyebrow>
              <h2
                id="story-heading"
                className="mt-7 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-ink"
              >
                I started doing makeup because nobody in my family would sit
                still for a photograph.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="copy mt-8">
                The first face I ever finished properly was my cousin&rsquo;s,
                the night before her mehndi in 2014, using a kit borrowed from
                a neighbour. It was not good. But she cried at the mirror, and
                I understood something that day about what this job actually
                is: it is not decoration, it is confidence handed over at a
                moment when a woman has very little of it left.
              </p>
              <p className="copy mt-5">
                I trained properly after that — Lakmé Academy here in Lucknow,
                then HD and airbrush certification with Kryolan in Delhi —
                because I did not want to be the artist who only knows one
                look. In 2018 I took the shop in S.L Complex at Bangla Bazaar
                and put my own name on it.
              </p>
              <p className="copy mt-5">
                Eight years later the studio is still deliberately small. Two
                chairs, one artist, a handful of students each season. It means
                I turn down work in December. It also means the bride who books
                me gets me, not somebody I sent.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-12 border-t border-gold/40 pt-8">
                {/* The single script accent on the page. */}
                <p className="font-script text-[2.75rem] leading-none text-ink sm:text-5xl">
                  Sanjoli
                </p>
                <p className="label mt-4 text-ink-muted/70">
                  {studio.artist} · Founder &amp; lead artist
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    <section aria-labelledby="stats-heading" className="on-ink bg-ink py-16 sm:py-20">
      <div className="shell">
        <h2 id="stats-heading" className="sr-only">
          Studio in numbers
        </h2>
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08} className="lg:px-8 lg:first:pl-0">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-[clamp(3rem,6vw,4.5rem)] font-light leading-none text-gold">
                  {value}
                </span>
                <span className="label mt-4 block text-cream/60">{label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <section
      aria-labelledby="philosophy-heading"
      className="bg-cream-dark py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>How I work</Eyebrow>
            <h2
              id="philosophy-heading"
              className="mt-7 text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-ink"
            >
              Three rules I do not
              <span className="italic"> bend</span>.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-10 lg:mt-20 lg:gap-x-16">
          {PRINCIPLES.map(({ numeral, title, body }, i) => (
            <Reveal
              as="li"
              key={numeral}
              delay={i * 0.1}
              className="border-t border-gold/40 pt-7"
            >
              <span className="font-display text-4xl font-light text-gold">
                {numeral}
              </span>
              <h3 className="mt-5 text-2xl leading-snug text-ink">{title}</h3>
              <p className="copy mt-4 text-[15px] sm:text-[15px]">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <section
      aria-labelledby="training-heading"
      className="paper bg-cream py-24 sm:py-28 lg:py-36"
    >
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <Eyebrow>Training &amp; milestones</Eyebrow>
              <h2
                id="training-heading"
                className="mt-7 text-[clamp(2rem,3.5vw,3rem)] leading-[1.06] text-ink"
              >
                Where the technique came from.
              </h2>
              <p className="copy mt-6">
                Certifications matter less than repetition, but they are the
                reason I can work on any skin type, any camera and any light.
              </p>
            </Reveal>
          </div>

          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {credentials.map(({ year, title, place }, i) => (
              <Reveal
                as="li"
                key={year}
                delay={i * 0.08}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-gold/30 py-7 first:border-t"
              >
                <span className="col-span-3 font-display text-2xl text-gold sm:col-span-2 sm:text-3xl">
                  {year}
                </span>
                <span className="col-span-9 sm:col-span-10">
                  <span className="block font-display text-xl text-ink sm:text-2xl">
                    {title}
                  </span>
                  <span className="mt-1.5 block font-sans text-sm text-ink-muted">
                    {place}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <ContactCta
      eyebrow="Work with me"
      title="Come and sit in the chair."
      body="Trials are booked on weekday afternoons at the studio. Bring your outfit photographs and your jewellery if you have it — we will work the look around them."
    />
  </>
);

export default About;
