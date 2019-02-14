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
var utils_1 = require("../../utils");
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  appearance: none;\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.space, styled_system_1.width, styled_system_1.height, styled_system_1.color, styled_system_1.maxWidth, styled_system_1.maxHeight, styled_system_1.minWidth, styled_system_1.minHeight, styled_system_1.flex, styled_system_1.border, styled_system_1.borderRadius, styled_system_1.fontSize, styled_system_1.fontWeight, styled_system_1.fontFamily, utils_1.hover, utils_1.ofReducer, utils_1.transition);
exports.Input.defaultProps = {
    p: 0,
    m: 0,
    fontSize: "16px",
    border: "none"
};
var templateObject_1;
