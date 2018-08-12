"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Flex_1 = require("../atoms/Flex");
var Text_1 = require("../atoms/Text");
var SalesboostFooter = /** @class */ (function (_super) {
    __extends(SalesboostFooter, _super);
    function SalesboostFooter(props) {
        return _super.call(this, props) || this;
    }
    SalesboostFooter.prototype.render = function () {
        var _a = this.props, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, bg = _a.bg, height = _a.height;
        return (React.createElement(Flex_1.Flex, { alignItems: "center", justifyContent: "center", bg: bg, height: height },
            React.createElement(Text_1.Text, { color: color, fontFamily: fontFamily, fontSize: fontSize, width: "fit-content", height: "fit-content" }, "Copyright \u00A9 2018 Salesboost. Inc")));
    };
    SalesboostFooter.defaultProps = {
        color: "black.hint",
        bg: "black._20",
        fontSize: ["h4", "h3", "h3"],
        fontFamily: "Arial",
        height: ["32px", "50px"]
    };
    return SalesboostFooter;
}(React.Component));
exports.SalesboostFooter = SalesboostFooter;
