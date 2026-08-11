import React from "react";

/** Small-caps section eyebrow preceded by a gold hairline. */
const Eyebrow = ({ children, tone = "gold", className = "" }) => {
  const color = tone === "cream" ? "text-cream/70" : "text-gold";
  const rule = tone === "cream" ? "bg-cream/40" : "bg-gold";

  return (
    <p className={`flex items-center gap-4 ${className}`}>
      <span aria-hidden="true" className={`h-px w-10 shrink-0 ${rule}`} />
      <span className={`label ${color}`}>{children}</span>
    </p>
  );
};

export default Eyebrow;
