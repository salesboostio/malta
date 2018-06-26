"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var _a = require("styled-system"), borderColor = _a.borderColor, color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign, width = _a.width;
var TooltipText = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  border-radius: 2px;\n  position: absolute;\n  white-space: pre-line;\n  visibility: hidden;\n  opacity: 0;\n  transform: translate3d(0,-10px,0);\n  transition: all .15s ease-in-out;\n  z-index: 1;\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    border-width: 7px;\n    border-style: solid;\n    ", "\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  border-radius: 2px;\n  position: absolute;\n  white-space: pre-line;\n  visibility: hidden;\n  opacity: 0;\n  transform: translate3d(0,-10px,0);\n  transition: all .15s ease-in-out;\n  z-index: 1;\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    border-width: 7px;\n    border-style: solid;\n    ", "\n  }\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), color, fontSize, fontWeight, lineHeight, space, textAlign, width, borderColor, function (props) { return props.placement == "top" && "\n    bottom: 150%;\n    left: -24px;\n    &::after {\n      top: 100%;\n      left: 24px;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n    }\n  "; }, function (props) { return props.placement == "left" && "\n    top: -10px;\n    right: 110%;\n\n    &::after {\n      top: 10px;\n      left: 100%;\n      border-top-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n    }\n  "; }, function (props) { return props.placement == "right" && "\n    top: -10px;\n    left: 110%;\n\n    &::after {\n      top: 10px;\n      right: 100%;\n      border-top-color: transparent !important;\n      border-left-color: transparent !important;\n      border-bottom-color: transparent !important;\n    }\n  "; }, function (props) { return props.placement == "bottom" && "\n    top: 150%;\n    left: -24px;\n    &::after {\n      bottom: 100%;\n      left: 24px;\n      border-top-color: transparent !important;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n    }\n  "; });
var StyledTooltip = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n\n  &:hover {\n    & ", " {\n      visibility: visible;\n      opacity: 1;\n      transform: translate3d(0,0,0);\n    }\n  }\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n\n  &:hover {\n    & ", " {\n      visibility: visible;\n      opacity: 1;\n      transform: translate3d(0,0,0);\n    }\n  }\n"])), TooltipText);
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.nl2br = function (text) {
        var newline = "\n";
        if (typeof text === "number") {
            return text;
        }
        else if (typeof text !== "string") {
            return "";
        }
        var lines = text.split(newline);
        return lines.map(function (line, i) {
            return (React.createElement("span", { key: i },
                line,
                React.createElement("br", null)));
        });
    };
    Tooltip.prototype.render = function () {
        return (React.createElement(StyledTooltip, null,
            this.props.children,
            React.createElement(TooltipText, __assign({}, this.props), this.nl2br(this.props.text))));
    };
    Tooltip.defaultProps = {
        // color
        color: "white.standard",
        bg: "black.dark",
        borderColor: "black.dark",
        // fontSize
        fontSize: "h5",
        // fontWeight
        fontWeight: "demiLight",
        // lineHeight
        lineHeight: "1.44",
        // placement
        placement: "bottom",
        // space
        m: 0,
        p: 2,
        // textAlign
        align: "left",
        // width
        width: 320,
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
var templateObject_1, templateObject_2;
