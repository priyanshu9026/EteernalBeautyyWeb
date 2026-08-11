import React, { useMemo, useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import PageIntro from "../../components/ui/PageIntro";
import Reveal from "../../components/ui/Reveal";
import Lightbox from "../../components/ui/Lightbox";
import ContactCta from "../../components/ui/ContactCta";
import { galleryFilters, galleryImages } from "../../data/site";

const Plate = ({ image, position, onOpen }) => {
  const [status, setStatus] = useState("loading");

  return (
    <li className="mb-5 break-inside-avoid sm:mb-6">
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden text-left"
        aria-label={`Enlarge photograph: ${image.caption}`}
      >
        {status === "loading" && (
          <span
            aria-hidden="true"
            className="block w-full animate-pulse bg-cream-dark"
            style={{ aspectRatio: image.orientation === "landscape" ? "4 / 3" : "3 / 4" }}
          />
        )}

        {status === "error" ? (
          <span className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 border border-ink/10 bg-cream-dark px-6 text-center">
            <span className="label text-ink-muted/60">Image unavailable</span>
            <span className="font-display text-lg text-ink-muted">
              {image.caption}
            </span>
          </span>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={`w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
              status === "loading" ? "hidden" : "block"
            }`}
          />
        )}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span>
            <span className="label block text-gold">{image.category}</span>
            <span className="mt-1.5 block font-display text-lg text-cream">
              {image.caption}
            </span>
          </span>
          <FiMaximize2 className="shrink-0 text-cream" size={18} />
        </span>

        <span
          aria-hidden="true"
          className="label absolute left-4 top-4 text-cream mix-blend-difference"
        >
          {position}
        </span>
      </button>
    </li>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const visible = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter),
    [filter]
  );

  const move = (step) =>
    setOpenIndex((current) =>
      current === null ? null : (current + step + visible.length) % visible.length
    );

  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        index="III"
        title={
          <>
            The
            <span className="italic"> lookbook</span>
          </>
        }
        lead="Brides, party looks and portfolio work photographed at the studio and on location across Lucknow. Every face here belongs to a real client."
      />

      <section aria-labelledby="gallery-heading" className="paper bg-cream pb-24 sm:pb-28 lg:pb-36">
        <h2 id="gallery-heading" className="sr-only">
          Photographs
        </h2>

        <div className="shell">
          <div className="sticky top-[72px] z-20 -mx-6 mb-12 bg-cream/95 px-6 py-4 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:top-[84px] lg:mb-16">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {galleryFilters.map((option) => {
                const active = option === filter;
                const count =
                  option === "All"
                    ? galleryImages.length
                    : galleryImages.filter((i) => i.category === option).length;

                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        setFilter(option);
                        setOpenIndex(null);
                      }}
                      aria-pressed={active}
                      className={`label border px-5 py-3 transition-colors duration-300 ${
                        active
                          ? "border-gold bg-gold text-ink"
                          : "border-ink/15 text-ink-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {option}
                      <span
                        className={`ml-2 ${
                          active ? "text-ink/60" : "text-ink-muted/50"
                        }`}
                      >
                        {String(count).padStart(2, "0")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {visible.length === 0 ? (
            <div className="border-y border-gold/30 py-24 text-center">
              <p className="font-display text-3xl text-ink">
                Nothing filed under {filter} yet.
              </p>
              <p className="copy mx-auto mt-4">
                New work goes up after every wedding season. Try another
                category, or ask to see recent photographs directly.
              </p>
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="btn btn-outline-ink mt-9"
              >
                Show everything
              </button>
            </div>
          ) : (
            <Reveal
              as="ul"
              key={filter}
              amount={0.02}
              className="columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3"
            >
              {visible.map((image, i) => (
                <Plate
                  key={`${image.src}-${i}`}
                  image={image}
                  position={String(i + 1).padStart(2, "0")}
                  onOpen={() => setOpenIndex(i)}
                />
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <Lightbox
        images={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onPrev={() => move(-1)}
        onNext={() => move(1)}
      />

      <ContactCta
        eyebrow="Like what you see?"
        title="Your face could be the next one here."
        body="Trials run on weekday afternoons at the Bangla Bazaar studio. Bring reference photographs — including the ones you dislike, they help just as much."
      />
    </>
  );
};

export default Gallery;
