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
    };
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var styled_system_1 = require("styled-system");
var Portal_1 = require("./Portal");
var fadeIn = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var fadeOut = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));
var slideIn = function (amount) { return styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    transform: translateX(", "px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n"], ["\n  0% {\n    transform: translateX(", "px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n"])), amount); };
var slideOut = function (amount) { return styled_components_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(", "px);\n  }\n"], ["\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(", "px);\n  }\n"])), amount); };
var Overlay = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  background: rgba(101, 103, 131, 0.25);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000;\n  animation: ", " 0.25s ease-in-out 1 normal both;\n"], ["\n  display: block;\n  background: rgba(101, 103, 131, 0.25);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000;\n  animation: ", " 0.25s ease-in-out 1 normal both;\n"])), function (props) { return props.closing ? fadeOut : fadeIn; });
var Container = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  border-radius: 16px;\n  z-index: 1100;\n  box-shadow: 0 4px 10px 4px rgba(22,27,72,0.08);\n\n  ", "\n  ", "\n  ", "\n\n  top: 8px;\n  ", ": 8px;\n  height: calc(100vh - 16px);\n  animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n\n  @media screen and (min-width: 600px) {\n    top: 16px;\n    ", ": 16px;\n    height: calc(100vh - 32px);\n    animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n  }\n\n  @media screen and (min-width: 1200px) {\n    animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n  }\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  border-radius: 16px;\n  z-index: 1100;\n  box-shadow: 0 4px 10px 4px rgba(22,27,72,0.08);\n\n  ", "\n  ", "\n  ", "\n\n  top: 8px;\n  ", ": 8px;\n  height: calc(100vh - 16px);\n  animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n\n  @media screen and (min-width: 600px) {\n    top: 16px;\n    ", ": 16px;\n    height: calc(100vh - 32px);\n    animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n  }\n\n  @media screen and (min-width: 1200px) {\n    animation: ", " 0.5s cubic-bezier(0.3, 1, 0.32, 1) 1 normal both;\n  }\n"])), styled_system_1.width, styled_system_1.color, styled_system_1.space, function (props) { return props.left ? "left" : "right"; }, function (props) { return props.closing ? slideOut((props.left ? -1 : 1) * props.slide[0]) : slideIn((props.left ? -1 : 1) * props.slide[0]); }, function (props) { return props.left ? "left" : "right"; }, function (props) { return props.closing ? slideOut((props.left ? -1 : 1) * props.slide[1]) : slideIn((props.left ? -1 : 1) * props.slide[1]); }, function (props) { return props.closing ? slideOut((props.left ? -1 : 1) * props.slide[2]) : slideIn((props.left ? -1 : 1) * props.slide[2]); });
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
            closing: false,
        };
        _this.handleOpen = function () {
            _this.setState({ open: true, closing: false });
        };
        _this.handleClose = function () {
            _this.setState(__assign({}, _this.state, { closing: true }));
            setTimeout(function () {
                _this.setState({ open: false, closing: false });
            }, 500);
        };
        return _this;
    }
    Drawer.prototype.render = function () {
        var _a = this.props, render = _a.render, opener = _a.opener, rest = __rest(_a, ["render", "opener"]);
        return (React.createElement(React.Fragment, null,
            opener({ handleOpen: this.handleOpen }),
            this.state.open ?
                React.createElement(Portal_1.Portal, null,
                    React.createElement(Overlay, { onClick: this.handleClose, closing: this.state.closing }),
                    React.createElement(Container, __assign({ closing: this.state.closing }, rest), render({ handleClose: this.handleClose })))
                : null));
    };
    return Drawer;
}(React.Component));
exports.Drawer = Drawer;
Drawer.defaultProps = {
    width: ["320px", "420px", "512px"],
    slide: [400, 500, 600],
    left: false,
    bg: "#FFF",
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
