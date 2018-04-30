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
import * as React from "react";
import * as classNames from "classnames";
import styled from "styled-components";
import { $white, $primary, $secondary } from "./_variables/colors";
import { $fontSizeMd, $fontWeightBold } from "./_variables/fonts";
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 1rem;\n  cursor: pointer;\n  width: ", ";\n  color: ", ";\n  background: ", ";\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 1rem;\n  cursor: pointer;\n  width: ", ";\n  color: ", ";\n  background: ", ";\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"])), $fontSizeMd, $fontWeightBold, function (props) { return props.width || "100%"; }, function (props) { return props.btnType === "primary" ? $white : $primary; }, function (props) { return props.btnType === "primary" ? $primary : "transparent"; }, function (props) { return props.btnType === "primary" ? $secondary : "transparent"; }, function (props) { return props.btnType === "primary" ? $white : $secondary; });
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, props) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, _b = _a.prefixCls, prefixCls = _b === void 0 ? "sb-button" : _b, className = _a.className, children = _a.children, props = __rest(_a, ["prefixCls", "className", "children"]);
        var classString = classNames(prefixCls, className);
        return (React.createElement(StyledButton, __assign({ className: classString }, props), children));
    };
    return Button;
}(React.Component));
export { Button };
var templateObject_1;