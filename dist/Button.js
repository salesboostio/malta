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
var _a = require("styled-system"), borderColor = _a.borderColor, borderRadius = _a.borderRadius, borders = _a.borders, color = _a.color, fontSize = _a.fontSize, height = _a.height, space = _a.space, width = _a.width;
var mediaQuery_1 = require("./tools/mediaQuery");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n  }\n"], ["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ",
    ";\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n  }\n"])), borderColor, borderRadius, borders, color, fontSize, space, width, height, mediaQuery_1.generateQuery("max-width", "sm", "\n    font-size: " + theme_1.fontSizes.h5 + "px;\n    height: 52px;\n  "), theme_1.colors.blue.deep, theme_1.colors.blue.dark);
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement(StyledButton, __assign({}, this.props)));
    };
    Button.defaultProps = {
        onClick: function () { },
        // borderColor
        borderColor: "transparent",
        // borderRadius
        borderRadius: "30px",
        // borders
        border: "none",
        // color
        color: "white.standard",
        bg: "blue.royal",
        // fontSize
        fontSize: "h3",
        // height
        height: "60px",
        // space
        m: 0,
        mb: 2,
        px: 3,
        // width
        width: "auto",
    };
    return Button;
}(React.Component));
exports.Button = Button;
var templateObject_1;
