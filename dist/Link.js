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
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, space = _a.space;
var A = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  text-decoration: none;\n  white-space: pre-line;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: inline-block;\n  text-decoration: none;\n  white-space: pre-line;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), color, fontSize, fontWeight, space);
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var onClick = this.props.onClick;
        return (React.createElement(A, __assign({ onClick: onClick }, this.props), this.props.children));
    };
    Link.defaultProps = {
        href: "#",
        // color
        color: "black.dark",
        bg: "transparent",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "regular",
        // space
        m: 0,
        p: 0,
        onClick: function () { }
    };
    return Link;
}(React.Component));
exports.Link = Link;
var templateObject_1;
