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
exports.Header = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  height: 60px;\n  width: 100%;\n  box-shadow: 0 8px 40px 0 rgba(22, 27, 72, 0.04);\n  position: fixed;\n  top: 0;\n  left: 0;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  height: 60px;\n  width: 100%;\n  box-shadow: 0 8px 40px 0 rgba(22, 27, 72, 0.04);\n  position: fixed;\n  top: 0;\n  left: 0;\n  ", "\n  ", "\n"])), styled_system_1.space, styled_system_1.color);
exports.Header.defaultProps = {
    bg: "#FFF"
};
var templateObject_1;
