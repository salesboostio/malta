"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var Flex_1 = require("../atoms/Flex");
var Box_1 = require("../atoms/Box");
var Text_1 = require("../atoms/Text");
var theme_1 = require("../commons/theme");
var Spinner_1 = require("./Spinner");
var utils_1 = require("../commons/utils");
var Wrapper = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"])), function (props) { return props.disabled ? "not-allowed" : props.loading ? "progress" : "pointer"; }, styled_system_1.color, styled_system_1.fontSize, styled_system_1.borderColor, styled_system_1.borderRadius, styled_system_1.border, function (props) { return props.disabled ? utils_1.getValueFromTheme(theme_1.colors, "black._20") : utils_1.getValueFromTheme(theme_1.colors, props.bg); }, function (props) { return props.disabled ? theme_1.colors.black._20 : utils_1.getValueFromTheme(theme_1.colors, props.hoverColor); });
var AsyncButton = /** @class */ (function (_super) {
    __extends(AsyncButton, _super);
    function AsyncButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsyncButton.prototype.render = function () {
        var _a = this.props, color = _a.color, fontSize = _a.fontSize, label = _a.label, loading = _a.loading, disabled = _a.disabled, onClick = _a.onClick, width = _a.width, props = __rest(_a, ["color", "fontSize", "label", "loading", "disabled", "onClick", "width"]);
        return (React.createElement(Wrapper, __assign({}, props, { onClick: disabled ? function () { } : onClick, disabled: disabled }), loading ? React.createElement(Box_1.Box, { width: width },
            React.createElement(Spinner_1.Spinner, { color: "white.standard" })) : React.createElement(Text_1.Text, { fontSize: fontSize, color: color }, label)));
    };
    return AsyncButton;
}(React.Component));
exports.AsyncButton = AsyncButton;
AsyncButton.defaultProps = {
    borderColor: "transparent",
    borderRadius: ["26px", "30px"],
    border: "none",
    fontSize: ["h5", "h3"],
    height: ["52px", "60px"],
    px: 3,
    bg: "blue.royal",
    color: "white.standard",
    hoverColor: "blue.deep",
    disabled: false,
    loading: false,
    label: "Button",
    width: "fit-content"
};
var templateObject_1;
