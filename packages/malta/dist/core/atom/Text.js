"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var Block_1 = require("./Block");
var medium = function (_a) {
    var medium = _a.medium;
    return medium ? "font-weight: 500;" : "";
};
var regular = function (_a) {
    var regular = _a.regular;
    return regular ? "font-weight: 400;" : "";
};
var demiLight = function (_a) {
    var demiLight = _a.demiLight;
    return demiLight ? "font-weight: 300;" : "";
};
var light = function (_a) {
    var light = _a.light;
    return light ? "font-weight: 200;" : "";
};
var left = function (_a) {
    var left = _a.left;
    return left ? "text-align: left;" : "";
};
var right = function (_a) {
    var right = _a.right;
    return right ? "text-align: right;" : "";
};
var center = function (_a) {
    var center = _a.center;
    return center ? "text-align: center;" : "";
};
var overflowWrap = function (_a) {
    var overflowWrap = _a.overflowWrap;
    return overflowWrap ? "overflow-wrap: " + overflowWrap + ";" : "";
};
var textOverflow = function (_a) {
    var textOverflow = _a.textOverflow;
    return textOverflow ? "text-overflow: " + textOverflow + ";" : "";
};
var wordBreak = function (_a) {
    var wordBreak = _a.wordBreak;
    return wordBreak ? "word-break: " + wordBreak + ";" : "";
};
var whiteSpace = function (_a) {
    var whiteSpace = _a.whiteSpace;
    return whiteSpace ? "white-space: " + whiteSpace + ";" : "";
};
exports.Text = styled_components_1.default(Block_1.Block.withComponent("p"))(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  hyphens: auto;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  hyphens: auto;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), medium, regular, demiLight, light, left, right, center, overflowWrap, textOverflow, whiteSpace, styled_system_1.fontSize, styled_system_1.fontFamily, styled_system_1.fontWeight, styled_system_1.textAlign, wordBreak, styled_system_1.letterSpacing, styled_system_1.lineHeight);
exports.Text.defaultProps = {
    color: "rgba(22,27,72,0.8)",
    fontSize: "h4",
    lineHeight: "1.4em",
    overflow: "hidden",
    overflowWrap: "break-word",
    m: 0,
};
var templateObject_1;
