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
var grid_styled_1 = require("grid-styled");
var theme_1 = require("./theme");
var mediaQuery_1 = require("./tools/mediaQuery");
var StyledBox = grid_styled_1.Box.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ",
    ";\n  ", ";\n  ", ";\n"])), function (props) { return props.display && "\n    display: " + props.display + ";\n  "; }, function (props) { return props.hiddendown && mediaQuery_1.hiddenDown(props.hiddendown); }, function (props) { return props.hiddenup && mediaQuery_1.hiddenUp(props.hiddenup); });
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        return (React.createElement(StyledBox, __assign({}, this.props, { mx: "auto", style: { maxWidth: this.props.maxWidth || theme_1.containerWidth } }), this.props.children));
    };
    return Container;
}(React.Component));
exports.Container = Container;
var templateObject_1;
