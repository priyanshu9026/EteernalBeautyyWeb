import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import {
  defaultWhatsappMessage,
  navLinks,
  socialLinks,
  studio,
  whatsappLink,
} from "../../data/site";

const ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

const ColumnTitle = ({ children }) => (
  <h2 className="label mb-6 text-gold">{children}</h2>
);

const Footer = () => (
  <footer className="on-ink bg-ink text-cream">
    <div className="shell py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5 lg:col-span-4">
          <img
            src="/assets/logo.png"
            alt=""
            width="150"
            height="108"
            className="h-12 w-auto"
          />
          <p className="mt-6 font-display text-3xl leading-tight text-cream">
            {studio.fullName}
          </p>
          <p className="copy-invert mt-5 max-w-sm">
            A small bridal studio in Bangla Bazaar, run by {studio.artist}.
            Skin-first makeup, honest colour matching, and looks built to
            survive a full Lucknow wedding day.
          </p>

          <ul className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = ICONS[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`${studio.name} on ${label}`}
                    className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <Icon aria-hidden="true" size={16} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav
          aria-label="Footer"
          className="md:col-span-3 lg:col-span-2 lg:col-start-6"
        >
          <ColumnTitle>Pages</ColumnTitle>
          <ul className="space-y-3.5">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="link-underline font-sans text-[15px] text-cream/75 transition-colors duration-300 hover:text-cream"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4 lg:col-span-3">
          <ColumnTitle>Visit &amp; Contact</ColumnTitle>
          <address className="space-y-4 not-italic">
            <p className="font-sans text-[15px] leading-relaxed text-cream/75">
              {studio.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="space-y-1.5">
              <a
                href={studio.phoneHref}
                className="link-underline block font-sans text-[15px] text-cream/75 hover:text-cream"
              >
                {studio.phoneDisplay}
              </a>
              <a
                href={`mailto:${studio.email}`}
                className="link-underline block break-all font-sans text-[15px] text-cream/75 hover:text-cream"
              >
                {studio.email}
              </a>
            </p>
          </address>
        </div>

        <div className="md:col-span-5 md:col-start-8 lg:col-span-3 lg:col-start-10">
          <ColumnTitle>Studio Hours</ColumnTitle>
          <dl className="space-y-3.5">
            {studio.hours.map(({ days, time }) => (
              <div key={days} className="flex flex-col gap-0.5">
                <dt className="font-sans text-[15px] text-cream/75">{days}</dt>
                <dd className="font-sans text-[15px] text-cream/45">{time}</dd>
              </div>
            ))}
          </dl>

          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-8 w-full"
          >
            Book a trial
            <FiArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-cream/10">
      <div className="shell flex flex-col gap-2 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-cream/40">
          © {studio.copyrightYear} {studio.fullName}
        </p>
        <p className="label text-cream/40">
          Bridal atelier · Bangla Bazaar, Lucknow
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
