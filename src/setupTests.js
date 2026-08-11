// jest-dom adds custom matchers such as toBeInTheDocument().
import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";

// The jsdom build shipped with react-scripts 5 is missing a few browser globals
// that react-router 7 and framer-motion expect at import/render time.
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

if (typeof global.IntersectionObserver === "undefined") {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// jsdom has no layout engine, so ScrollToTop's window.scrollTo would throw.
window.scrollTo = () => {};

if (typeof window.matchMedia === "undefined") {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  });
}
