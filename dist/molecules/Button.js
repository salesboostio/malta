"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var Box_1 = require("../atoms/Box");
var theme_1 = require("../commons/theme");
exports.Button = styled_components_1.default(Box_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  width: fit-content;\n  &:hover {\n    background: ", ";\n  }\n  &:focus {\n    background: ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  width: fit-content;\n  &:hover {\n    background: ", ";\n  }\n  &:focus {\n    background: ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) { return props.hoverColor; }, function (props) { return props.focusColor; }, styled_system_1.fontSize, styled_system_1.borderColor, styled_system_1.borderRadius, styled_system_1.border);
exports.Button.defaultProps = {
    onClick: function () { },
    borderColor: "transparent",
    borderRadius: ["26px", "30px"],
    border: "none",
    color: "white.standard",
    bg: "blue.royal",
    fontSize: ["h5", "h3"],
    height: ["52px", "60px"],
    m: 0,
    mb: 2,
    px: 3,
    hoverColor: theme_1.colors.blue.deep,
    focusColor: theme_1.colors.blue.dark
};
var templateObject_1;
