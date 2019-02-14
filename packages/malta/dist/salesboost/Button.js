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
var Spinner_1 = require("./Spinner");
var SolidStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :hover {\n    background: ", ";\n  }\n  ", "\n  ", "\n"], ["\n  :hover {\n    background: ", ";\n  }\n  ", "\n  ", "\n"])), function (props) { return props.hoverBg; }, function (props) { return props.disabled ? "background: rgba(22,27,72,0.3) !important;" : ""; }, styled_system_1.color);
var LineStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.04);\n  border: 1px solid rgba(22,27,72,0.2);\n  :hover {\n    box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.08);\n    border: 1px solid rgba(22,27,72,0.4);\n  }\n  ", "\n"], ["\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.04);\n  border: 1px solid rgba(22,27,72,0.2);\n  :hover {\n    box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.08);\n    border: 1px solid rgba(22,27,72,0.4);\n  }\n  ", "\n"])), function (props) { return props.disabled ? "background: rgba(22,27,72,0.1)!important; box-shadow: none!important; border: none!important;" : ""; });
var Wrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  transition: all 0.15s ease-out;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  transition: all 0.15s ease-out;\n  ", "\n"])), function (props) { return props.loading ? "progress" : props.disabled ? "not-allowed" : "pointer"; }, styled_system_1.height, styled_system_1.width, styled_system_1.space, styled_system_1.borderRadius, function (props) { return props.line ? LineStyle : SolidStyle; });
var Text = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  font-weight: normal;\n  color: ", ";\n"], ["\n  ", "\n  font-weight: normal;\n  color: ", ";\n"])), styled_system_1.fontSize, function (props) { return props.color ? props.color : props.line ? "rgba(22,27,72,0.9)" : "#FFF"; });
exports.Button = function (props) {
    var bg = props.bg, color = props.color, fontSize = props.fontSize, loading = props.loading, label = props.label, line = props.line, onClick = props.onClick, disabled = props.disabled, rest = __rest(props, ["bg", "color", "fontSize", "loading", "label", "line", "onClick", "disabled"]);
    return (React.createElement(Wrapper, __assign({ disabled: disabled, line: line, loading: loading, onClick: (disabled || loading) ? function () { } : onClick, bg: bg }, rest), loading ?
        React.createElement(Spinner_1.Spinner, null)
        : React.createElement(Text, { disabled: disabled, line: line, fontSize: fontSize, color: color }, label)));
};
exports.Button.defaultProps = {
    line: false,
    loading: false,
    height: "60px",
    px: "32px",
    fontSize: "18px",
    borderRadius: "30px",
    bg: "rgba(69, 78, 223, 0.9)",
    hoverBg: "rgba(69, 78, 223, 0.7)",
    width: "fit-content",
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
