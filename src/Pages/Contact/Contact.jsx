import React, { useMemo, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import PageIntro from "../../components/ui/PageIntro";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import { serviceOptions, studio, whatsappLink } from "../../data/site";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

const FIELD_CLASS =
  "w-full border border-ink/20 bg-transparent px-4 py-3.5 font-sans text-[16px] text-ink transition-colors duration-300 placeholder:text-ink-muted/45 hover:border-ink/40 focus:border-gold";

const validate = (values) => {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please tell me your name.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "A phone number is needed so I can call you back.";
  } else if (digits.length < 10 || digits.length > 12) {
    errors.phone = "That does not look like a complete number.";
  }

  if (!values.email.trim()) {
    errors.email = "An email address is needed for the written quote.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please check the email address.";
  }

  if (!values.service) {
    errors.service = "Choose what you are booking for.";
  }

  if (values.date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(values.date) < today) {
      errors.date = "Please pick a date that has not passed.";
    }
  }

  return errors;
};

const Field = ({ id, label, error, hint, children }) => (
  <p className="flex flex-col">
    <label htmlFor={id} className="label mb-3 text-ink-muted">
      {label}
    </label>
    {children}
    {error ? (
      <span id={`${id}-error`} role="alert" className="mt-2 font-sans text-sm text-[#9B2C2C]">
        {error}
      </span>
    ) : hint ? (
      <span id={`${id}-hint`} className="mt-2 font-sans text-sm text-ink-muted/70">
        {hint}
      </span>
    ) : null}
  </p>
);

const DetailBlock = ({ icon: Icon, title, children }) => (
  <div className="border-t border-gold/40 py-7">
    <p className="flex items-center gap-3 text-gold">
      <Icon aria-hidden="true" size={16} />
      <span className="label">{title}</span>
    </p>
    <div className="mt-4">{children}</div>
  </div>
);

