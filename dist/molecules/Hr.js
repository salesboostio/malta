"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../commons/theme");
var styled_system_1 = require("styled-system");
var utils_1 = require("../commons/utils");
var border = function (props) { return "border-bottom: " + props.thick + " " + props.lineStyle + " " + utils_1.getValueFromTheme(theme_1.colors, props.color); };
exports.Hr = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 0px;\n  ", "\n  ", "\n  ", "\n"], ["\n  height: 0px;\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.space, styled_system_1.width, border);
exports.Hr.defaultProps = {
    thick: "1px",
    lineStyle: "solid",
    color: "black._20",
    my: 1,
    width: "100%"
};
var templateObject_1;
