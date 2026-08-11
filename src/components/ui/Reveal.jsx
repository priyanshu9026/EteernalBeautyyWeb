import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Fade-and-rise on scroll. Falls back to a plain element when the visitor has
 * asked for reduced motion.
 */
const Reveal = ({
  as = "div",
  children,
  className,
  delay = 0,
  distance = 28,
  duration = 0.85,
  amount = 0.25,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
