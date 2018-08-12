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
var borders = function () {
    var borderColor = theme_1.default.colors.black.hint;
    var focusColor = theme_1.default.colors.blue.dark;
    return {
        "border-color": borderColor,
        "box-shadow": "0 0 0 1px " + borderColor,
        ":focus": {
            outline: 0,
            "border-color": focusColor,
            "box-shadow": "0 0 0 2px " + focusColor
        }
    };
};
exports.StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 16px;\n  background-color: transparent;\n  border-radius: 2px;\n  border-width: 0px;\n  border-style: solid;\n  border-color: ", ";\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  ", " ", ";\n"], ["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 16px;\n  background-color: transparent;\n  border-radius: 2px;\n  border-width: 0px;\n  border-style: solid;\n  border-color: ", ";\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  ", " ", ";\n"])), theme_1.default.colors.blue.dark, theme_1.default.colors.black._20, borders, styled_system_1.space);
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        return _super.call(this, props) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement(exports.StyledInput, __assign({}, props), children));
    };
    return Input;
}(React.Component));
exports.Input = Input;
var templateObject_1;
