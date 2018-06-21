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
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign, width = _a.width;
var StyledText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: pre-line;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  white-space: pre-line;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), color, fontSize, fontWeight, lineHeight, space, textAlign, width);
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.render = function () {
        var letterSpacing = this.props.letterSpacing;
        return (React.createElement(StyledText, __assign({}, this.props, { style: { letterSpacing: letterSpacing } }), this.props.children));
    };
    Text.defaultProps = {
        // color
        color: "black.dark",
        bg: "transparent",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
        // space
        m: 0,
        p: 0,
        // textAlign
        align: "left",
        // width
        width: 1,
    };
    return Text;
}(React.Component));
exports.Text = Text;
var templateObject_1;
