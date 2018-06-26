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
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign, width = _a.width;
var AccordionItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  user-select: none;\n"], ["\n  cursor: pointer;\n  user-select: none;\n"])));
var AccordionText = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  display: ", ";\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  display: ", ";\n"])), color, fontSize, fontWeight, lineHeight, space, textAlign, width, function (props) { return props.showText ? "block" : "none"; });
var StyledAccordion = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accordion.prototype.nl2br = function (text) {
        var newline = "\n";
        if (typeof text === "number") {
            return text;
        }
        else if (typeof text !== "string") {
            return "";
        }
        var lines = text.split(newline);
        return lines.map(function (line, i) {
            return (React.createElement("span", { key: i },
                line,
                React.createElement("br", null)));
        });
    };
    Accordion.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, showText = _a.showText;
        return (React.createElement(StyledAccordion, null,
            React.createElement(AccordionItem, { onClick: onClick }, this.props.children),
            React.createElement(AccordionText, __assign({}, this.props), this.nl2br(this.props.text))));
    };
    Accordion.defaultProps = {
        // color
        color: "black.dark",
        // fontSize
        fontSize: "h5",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
        // placement
        placement: "bottom",
        // space
        m: 0,
        p: 0,
        // textAlign
        align: "left",
        // width
        width: 320,
        // event
        onClick: function () { },
        // options
        showText: false,
    };
    return Accordion;
}(React.Component));
exports.Accordion = Accordion;
var templateObject_1, templateObject_2, templateObject_3;
