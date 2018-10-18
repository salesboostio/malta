"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Span_1 = require("./Span");
exports.HyperLink = styled_components_1.default(Span_1.Span)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  &:hover{\n    text-decoration-line: underline;\n  }\n  cursor: pointer;\n"], ["\n  text-decoration: none;\n  &:hover{\n    text-decoration-line: underline;\n  }\n  cursor: pointer;\n"]))).withComponent("a");
exports.HyperLink.defaultProps = {
    target: "_blank"
};
var templateObject_1;
