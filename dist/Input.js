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
var space = require("styled-system").space;
var theme_1 = require("./theme");
var mediaQuery_1 = require("./tools/mediaQuery");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  ", "\n"], ["\n  width: 100%;\n  ", "\n"])), space);
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: ", "px;\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: ", "px;\n"])), theme_1.colors.black.standard, theme_1.fontSizes.h4, theme_1.fontWeights.regular, theme_1.space[1]);
var ErrorLabel = Label.extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: ", "px;\n  margin-top: ", "px;\n"], ["\n  color: ", ";\n  margin-left: ", "px;\n  margin-top: ", "px;\n"])), theme_1.colors.red, theme_1.space[1], theme_1.space[1]);
var StyledInput = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: solid 1px ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  height: 60px;\n  padding: 0 ", "px;\n  width: 100%;\n\n  ", ";\n\n  &:disabled {\n    background-color: ", ";\n    border: solid 1px ", " !important;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border: solid 1px ", " !important;\n    box-shadow: 0 2px 6px 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    border: solid 1px ", ";\n    box-shadow: 0 2px 6px 2px ", ";\n  }\n\n  &::placeholder {\n    color: inherit;\n    opacity: 0.4;\n  }\n"], ["\n  border: solid 1px ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  height: 60px;\n  padding: 0 ", "px;\n  width: 100%;\n\n  ",
    ";\n\n  &:disabled {\n    background-color: ", ";\n    border: solid 1px ", " !important;\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    border: solid 1px ", " !important;\n    box-shadow: 0 2px 6px 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    border: solid 1px ", ";\n    box-shadow: 0 2px 6px 2px ", ";\n  }\n\n  &::placeholder {\n    color: inherit;\n    opacity: 0.4;\n  }\n"])), function (props) { return props.error ? "#f51a1a" : theme_1.colors.black._20; }, theme_1.colors.black._3, theme_1.colors.black.dark, theme_1.fontWeights.regular, theme_1.fontSizes.h3, theme_1.space[2], mediaQuery_1.generateQuery("max-width", "sm", "\n    font-size: " + theme_1.fontSizes.h4 + "px;\n    height: 52px;\n  "), theme_1.colors.black._5, theme_1.colors.black._20, function (props) { return props.error ? theme_1.colors.red : theme_1.colors.blue.royal; }, theme_1.colors.black._8, function (props) { return props.error ? theme_1.colors.red : theme_1.colors.black.half; }, theme_1.colors.black._8);
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.renderLabel = function (label) {
        if (label) {
            return React.createElement(Label, null, label);
        }
        return null;
    };
    Input.prototype.renderErrorLabel = function (error, errorMessage) {
        if (error && errorMessage) {
            return React.createElement(ErrorLabel, null, errorMessage);
        }
        return null;
    };
    Input.prototype.render = function () {
        var _a = this.props, label = _a.label, error = _a.error, errorMessage = _a.errorMessage, 
        // input
        disabled = _a.disabled, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onDragStart = _a.onDragStart, onDrop = _a.onDrop, onFocus = _a.onFocus, placeholder = _a.placeholder, type = _a.type, value = _a.value, props = __rest(_a, ["label", "error", "errorMessage", "disabled", "name", "onBlur", "onChange", "onDragStart", "onDrop", "onFocus", "placeholder", "type", "value"]);
        return (React.createElement(Wrapper, __assign({}, props),
            this.renderLabel(label),
            React.createElement(StyledInput, { disabled: disabled, name: name, onBlur: onBlur, onChange: onChange, onDragStart: onDragStart, onDrop: onDrop, onFocus: onFocus, placeholder: placeholder, type: type, value: value, error: error }),
            this.renderErrorLabel(error, errorMessage)));
    };
    Input.defaultProps = {
        // space
        m: 0,
    };
    return Input;
}(React.Component));
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
