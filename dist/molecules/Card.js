"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var theme_1 = require("../commons/theme");
var Flex_1 = require("../atoms/Flex");
var boxShadow = function (props) { return "box-shadow: " + theme_1.shadow[props.shadow] + ";"; };
var hoverShadow = function (props) { return "box-shadow: " + theme_1.shadow[props.hoverShadow] + ";"; };
exports.Card = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  cursor: pointer;\n  ", "\n  ", "\n  &:hover {\n    ", "\n  }\n  transition: box-shadow 0.1s ease-out;\n"], ["\n  overflow: hidden;\n  cursor: pointer;\n  ", "\n  ", "\n  &:hover {\n    ", "\n  }\n  transition: box-shadow 0.1s ease-out;\n"])), boxShadow, styled_system_1.borderRadius, hoverShadow);
exports.Card.defaultProps = {
    flexDirection: "column",
    width: ["100%", "300px"],
    height: "auto",
    borderRadius: "3px",
    alignItems: "center",
    shadow: 2,
    hoverShadow: 4
};
var templateObject_1;
