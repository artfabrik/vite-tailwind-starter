const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * generates something like:
 * {
 *   '100': 'var(--color-primary-100)',
 *   '200': 'var(--color-primary-200)',
 *   '300': 'var(--color-primary-300)'
 * }
 */
function generateColorTonesCSSProps(name, start = 100, step = 100, count = 9) {
  const tone = (i) => `${start + i * step}`;
  return [...Array(count).keys()].reduce((acc, i) => {
    acc[tone(i)] = `var(--color-${name}-${tone(i)})`;
    return acc;
  }, {});
}

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./index.html",
      "./src/**/*.vue",
      "./src/**/*.js",
      // etc.
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      secondary: generateColorTonesCSSProps("secondary"),
      primary: generateColorTonesCSSProps("primary"),
      white: "white",
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
