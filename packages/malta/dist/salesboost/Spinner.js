"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var ballbeat = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.3);\n    opacity: 0.2;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.3);\n    opacity: 0.2;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n"])));
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  width: max-content;\n  animation-fill-mode: both;\n  ", "\n  > div {\n    width: ", "px;\n    height: ", "px;\n    display: inline-block;\n    border-radius: 50%;\n    margin: ", "px;\n    ", "\n    animation: ", " ", "s 0s infinite ease-out;\n    &:nth-child(2){\n      animation-delay: ", "s !important;\n    }\n    &:nth-child(3){\n      animation-delay: ", "s !important;\n    }\n  }\n"], ["\n  display: ", ";\n  width: max-content;\n  animation-fill-mode: both;\n  ", "\n  > div {\n    width: ", "px;\n    height: ", "px;\n    display: inline-block;\n    border-radius: 50%;\n    margin: ", "px;\n    ", "\n    animation: ", " ", "s 0s infinite ease-out;\n    &:nth-child(2){\n      animation-delay: ", "s !important;\n    }\n    &:nth-child(3){\n      animation-delay: ", "s !important;\n    }\n  }\n"])), function (props) { return props.show ? "flex" : "none"; }, styled_system_1.space, function (props) { return props.scale * 12; }, function (props) { return props.scale * 12; }, function (props) { return props.scale * 3; }, styled_system_1.color, ballbeat, function (props) { return props.duration * 1; }, function (props) { return props.duration * 0.15; }, function (props) { return props.duration * 0.3; });
exports.Spinner = function (props) { return (React.createElement(Wrapper, __assign({}, props),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.Spinner.defaultProps = {
    show: true,
    duration: 1.0,
    scale: 1.0,
    bg: "rgba(22, 27, 72, 0.3)"
};
var templateObject_1, templateObject_2;
