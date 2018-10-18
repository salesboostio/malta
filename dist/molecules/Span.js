"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Text_1 = require("../atoms/Text");
exports.Span = styled_components_1.default(Text_1.Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline;\n"], ["\n  display: inline;\n"]))).withComponent("span");
var templateObject_1;
