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
var Text_1 = require("../atoms/Text");
var styled_system_1 = require("styled-system");
var Flex_1 = require("../atoms/Flex");
var StyledChip = Flex_1.StyledFlex.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  font-size: 16px;\n  padding: 8px;\n  width: fit-content;\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  font-size: 16px;\n  padding: 8px;\n  width: fit-content;\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.width, styled_system_1.height, styled_system_1.borderRadius);
var Chip = /** @class */ (function (_super) {
    __extends(Chip, _super);
    function Chip(props) {
        return _super.call(this, props) || this;
    }
    Chip.prototype.render = function () {
        var _a = this.props, children = _a.children, color = _a.color, props = __rest(_a, ["children", "color"]);
        return (React.createElement(StyledChip, __assign({}, props),
            React.createElement(Text_1.StyledText, { color: color, center: true, demiLight: true }, children)));
    };
    return Chip;
}(React.Component));
exports.Chip = Chip;
var templateObject_1;
