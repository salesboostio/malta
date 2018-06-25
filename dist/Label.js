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
var _a = require("styled-system"), borderColor = _a.borderColor, borderRadius = _a.borderRadius, borders = _a.borders, color = _a.color, fontSize = _a.fontSize, height = _a.height, space = _a.space, width = _a.width;
var StyledLabel = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  text-align: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ";\n"], ["\n  display: inline-block;\n  text-align: center;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ",
    ";\n"])), borderColor, borderRadius, borders, color, fontSize, space, width, height, function (props) { return props.height && "\n    line-height: " + props.height + ";\n  "; });
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        return (React.createElement(StyledLabel, __assign({}, this.props)));
    };
    Label.defaultProps = {
        onClick: function () { },
        // borderColor
        borderColor: "transparent",
        // borders
        border: "none",
        // color
        color: "white.standard",
        bg: "blue.royal",
        // fontSize
        fontSize: "h5",
        // height
        height: "auto",
        // space
        m: 0,
        px: "4px",
        // width
        width: "auto",
    };
    return Label;
}(React.Component));
exports.Label = Label;
var templateObject_1;
