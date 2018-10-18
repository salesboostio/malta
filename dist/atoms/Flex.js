"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var Box_1 = require("./Box");
exports.Flex = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.alignItems, styled_system_1.justifyContent, styled_system_1.flexWrap, styled_system_1.flexDirection);
var templateObject_1;
