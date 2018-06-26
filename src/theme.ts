export const containerWidth = "1440px";
export const navBarHeight = "70px";
export const footerHeight = "50px";

// grid-styled 패키지의 기본 옵션 형식을 따라 가기 위해 breakpoint의 name과 value를 구분해서 정의한다.
export const breakpoints = ["400px", "768px", "960px", "1200px", "1440px"];
export const breakpointNames = ["xs", "sm", "md", "lg", "xl"];

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
};

export const fontSizes = {
  h1: 40,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 13,
};

export const fontWeights = {
  medium: 500,
  regular: 400,
  demiLight: 300,
  light: 200,
};

export const space = [0, 8, 16, 32, 64, 128];

const theme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  space,
};

export default theme;
