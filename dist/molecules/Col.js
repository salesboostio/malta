"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Flex_1 = require("../atoms/Flex");
exports.Col = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
exports.Col.defaultProps = {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
};
var templateObject_1;
