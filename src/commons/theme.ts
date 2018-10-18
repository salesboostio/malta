export const breakpoints = ["600px", "1200px"];

export const colors = {
  white: {
    standard: "#FFFFFF",
    _75: "rgba(255, 255, 255, 0.75)",
    _50: "rgba(255, 255, 255, 0.5)",
  },
  blue: {
    royal: "#454EDF",
    deep: "#161FBA",
    dark: "#030c90",
  },
  black: {
    dark: "rgba(22, 27, 72, 0.9)",
    standard: "rgba(22, 27, 72, 0.8)",
    sub: "rgba(22, 27, 72, 0.6)",
    half: "rgba(22, 27, 72, 0.5)",
    hint: "rgba(22, 27, 72, 0.4)",
    _20: "rgba(22, 27, 72, 0.2)",
    _10: "rgba(22, 27, 72, 0.1)",
    _8: "rgba(22, 27, 72, 0.08)",
    _5: "rgba(22, 27, 72, 0.05)",
    _4: "rgba(22, 27, 72, 0.04)",
    _3: "rgba(22, 27, 72, 0.03)",
  },
  red: "#F51A1A",
  yellow: "#F5A921",
  green: "#059D5B",
  mint: "#23C1A6"
};

export const fontSizes = {
  h1: 40,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
};

export const fontWeights = {
  medium: 500,
  regular: 400,
  demiLight: 300,
  light: 200,
};

export const fontFamilies = {
  sans: "Noto Sans KR, Arial, sans-serif"
};

export const space = [0, 8, 16, 32, 64, 128];

export const shadow = [
  "none",
  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
];

const theme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  space,
  shadow
};

export default theme;
