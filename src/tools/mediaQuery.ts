import { breakpoints, breakpointNames } from "../theme";

export interface IProps {
  hide?: Array<Boolean>;
}

export function generateQuery(query: string, breakpoint: string, style: string) {
  const mediaQuery = "@media (" + getBreakpointRange(query, breakpoint) + ") { \
    " + style + " \
  }";

  return mediaQuery;
}

/*
 * [INPUT] breakpoint: string => ("xs", "sm", "md", "lg", "xl")
 * [OUTPUT] mediqQuery: string => @media (...)
 */
export function hiddenDown(breakpoint: string) {
  const mediaQuery = "@media (" + getBreakpointRange("max-width", breakpoint) + ") { \
    display: none; \
  }";

  return mediaQuery;
}

/*
 * [INPUT] breakpoint: string => ("xs", "sm", "md", "lg", "xl")
 * [OUTPUT] mediqQuery: string => @media (...)
 */
export function hiddenUp(breakpoint: string) {
  const mediaQuery = "@media (" + getBreakpointRange("min-width", breakpoint) + ") { \
    display: none; \
  }";

  return mediaQuery;
}

export function responsiveStyle(breakpoints: Array<number | string>) {

}

function getBreakpointRange(query: string = "min-width", breakpoint: string) {
  if (query === "min-width" || query === "max-width") {
    const breakpointIndex = breakpointNames.indexOf(breakpoint);
    const breakpointValue =
      query === "max-width" ?
        (Number(breakpoints[breakpointIndex].match(/\d+/)[0]) - 1) + "px" :
        breakpoints[breakpointIndex];

    return (query + ": " + breakpointValue);
  } else {
    console.error("[getBreakpointRange] Invalid query value.");
  }
}