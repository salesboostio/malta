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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var core_1 = require("../core");
var styled_system_1 = require("styled-system");
var COLOR_DISABLED = "rgba(22,27,72,0.6)";
var COLOR_CHECKED = "#454EDF";
var COLOR_UNCHECKED = "#FFF";
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  background: ", ";\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  border-radius: 2px;\n  border: 1px solid rgba(22,27,72,0.2);\n  :hover {\n    ", "\n    ", "\n  }\n  ", "\n  transition: all 0.15s ease-out;\n"], ["\n  display: flex;\n  background: ",
    ";\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: ", ";\n  border-radius: 2px;\n  border: 1px solid rgba(22,27,72,0.2);\n  :hover {\n    ", "\n    ", "\n  }\n  ", "\n  transition: all 0.15s ease-out;\n"])), function (props) { return (props.disabled ?
    props.checked ? "rgba(22,27,72,0.6)" : "rgba(22,27,72,0.1)"
    : props.checked ? COLOR_CHECKED : COLOR_UNCHECKED); }, function (props) { return props.disabled ? "not-allowed" : "pointer"; }, function (props) { return props.disabled ? "" : props.checked ? "" : "border: 1px solid rgba(22,27,72,0.8);"; }, function (props) { return props.disabled ? "" : props.checked ? "background: #161FBA;" : ""; }, styled_system_1.space);
exports.Checkbox = function (props) {
    var checked = props.checked, disabled = props.disabled, onClick = props.onClick, rest = __rest(props, ["checked", "disabled", "onClick"]);
    return (React.createElement(Wrapper, __assign({ checked: checked, disabled: disabled, onClick: disabled ? function () { } : onClick }, rest), checked ? React.createElement(core_1.Icon, { name: "check", color: "#FFF", size: 16 }) : null));
};
exports.Checkbox.defaultProps = {
    disabled: false,
    checked: false,
};
var templateObject_1;
