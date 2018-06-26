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
var react_select_1 = require("react-select");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: ", "px;\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: ", "px;\n"])), theme_1.colors.black.dark, theme_1.fontSizes.h4, theme_1.fontWeights.demiLight, theme_1.space[1]);
var styles = {
    control: function (styles, props) {
        var isDisabled = props.isDisabled;
        return __assign({}, styles, { backgroundColor: isDisabled ? theme_1.colors.black._5 : theme_1.colors.white.standard, borderWidth: 1, borderRadius: 2, borderColor: theme_1.colors.black._20, boxShadow: "0 2px 6px 2px " + theme_1.colors.black._3, height: "60px" });
    },
    valueContainer: function (styles) {
        return __assign({}, styles, { color: theme_1.colors.black.dark, fontSize: theme_1.fontSizes.h3, fontWeight: theme_1.fontWeights.regular, padding: "0 " + theme_1.space[2] + "px" });
    },
    indicatorSeparator: function (styles) {
        return {
            display: "none",
        };
    },
    placeholder: function (styles) {
        return __assign({}, styles, { color: theme_1.colors.black.hint, fontSize: theme_1.fontSizes.h3, fontWeight: theme_1.fontWeights.regular });
    },
    menu: function (styles) {
        return __assign({}, styles, { borderRadius: 2 });
    },
    option: function (styles, props) {
        var isFocused = props.isFocused;
        return __assign({}, styles, { alignItems: "center", backgroundColor: isFocused ? theme_1.colors.black._5 : theme_1.colors.white.standard, color: theme_1.colors.black.dark, display: "flex", fontSize: theme_1.fontSizes.h3, fontWeight: theme_1.fontWeights.regular, height: "60px", padding: "0 " + theme_1.space[2] + "px", ":active": {
                backgroundColor: theme_1.colors.black._5,
            } });
    },
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.renderLabel = function () {
        var label = this.props.label;
        if (label) {
            return React.createElement(Label, null, label);
        }
        return null;
    };
    Select.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, disabled = _a.disabled, items = _a.items, onChange = _a.onChange;
        return (React.createElement(Wrapper, null,
            this.renderLabel(),
            React.createElement(react_select_1.default, { placeholder: placeholder || "", isDisabled: disabled, name: "item", options: items, styles: styles, onChange: onChange })));
    };
    Select.defaultProps = {
        items: [],
    };
    return Select;
}(React.Component));
exports.Select = Select;
var templateObject_1, templateObject_2;
