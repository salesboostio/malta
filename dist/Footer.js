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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var theme_1 = require("./theme");
var Flex_1 = require("./Flex");
var grid_styled_1 = require("grid-styled");
var Container = Flex_1.Flex.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", ";\n  align-items: center;\n"], ["\n  background-color: ", ";\n  height: ", ";\n  align-items: center;\n"])), theme_1.colors.black.dark, theme_1.footerHeight);
var Copyright = grid_styled_1.Box.extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n"])), theme_1.colors.white.standard, theme_1.fontSizes.h5, theme_1.fontWeights.demiLight);
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement(Container, { pl: [0, 3, 3], mx: "auto" },
            React.createElement(Copyright, { mx: ["auto", "auto", "0px"] }, "Copyright \u00A9 2018 Salesboost. Inc")));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
var templateObject_1, templateObject_2;
