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
exports.StyledOverlay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  opacity: 0.4\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n  width: 100%;\n  height: 100%;\n  background: #000;\n"], ["\n  ", "\n  ", "\n  opacity: 0.4\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n  width: 100%;\n  height: 100%;\n  background: #000;\n"])), styled_system_1.left, styled_system_1.top);
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isVisible: false
        };
        _this.close = _this.close.bind(_this);
        _this.open = _this.open.bind(_this);
        return _this;
    }
    Overlay.prototype.close = function () {
        this.setState({ isVisible: false });
    };
    Overlay.prototype.open = function () {
        this.setState({ isVisible: false });
    };
    Overlay.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (this.state.isVisible && React.createElement(exports.StyledOverlay, __assign({}, props, { onClick: this.close }),
            " ",
            children,
            " "));
    };
    return Overlay;
}(React.Component));
exports.Overlay = Overlay;
var templateObject_1;
