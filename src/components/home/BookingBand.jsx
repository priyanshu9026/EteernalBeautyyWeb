import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { studio, whatsappLink } from "../../data/site";

const bookingMessage = `Hello ${studio.artist}, I would like to book a bridal trial at Eteernal Beautyy. My wedding date is `;

const BookingBand = () => (
  <section
    aria-labelledby="booking-heading"
    className="on-ink bg-ink py-24 sm:py-28 lg:py-36"
  >
    <div className="shell">
      <div className="grid grid-cols-12 items-end gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <Eyebrow tone="cream">Bookings</Eyebrow>
            <h2
              id="booking-heading"
              className="mt-7 text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.98] text-cream"
            >
              Let&rsquo;s find
              <span className="italic"> your</span> date.
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.12}>
            <p className="copy-invert">
              Wedding dates go first, usually four to six months ahead. Send
              your date and venue and I will tell you honestly whether I can do
              it justice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink(bookingMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                <FaWhatsapp aria-hidden="true" size={16} />
                WhatsApp now
              </a>
              <Link to="/contact" className="btn btn-outline-cream">
                Enquiry form
                <FiArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal
        as="ul"
        delay={0.16}
        className="mt-16 grid grid-cols-1 border-t border-gold/25 sm:grid-cols-3 lg:mt-24"
      >
        {[
          {
            icon: FiPhone,
            label: "Call the studio",
            value: studio.phoneDisplay,
            href: studio.phoneHref,
          },
          {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: studio.phoneDisplay,
            href: whatsappLink(bookingMessage),
            external: true,
          },
          {
            icon: FiMapPin,
            label: "Visit",
            value: "Bangla Bazaar, Lucknow",
            href: "/contact",
            internal: true,
          },
        ].map(({ icon: Icon, label, value, href, external, internal }) => {
          const content = (
            <>
              <span className="flex items-center gap-3 text-gold">
                <Icon aria-hidden="true" size={17} />
                <span className="label">{label}</span>
              </span>
              <span className="mt-4 block font-display text-[1.7rem] leading-tight text-cream transition-colors duration-300 group-hover:text-gold-light sm:text-3xl">
                {value}
              </span>
            </>
          );

          return (
            <li
              key={label}
              className="border-b border-gold/25 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              {internal ? (
                <Link to={href} className="group block py-8">
                  {content}
                </Link>
              ) : (
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : null)}
                  className="group block py-8"
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </Reveal>
    </div>
  </section>
);

export default BookingBand;
