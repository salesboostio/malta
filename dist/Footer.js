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
var styled_components_1 = require("styled-components");
var theme = require("styled-system").theme;
var theme_1 = require("./theme");
var mediaQuery_1 = require("./tools/mediaQuery");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), theme_1.colors.black.dark);
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: ", ";\n  padding-left: ", "px;\n  margin-left: auto;\n  margin-right: auto;\n\n  ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  height: ", ";\n  padding-left: ", "px;\n  margin-left: auto;\n  margin-right: auto;\n\n  ", ";\n"])), theme_1.footerHeight, theme_1.space[3], mediaQuery_1.generateQuery("max-width", "xs", "padding-left: 0;"));
var Copyright = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n\n  ", ";\n"])), theme_1.colors.white.standard, theme_1.fontSizes.h5, theme_1.fontWeights.demiLight, mediaQuery_1.generateQuery("max-width", "xs", "margin: 0 auto;"));
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(Container, null,
                React.createElement(Copyright, null, "Copyright \u00A9 2018 Salesboost. Inc"))));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
var templateObject_1, templateObject_2, templateObject_3;
