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
var styled_components_1 = require("styled-components");
var _a = require("styled-system"), height = _a.height, space = _a.space, width = _a.width;
var StyledImg = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n"], ["\n    ", "\n    ", "\n    ", "\n"])), height, space, width);
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Img.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
        return (React.createElement(StyledImg, __assign({ width: width, height: height }, props)));
    };
    Img.defaultProps = {
        src: "",
        // height
        height: "auto",
        // space
        m: 0,
        // width
        width: 100,
    };
    return Img;
}(React.Component));
exports.Img = Img;
var templateObject_1;
