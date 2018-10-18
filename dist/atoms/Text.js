"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var theme_1 = require("../commons/theme");
var caps = function (_a) {
    var caps = _a.caps;
    return caps ? { textTransform: "uppercase" } : null;
};
var medium = function (_a) {
    var medium = _a.medium;
    return medium ? { fontWeight: "" + theme_1.fontWeights.medium } : null;
};
var regular = function (_a) {
    var regular = _a.regular;
    return regular ? { fontWeight: "" + theme_1.fontWeights.regular } : null;
};
var demiLight = function (_a) {
    var demiLight = _a.demiLight;
    return demiLight ? { fontWeight: "" + theme_1.fontWeights.demiLight } : null;
};
var light = function (_a) {
    var light = _a.light;
    return light ? { fontWeight: "" + theme_1.fontWeights.light } : null;
};
var italic = function (_a) {
    var italic = _a.italic;
    return (italic ? { fontStyle: "italic" } : null);
};
var left = function (_a) {
    var left = _a.left;
    return (left ? { textAlign: "left" } : null);
};
var right = function (_a) {
    var right = _a.right;
    return (right ? { textAlign: "right" } : null);
};
var center = function (_a) {
    var center = _a.center;
    return (center ? { textAlign: "center" } : null);
};
var underline = function (_a) {
    var underline = _a.underline;
    return underline ? { textDecorationLine: "underline" } : null;
};
var through = function (_a) {
    var through = _a.through;
    return through ? { textDecorationLine: "line-through" } : null;
};
var hoverColor = function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor ? { color: hoverColor } : null;
};
exports.Text = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-wrap: break-word;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  :hover {\n   ", "\n  }\n"], ["\n  overflow-wrap: break-word;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  :hover {\n   ", "\n  }\n"])), caps, medium, regular, demiLight, light, italic, left, right, center, underline, through, styled_system_1.color, styled_system_1.space, styled_system_1.fontSize, styled_system_1.fontFamily, styled_system_1.textAlign, styled_system_1.letterSpacing, styled_system_1.lineHeight, styled_system_1.height, styled_system_1.width, hoverColor).withComponent("p");
exports.Text.defaultProps = {
    color: "black.standard",
    fontSize: "h4",
    left: true,
    lineHeight: "1.4em"
};
var templateObject_1;
