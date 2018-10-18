"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var theme_1 = require("../commons/theme");
var borders = function (_a) {
    var error = _a.error;
    var borderColor = error ? theme_1.default.colors.red : theme_1.default.colors.black._20;
    var focusColor = theme_1.default.colors.blue.royal;
    var hoverColor = theme_1.default.colors.black.half;
    return {
        "box-shadow": "0 0 0 1px " + borderColor,
        ":hover:enabled:not(:focus)": {
            "box-shadow": "0 0 0 1px " + hoverColor
        },
        ":focus": {
            outline: 0,
            "border-color": focusColor,
            "box-shadow": "0 0 0 1px " + focusColor
        }
    };
};
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  display: block;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-width: 0px;\n  border-radius: 2px\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0px;\n  paddong-bottom: 0px;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  :disabled{\n    background: ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  appearance: none;\n  display: block;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-width: 0px;\n  border-radius: 2px\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0px;\n  paddong-bottom: 0px;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  :disabled{\n    background: ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), theme_1.default.colors.black._20, theme_1.default.colors.black._5, borders, styled_system_1.space, styled_system_1.width, styled_system_1.height, styled_system_1.fontSize);
exports.Input.defaultProps = {
    my: "8px",
    mx: "0px",
    width: ["320px", "440px"],
    height: ["52px", "60px"],
    fontSize: ["h4", "h3"],
    error: false
};
var templateObject_1;
