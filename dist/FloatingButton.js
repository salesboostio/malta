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
var _a = require("styled-system"), color = _a.color, bottom = _a.bottom, right = _a.right;
var hoverColor = function (props) { return "background: " + props.hoverColor; };
var hoverDisplay = function (props) { return props.hoverDisplay; };
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  display: flex;\n  z-index: 1050;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 60px;\n  height: 60px;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  &:hover {\n    ", "\n    ", "\n  }\n"], ["\n  position: fixed;\n  display: flex;\n  z-index: 1050;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 60px;\n  height: 60px;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  &:hover {\n    ", "\n    ", "\n  }\n"])), bottom, right, color, hoverColor, hoverDisplay);
var FloatingButton = /** @class */ (function (_super) {
    __extends(FloatingButton, _super);
    function FloatingButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatingButton.prototype.render = function () {
        return (React.createElement(Container, __assign({}, this.props)));
    };
    return FloatingButton;
}(React.Component));
exports.FloatingButton = FloatingButton;
var templateObject_1;
