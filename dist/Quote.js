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
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign;
var BlockQuote = styled_components_1.default.blockquote(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  white-space: pre-line;\n  position: relative;\n  margin: 0 0 0 20px;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &:before {\n    content: \"\u201C\";\n    display: block;\n    font-size: 40px;\n    height: 0;\n    left: -20px;\n    position: absolute;\n    top: -10px;\n    ", "\n    ", "\n  }\n\n  &:after {\n    content: \"\u201D\";\n    display: block;\n    font-size: 40px;\n    height: 0;\n    right: -20px;\n    position: absolute;\n    top: -10px;\n    ", "\n    ", "\n  }\n"], ["\n  display: ", ";\n  white-space: pre-line;\n  position: relative;\n  margin: 0 0 0 20px;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &:before {\n    content: \"\u201C\";\n    display: block;\n    font-size: 40px;\n    height: 0;\n    left: -20px;\n    position: absolute;\n    top: -10px;\n    ", "\n    ", "\n  }\n\n  &:after {\n    content: \"\u201D\";\n    display: block;\n    font-size: 40px;\n    height: 0;\n    right: -20px;\n    position: absolute;\n    top: -10px;\n    ", "\n    ", "\n  }\n"])), function (props) { return props.display; }, color, fontSize, fontWeight, lineHeight, space, textAlign, color, fontWeight, color, fontWeight);
var Quote = /** @class */ (function (_super) {
    __extends(Quote, _super);
    function Quote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quote.prototype.render = function () {
        return (React.createElement(BlockQuote, __assign({}, this.props), this.props.children));
    };
    Quote.defaultProps = {
        // color
        color: "black.dark",
        bg: "transparent",
        // display
        display: "inline-block",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
    };
    return Quote;
}(React.Component));
exports.Quote = Quote;
var templateObject_1;
