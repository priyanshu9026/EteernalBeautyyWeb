import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { defaultWhatsappMessage, whatsappLink } from "../../data/site";

/** Persistent booking shortcut — most visitors arrive on a phone. */
const WhatsAppFab = () => (
  <a
    href={whatsappLink(defaultWhatsappMessage)}
    target="_blank"
    rel="noreferrer"
    aria-label="Message Eteernal Beautyy on WhatsApp"
    className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold shadow-lift ring-1 ring-gold/40 transition-colors duration-300 hover:bg-gold hover:text-ink sm:bottom-8 sm:right-8"
  >
    <FaWhatsapp aria-hidden="true" size={24} />
  </a>
);

export default WhatsAppFab;
