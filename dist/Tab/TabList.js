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
var _a = require("styled-system"), borderColor = _a.borderColor, color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space, textAlign = _a.textAlign, width = _a.width;
var StyledTabList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  white-space: nowrap;\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  position: relative;\n  white-space: nowrap;\n"])), color, fontSize, fontWeight, lineHeight, space, textAlign, width);
var TabList = /** @class */ (function (_super) {
    __extends(TabList, _super);
    function TabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabList.prototype.render = function () {
        return (React.createElement(StyledTabList, __assign({}, this.props), this.props.children));
    };
    TabList.defaultProps = {
        // color
        color: "black.dark",
        bg: "white",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "demiLight",
        // lineHeight
        lineHeight: "1.11",
        // space
        m: 0,
        mb: 3,
        p: 2,
        // textAlign
        align: "center",
        // width
        width: 440,
    };
    return TabList;
}(React.Component));
exports.TabList = TabList;
var templateObject_1;
