"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("../theme");
function generateQuery(query, breakpoint, style) {
    var mediaQuery = "@media (" + getBreakpointRange(query, breakpoint) + ") { \
    " + style + " \
  }";
    return mediaQuery;
}
exports.generateQuery = generateQuery;
/*
 * [INPUT] breakpoint: string => ("xs", "sm", "md", "lg", "xl")
 * [OUTPUT] mediqQuery: string => @media (...)
 */
function hiddenDown(breakpoint) {
    var mediaQuery = "@media (" + getBreakpointRange("max-width", breakpoint) + ") { \
    display: none; \
  }";
    return mediaQuery;
}
exports.hiddenDown = hiddenDown;
/*
 * [INPUT] breakpoint: string => ("xs", "sm", "md", "lg", "xl")
 * [OUTPUT] mediqQuery: string => @media (...)
 */
function hiddenUp(breakpoint) {
    var mediaQuery = "@media (" + getBreakpointRange("min-width", breakpoint) + ") { \
    display: none; \
  }";
    return mediaQuery;
}
exports.hiddenUp = hiddenUp;
function responsiveStyle(breakpoints) {
}
exports.responsiveStyle = responsiveStyle;
function getBreakpointRange(query, breakpoint) {
    if (query === void 0) { query = "min-width"; }
    if (query === "min-width" || query === "max-width") {
        var breakpointIndex = theme_1.breakpointNames.indexOf(breakpoint);
        var breakpointValue = query === "min-width" ?
            (Number(theme_1.breakpoints[breakpointIndex].match(/\d+/)[0]) + 1) + "px" :
            theme_1.breakpoints[breakpointIndex];
        return (query + ": " + breakpointValue);
    }
    else {
        console.error("[getBreakpointRange] Invalid query value.");
    }
}
