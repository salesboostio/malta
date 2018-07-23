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
var ImgResponsive_1 = require("./ImgResponsive");
var theme_1 = require("./theme");
var grid_styled_1 = require("grid-styled");
var Text_1 = require("./Text");
var Wrapper = grid_styled_1.Box.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", ";\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 1000;\n"], ["\n  background-color: ", ";\n  height: ", ";\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 1000;\n"])), theme_1.colors.white._75, theme_1.navBarHeight);
var FlexHeader = grid_styled_1.Flex.extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", "\n"], ["\n  height: ", "\n"])), theme_1.navBarHeight);
var Title = function (props) { return (React.createElement(Text_1.Text, { display: ["none", "none", "block"], align: "right", fontSize: theme_1.fontSizes.h5, fontWeight: theme_1.fontWeights.regular }, props.children)); };
var Description = function (props) { return (React.createElement(Text_1.Text, { display: ["none", "none", "block"], align: "right", fontSize: theme_1.fontSizes.h5, fontWeight: theme_1.fontWeights.regular, mt: "4px", color: theme_1.colors.black.sub }, props.children)); };
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a = this.props, logoUrl = _a.logoUrl, title = _a.title, description = _a.description;
        return (React.createElement(Wrapper, null,
            React.createElement(FlexHeader, { alignItems: "center", mx: "auto", px: [2, 2, 3] },
                React.createElement("a", { href: "/" },
                    React.createElement(ImgResponsive_1.Img, { src: logoUrl, width: [96, 96, 125], height: [26, 26, 34] })),
                React.createElement(grid_styled_1.Box, { flex: 1 },
                    React.createElement(Title, null, title),
                    React.createElement(Description, null, description)))));
    };
    return Navbar;
}(React.Component));
exports.Navbar = Navbar;
var templateObject_1, templateObject_2;
