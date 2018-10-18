"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Flex_1 = require("../atoms/Flex");
var Icon_1 = require("./Icon");
var theme_1 = require("../commons/theme");
var COLOR_DISABLED = theme_1.colors.black._20, COLOR_CHECKED = theme_1.colors.blue.royal, COLOR_UNCHECKED = theme_1.colors.white.standard;
var Wrapper = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  width: 20px;\n  height 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  transition: background 0.1s ease-out;\n  border-radius: 2px;\n  border: 1px solid ", ";\n  :hover {\n    ", "\n  }\n"], ["\n  background: ", ";\n  width: 20px;\n  height 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  transition: background 0.1s ease-out;\n  border-radius: 2px;\n  border: 1px solid ", ";\n  :hover {\n    ", "\n  }\n"])), function (props) { return (props.disabled ? COLOR_DISABLED : props.checked ? COLOR_CHECKED : COLOR_UNCHECKED); }, function (props) { return props.disabled ? "not-allowed" : "pointer"; }, theme_1.colors.black.half, function (props) { return props.disabled ? "" : "border: 1.5px solid " + theme_1.colors.black.standard + ";"; });
exports.CheckBox = function (props) {
    return (React.createElement(Wrapper, { checked: props.checked, disabled: props.disabled, onClick: props.disabled ? function () { } : props.onClick },
        React.createElement(Icon_1.Icon, { name: "check", fill: "#FFF", scale: 1 })));
};
exports.CheckBox.defaultProps = {
    disabled: false,
    checked: false,
};
var templateObject_1;
