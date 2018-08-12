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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var theme_1 = require("../commons/theme");
var caps = function (_a) {
    var caps = _a.caps;
    return caps ? { textTransform: "uppercase" } : null;
};
var medium = function (_a) {
    var medium = _a.medium;
    return medium ? { fontWeight: "" + theme_1.fontWeights.medium } : null;
};
var regular = function (_a) {
    var regular = _a.regular;
    return regular ? { fontWeight: "" + theme_1.fontWeights.regular } : null;
};
var demiLight = function (_a) {
    var demiLight = _a.demiLight;
    return demiLight ? { fontWeight: "" + theme_1.fontWeights.demiLight } : null;
};
var light = function (_a) {
    var light = _a.light;
    return light ? { fontWeight: "" + theme_1.fontWeights.light } : null;
};
var italic = function (_a) {
    var italic = _a.italic;
    return (italic ? { fontStyle: "italic" } : null);
};
var left = function (_a) {
    var left = _a.left;
    return (left ? { textAlign: "left" } : null);
};
var right = function (_a) {
    var right = _a.right;
    return (right ? { textAlign: "right" } : null);
};
var center = function (_a) {
    var center = _a.center;
    return (center ? { textAlign: "center" } : null);
};
var underline = function (_a) {
    var underline = _a.underline;
    return underline ? { textDecorationLine: "underline" } : null;
};
var through = function (_a) {
    var through = _a.through;
    return through ? { textDecorationLine: "line-through" } : null;
};
exports.StyledText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-wrap: break-word;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  overflow-wrap: break-word;\n  hyphens: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), caps, medium, regular, demiLight, light, italic, left, right, center, underline, through, styled_system_1.color, styled_system_1.space, styled_system_1.fontSize, styled_system_1.fontFamily, styled_system_1.textAlign, styled_system_1.letterSpacing, styled_system_1.lineHeight, styled_system_1.height, styled_system_1.width).withComponent("p");
exports.StyledText.defaultProps = {
    color: "black.standard",
    fontSize: "h4",
    regular: true,
    left: true,
    lineHeight: "1.4em"
};
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(props) {
        return _super.call(this, props) || this;
    }
    Text.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement(exports.StyledText, __assign({}, props), children));
    };
    return Text;
}(React.Component));
exports.Text = Text;
var templateObject_1;
