import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { defaultWhatsappMessage, studio, whatsappLink } from "../../data/site";

/** Closing booking band shared by the inner routes. */
const ContactCta = ({
  eyebrow = "Bookings",
  title = "Shall we hold your date?",
  body = "Send your wedding date, venue and the look you have in mind. I reply to every message myself, usually the same evening.",
}) => (
  <section
    aria-labelledby="cta-heading"
    className="on-ink bg-ink py-24 sm:py-28 lg:py-32"
  >
    <div className="shell">
      <div className="grid grid-cols-12 items-end gap-y-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <Eyebrow tone="cream">{eyebrow}</Eyebrow>
            <h2
              id="cta-heading"
              className="mt-7 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] text-cream"
            >
              {title}
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.12}>
            <p className="copy-invert">{body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                <FaWhatsapp aria-hidden="true" size={16} />
                WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline-cream">
                Enquiry form
                <FiArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <p className="mt-7 font-sans text-sm text-cream/50">
              Or call{" "}
              <a
                href={studio.phoneHref}
                className="link-underline text-cream/80 hover:text-cream"
              >
                {studio.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCta;
