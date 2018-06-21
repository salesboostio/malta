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
var theme_1 = require("../theme");
var _a = require("styled-system"), border = _a.border, borderColor = _a.borderColor, color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign, width = _a.width;
var StyledTab = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: -1px;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: -1px;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  ",
    "\n"])), border, borderColor, color, fontSize, fontWeight, lineHeight, space, textAlign, width, function (props) { return props.selected && "\n    background-color: " + theme_1.colors.white.standard + ";\n    border-top: solid 2px " + theme_1.colors.blue.royal + ";\n    border-bottom: none;\n    color: " + theme_1.colors.blue.deep + ";\n    font-weight: " + theme_1.fontWeights.regular + ";\n    padding-top: 31px;\n  "; });
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, onClick = _a.onClick;
        return (React.createElement(StyledTab, __assign({}, this.props, { onClick: onClick }), this.props.children));
    };
    Tab.defaultProps = {
        // border
        border: "solid 1px",
        borderColor: "black._20",
        // color
        color: "black.dark",
        bg: "black._3",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "demiLight",
        // lineHeight
        lineHeight: "1.11",
        // space
        m: 0,
        px: 0,
        py: 3,
        // textAlign
        align: "center",
        // width
        width: 0.5,
    };
    return Tab;
}(React.Component));
exports.Tab = Tab;
var templateObject_1;
