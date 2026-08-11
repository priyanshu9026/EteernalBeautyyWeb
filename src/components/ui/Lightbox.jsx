import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

/** Full-screen image viewer with keyboard navigation. */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const closeRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const open = index !== null && index >= 0 && index < images.length;
  const image = open ? images[index] : null;

  const handleKey = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${image.caption} — enlarged photograph`}
          className="on-ink fixed inset-0 z-[60] flex flex-col bg-ink/97 backdrop-blur-sm"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <p className="label text-gold">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close image viewer"
              className="p-2 text-cream transition-colors duration-300 hover:text-gold"
            >
              <FiX size={26} />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center gap-2 overflow-hidden px-3 pb-6 sm:gap-6 sm:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous photograph"
              className="shrink-0 border border-cream/20 p-2.5 text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:p-3"
            >
              <FiChevronLeft size={22} />
            </button>

            <figure className="flex min-w-0 flex-1 flex-col items-center">
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
              <figcaption className="mt-5 text-center">
                <span className="label block text-gold">{image.category}</span>
                <span className="mt-2 block font-display text-xl text-cream sm:text-2xl">
                  {image.caption}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next photograph"
              className="shrink-0 border border-cream/20 p-2.5 text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:p-3"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
