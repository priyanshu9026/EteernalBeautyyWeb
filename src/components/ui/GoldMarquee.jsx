import React from "react";
import { marqueeItems } from "../../data/site";

const Row = () => (
  <ul className="flex shrink-0 items-center">
    {marqueeItems.map((item) => (
      <li key={item} className="flex items-center">
        <span className="label px-7 text-gold-light sm:px-10">{item}</span>
        <span
          aria-hidden="true"
          className="h-1 w-1 rotate-45 bg-gold/70"
        />
      </li>
    ))}
  </ul>
);

/** Slow looping strip of service names. Freezes for reduced-motion users. */
const GoldMarquee = () => (
  <div className="on-ink overflow-hidden border-y border-gold/25 bg-ink py-4">
    <div
      aria-hidden="true"
      className="flex w-max animate-marquee motion-reduce:animate-none"
    >
      <Row />
      <Row />
    </div>
    <span className="sr-only">
      Services offered: {marqueeItems.join(", ")}.
    </span>
  </div>
);

export default GoldMarquee;