const Contact = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitted, setSubmitted] = useState(null);
  const successRef = useRef(null);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }

    setStatus("submitting");
    // No backend: acknowledge locally and hand the visitor to WhatsApp.
    window.setTimeout(() => {
      setSubmitted(values);
      setStatus("success");
      setValues(EMPTY);
      window.requestAnimationFrame(() => successRef.current?.focus());
    }, 600);
  };

  const successWhatsapp = useMemo(() => {
    if (!submitted) return whatsappLink("");
    const lines = [
      `Hello ${studio.artist}, this is ${submitted.name}.`,
      `I have just sent an enquiry through your website.`,
      `Service: ${submitted.service}`,
      submitted.date ? `Event date: ${submitted.date}` : null,
      `Phone: ${submitted.phone}`,
      submitted.message ? `Note: ${submitted.message}` : null,
    ].filter(Boolean);
    return whatsappLink(lines.join("\n"));
  }, [submitted]);

  return (
    <>
      <PageIntro
        eyebrow="Enquiries"
        index="IV"
        title={
          <>
            Say
            <span className="italic"> hello</span>
          </>
        }
        lead="Tell me your dates and I will come back with availability and an exact quote. For anything urgent, WhatsApp is always the fastest way to reach me."
      />

      <section
        aria-labelledby="enquiry-heading"
        className="paper bg-cream pb-24 pt-16 sm:pb-28 lg:pb-32 lg:pt-20"
      >
        <div className="shell">
          <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-7">
              {status === "success" ? (
                <Reveal
                  className="border border-gold/50 bg-cream-dark p-8 sm:p-12"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink"
                  >
                    <FiCheck size={26} />
                  </span>
                  <h2
                    ref={successRef}
                    tabIndex={-1}
                    className="mt-8 text-[clamp(2rem,4vw,3rem)] leading-tight text-ink focus:outline-none"
                  >
                    Thank you, {submitted?.name?.split(" ")[0]}.
                  </h2>
                  <p className="copy mt-5">
                    Your enquiry is noted. I read every message myself and
                    usually reply the same evening — if your date is close,
                    nudge me on WhatsApp and I will answer faster.
                  </p>

                  <dl className="mt-9 grid grid-cols-1 gap-x-10 gap-y-5 border-t border-gold/40 pt-7 sm:grid-cols-2">
                    {[
                      ["Service", submitted?.service],
                      ["Event date", submitted?.date || "Not yet fixed"],
                      ["Phone", submitted?.phone],
                      ["Email", submitted?.email],
                    ].map(([term, value]) => (
                      <div key={term}>
                        <dt className="label text-ink-muted/60">{term}</dt>
                        <dd className="mt-1.5 break-words font-sans text-[16px] text-ink">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={successWhatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-gold"
                    >
                      <FaWhatsapp aria-hidden="true" size={16} />
                      Send it on WhatsApp too
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setSubmitted(null);
                      }}
                      className="btn btn-outline-ink"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <Eyebrow>Enquiry form</Eyebrow>
                  <h2
                    id="enquiry-heading"
                    className="mt-7 text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-ink"
                  >
                    A few details and I can check the date.
                  </h2>

                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2"
                  >
                    <Field id="name" label="Your name *" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Ananya Srivastava"
                        value={values.name}
                        onChange={update("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`${FIELD_CLASS} ${
                          errors.name ? "border-[#9B2C2C]" : ""
                        }`}
                      />
                    </Field>

                    <Field id="phone" label="Phone *" error={errors.phone}>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        value={values.phone}
                        onChange={update("phone")}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={`${FIELD_CLASS} ${
                          errors.phone ? "border-[#9B2C2C]" : ""
                        }`}
                      />
                    </Field>

                    <Field id="email" label="Email *" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={update("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={`${FIELD_CLASS} ${
                          errors.email ? "border-[#9B2C2C]" : ""
                        }`}
                      />
                    </Field>

                    <Field
                      id="date"
                      label="Event date"
                      error={errors.date}
                      hint="Leave blank if it is not fixed yet."
                    >
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={values.date}
                        onChange={update("date")}
                        aria-invalid={Boolean(errors.date)}
                        aria-describedby={
                          errors.date ? "date-error" : "date-hint"
                        }
                        className={`${FIELD_CLASS} ${
                          errors.date ? "border-[#9B2C2C]" : ""
                        }`}
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <Field
                        id="service"
                        label="What are you booking? *"
                        error={errors.service}
                      >
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={update("service")}
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={
                            errors.service ? "service-error" : undefined
                          }
                          className={`${FIELD_CLASS} appearance-none ${
                            errors.service ? "border-[#9B2C2C]" : ""
                          } ${values.service ? "" : "text-ink-muted/45"}`}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <Field
                        id="message"
                        label="Anything else"
                        hint="Venue, call time, number of people, or a look you have in mind."
                      >
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="We are getting married at a farmhouse on Sitapur Road and need makeup for me plus three family members…"
                          value={values.message}
                          onChange={update("message")}
                          aria-describedby="message-hint"
                          className={`${FIELD_CLASS} resize-y`}
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        {status === "submitting"
                          ? "Sending…"
                          : "Send enquiry"}
                      </button>
                      <p className="mt-5 font-sans text-sm text-ink-muted/80">
                        Fields marked * are required. Your details are only
                        used to answer this enquiry.
                      </p>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <Eyebrow>The studio</Eyebrow>

                <div className="mt-8">
                  <DetailBlock icon={FiMapPin} title="Address">
                    <address className="font-sans text-[16px] not-italic leading-relaxed text-ink-muted">
                      {studio.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </DetailBlock>

                  <DetailBlock icon={FiPhone} title="Phone & WhatsApp">
                    <a
                      href={studio.phoneHref}
                      className="link-underline font-display text-2xl text-ink hover:text-ink-muted"
                    >
                      {studio.phoneDisplay}
                    </a>
                  </DetailBlock>

                  <DetailBlock icon={FiMail} title="Email">
                    <a
                      href={`mailto:${studio.email}`}
                      className="link-underline break-all font-sans text-[16px] text-ink-muted hover:text-ink"
                    >
                      {studio.email}
                    </a>
                  </DetailBlock>

                  <DetailBlock icon={FiClock} title="Hours">
                    <dl className="space-y-3">
                      {studio.hours.map(({ days, time }) => (
                        <div key={days}>
                          <dt className="font-sans text-[15px] text-ink">
                            {days}
                          </dt>
                          <dd className="font-sans text-[15px] text-ink-muted/75">
                            {time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </DetailBlock>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="bg-ink pb-0">
        <h2 id="map-heading" className="sr-only">
          Studio location
        </h2>
        <iframe
          title={`Map showing ${studio.fullName} at Bangla Bazaar, Lucknow`}
          src={studio.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[340px] w-full border-0 grayscale-[0.35] sm:h-[420px] lg:h-[480px]"
        />
      </section>
    </>
  );
};

export default Contact;
