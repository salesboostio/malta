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
var theme_1 = require("./theme");
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space;
var StyledCheckbox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block\n  margin-right: 8px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 2px;\n  background-color: ", ";\n  border: solid 1px ", ";\n  vertical-align: middle;\n\n  & svg {\n    position: absolute;\n    left: 0;\n    & polyline {\n      fill: none;\n      stroke: ", ";\n      stroke-width: ", ";\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      transition: all .3s ease;\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block\n  margin-right: 8px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 2px;\n  background-color: ", ";\n  border: solid 1px ", ";\n  vertical-align: middle;\n\n  & svg {\n    position: absolute;\n    left: 0;\n    & polyline {\n      fill: none;\n      stroke: ", ";\n      stroke-width: ", ";\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      transition: all .3s ease;\n    }\n  }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, theme_1.colors.white.standard, theme_1.colors.black._20, theme_1.colors.white.standard, function (props) { return props.lineThickness; }, function (props) { return props.size; }, function (props) { return props.size; });
var Label = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  pointer-events: none;\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  pointer-events: none;\n  display: inline-block;\n  vertical-align: middle;\n"])), color, fontSize, fontWeight, lineHeight);
var Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n"], ["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n"])));
var Wrapper = styled_components_1.default.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0;\n\n  & ", " {\n    ", ";\n    ", ";\n  }\n  & ", " {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &:hover {\n    & ", " {\n      ", ";\n    }\n    & ", " {\n      ", ";\n      ", ";\n    }\n  }\n"], ["\n  ", "\n\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0;\n\n  & ", " {\n    ",
    ";\n    ",
    ";\n  }\n  & ", " {\n    ",
    ";\n    ",
    ";\n    ",
    ";\n    ",
    ";\n  }\n\n  &:hover {\n    & ", " {\n      ",
    ";\n    }\n    & ", " {\n      ",
    ";\n      ",
    ";\n    }\n  }\n"])), space, Label, function (props) { return props.checked && "\n      color: " + theme_1.colors.blue.royal + ";\n    "; }, function (props) { return props.disabled && "\n      color: " + theme_1.colors.black.sub + ";\n    "; }, StyledCheckbox, function (props) { return props.checked && "\n    background-color: " + theme_1.colors.blue.royal + ";\n    border-color: " + theme_1.colors.blue.royal + ";\n    & svg {\n      & polyline {\n        stroke-dashoffset: 0;\n      }\n    }\n    "; }, function (props) { return props.disabled && "\n      border-color: " + theme_1.colors.black._20 + ";\n      cursor: not-allowed;\n    "; }, function (props) { return props.checked && props.disabled && "\n      background-color: " + theme_1.colors.black.sub + ";\n    "; }, function (props) { return !props.checked && props.disabled && "\n      background-color: " + theme_1.colors.black._10 + ";\n    "; }, Label, function (props) { return props.checked && !props.disabled && "\n        color: " + theme_1.colors.blue.deep + ";\n      "; }, StyledCheckbox, function (props) { return props.checked && !props.disabled && "\n        background-color: " + theme_1.colors.blue.deep + ";\n        border-color: " + theme_1.colors.blue.deep + ";\n      "; }, function (props) { return !props.checked && !props.disabled && "\n        border-color: " + theme_1.colors.black.standard + ";\n      "; });
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.renderCheckLinePoints = function (size) {
        return (size * 0.2) + " " + (size * 0.45) + " "
            + (size * 0.45) + " " + (size * 0.72) + " "
            + (size * 0.8) + " " + (size * 0.25);
    };
    Checkbox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, lineThickness = _a.lineThickness, id = _a.id, name = _a.name, onChange = _a.onChange, size = _a.size;
        return (React.createElement(Wrapper, __assign({}, { checked: checked, disabled: disabled }),
            React.createElement(Input, { type: "checkbox", id: id, name: name, checked: checked, disabled: disabled, onChange: onChange }),
            React.createElement(StyledCheckbox, { lineThickness: lineThickness, size: size },
                React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 " + size + " " + size },
                    React.createElement("polyline", { points: this.renderCheckLinePoints(Number(size)) }))),
            React.createElement(Label, __assign({}, this.props), this.props.children)));
    };
    Checkbox.defaultProps = {
        checked: false,
        // color
        color: "black.standard",
        // fontSize
        fontSize: "h4",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
        // event
        onChange: function () { },
        // options
        lineThickness: 3,
        size: 18,
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
