"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Flex_1 = require("../atoms/Flex");
var theme_1 = require("../commons/theme");
var styled_system_1 = require("styled-system");
exports.VerticalSplit = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 0;\n  border-right: 1px solid ", ";\n  ", "\n"], ["\n  width: 0;\n  border-right: 1px solid ", ";\n  ", "\n"])), theme_1.colors.black._20, styled_system_1.space);
var templateObject_1;
