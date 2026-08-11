import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const STRIP = [
  {
    src: "/assets/bridal-02.jpg",
    alt: "Bride in profile with a peach embroidered dupatta and jasmine in her hair",
    span: "lg:col-span-3",
    offset: "lg:translate-y-0",
    height: "lg:h-[clamp(300px,26vw,400px)]",
  },
  {
    src: "/assets/party-01.jpg",
    alt: "Smoky bronze party makeup with gold statement earrings on a dark backdrop",
    span: "lg:col-span-2",
    offset: "lg:translate-y-16",
    height: "lg:h-[clamp(240px,21vw,320px)]",
  },
  {
    src: "/assets/draping-01.jpg",
    alt: "Ivory silk saree with a gold zari border being pleated and draped",
    span: "lg:col-span-3",
    offset: "lg:-translate-y-8",
    height: "lg:h-[clamp(340px,30vw,460px)]",
  },
  {
    src: "/assets/party-02.jpg",
    alt: "Engagement guest in soft glam makeup and a mint embroidered outfit",
    span: "lg:col-span-2",
    offset: "lg:translate-y-10",
    height: "lg:h-[clamp(260px,23vw,350px)]",
  },
  {
    src: "/assets/bridal-01.jpg",
    alt: "Bride in a red and gold lehenga with kundan jewellery and warm bridal makeup",
    span: "lg:col-span-2",
    offset: "lg:translate-y-24",
    height: "lg:h-[clamp(230px,20vw,300px)]",
  },
];

const GalleryTeaser = () => (
  <section
    aria-labelledby="gallery-teaser-heading"
    className="overflow-hidden bg-cream-dark py-24 sm:py-28 lg:py-36"
  >
    <div className="shell">
      <div className="grid grid-cols-12 items-end gap-y-6">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <Eyebrow>Recent work</Eyebrow>
            <h2
              id="gallery-teaser-heading"
              className="mt-7 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-ink"
            >
              A page from the
              <span className="italic"> lookbook</span>.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3 lg:text-right">
          <Reveal delay={0.1}>
            <Link to="/gallery" className="btn btn-outline-ink">
              Open the gallery
              <FiArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>

    {/* Scrolls horizontally on small screens, staggers on desktop. */}
    <Reveal
      delay={0.15}
      className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 sm:px-8 lg:mt-24 lg:grid lg:grid-cols-12 lg:items-start lg:gap-5 lg:overflow-visible lg:px-12 lg:pb-16"
    >
      {STRIP.map(({ src, alt, span, offset, height }) => (
        <figure
          key={src}
          className={`group w-[68vw] shrink-0 snap-start overflow-hidden sm:w-[42vw] lg:w-auto ${span} ${offset}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05] lg:aspect-auto ${height}`}
          />
        </figure>
      ))}
    </Reveal>
  </section>
);

export default GalleryTeaser;
