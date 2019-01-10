export const breakpoints = ["600px", "1200px"];

export const colors = {
  white: {
    "_100": "rgba(255,255,255, 1.0)",
    "_90": "rgba(255,255,255, 0.9)",
    "_80": "rgba(255,255,255, 0.8)",
    "_20": "rgba(255,255,255, 0.2)",
  },
  navy: {
    "_100": "rgba(22,27,72, 1.0)",
    "_90": "rgba(22,27,72, 0.9)",
    "_80": "rgba(22,27,72, 0.8)",
    "_70": "rgba(22,27,72, 0.7)",
    "_60": "rgba(22,27,72, 0.6)",
    "_50": "rgba(22,27,72, 0.5)",
    "_40": "rgba(22,27,72, 0.4)",
    "_30": "rgba(22,27,72, 0.3)",
    "_20": "rgba(22,27,72, 0.2)",
    "_10": "rgba(22,27,72, 0.1)",
    "_8": "rgba(22,27,72, 0.08)",
    "_5": "rgba(22,27,72, 0.05)",
    "_3": "rgba(22,27,72, 0.03)",
  },
  blue: {
    "_100": "rgba(22, 31, 186, 1.0)",
    "_90": "rgba(69, 78, 223, 1.0)",
    "_80": "rgba(69, 78, 223, 0.9)",
    "_20": "rgba(69, 78, 223, 0.2)",
  },
  black: {
    "_100": "rgba(0,0,0, 1.0)",
  },
  red: {
    "_100": "rgba(243, 70, 70, 1.0)",
  },
  yellow: {
    "_100": "rgba(245, 169, 33, 1.0)",
  },
  green: {
    "_100": "rgba(5, 157, 91, 1.0)",
  },
  mint: {
    "_100": "rgba(14, 165, 138, 1.0)",
    "_90": "rgba(35, 193, 166, 0.1)",
    "_20": "rgba(35, 193, 166, 0.2)",
  }
};

export const fontsizes = {
  h1: 40,
  h2: 32,
  h3: 24,
  h4: 20,
  h5: 18,
  p: 16,
  sub: 14,
  caption: 12,
  btn: 16
};

export const fontweights = {
  medium: 500,
  regular: 400,
  demilight: 300,
  light: 200,
};

export const fontfamilies = {
  sans: "noto sans kr, arial, sans-serif"
};

export const space = [0, 4, 8, 16, 24, 32, 64, 128];

export const lineheights = ["1em", "1.4em", "1.6em", "2em"];

export const letterspacings = ["1px", "2px", "4px", "8px"];

export const radii = ["0", "2px", "4px", "8px", "16px", "32px"];

export const shadows = [
  "none",
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
];

export const theme = {
  breakpoints,
  colors,
  fontsizes,
  fontweights,
  fontfamilies,
  space,
  shadows,
  lineheights,
  letterspacings,
  radii,
};
