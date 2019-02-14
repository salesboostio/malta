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
var styled_system_1 = require("styled-system");
var Spinner_1 = require("./Spinner");
var core_1 = require("../core");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  position: relative;\n  background: ", ";\n  height: 24px;\n  width: 44px;\n  border-radius: 12px;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n  cursor: pointer;\n  transition: background 0.1s ease-out;\n  :hover {\n     background: ", ";\n  }\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  position: relative;\n  background: ", ";\n  height: 24px;\n  width: 44px;\n  border-radius: 12px;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n  cursor: pointer;\n  transition: background 0.1s ease-out;\n  :hover {\n     background: ", ";\n  }\n  ", "\n"])), function (props) { return (props.disabled ? "rgba(22,27,72,0.2)" : props.checked ? "#23C1A6" : "rgba(22,27,72,0.2)"); }, function (props) { return (props.disabled ? "rgba(22,27,72,0.2)" : props.checked ? "#0ea58a" : "rgba(22,27,72,0.3)"); }, styled_system_1.space);
var Circle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: ", ";\n  transform: translateX(", "px);\n  transition: transform 0.1s ease-out;\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: ", ";\n  transform: translateX(", "px);\n  transition: transform 0.1s ease-out;\n"])), function (props) { return props.disabled ? "rgba(255,255,255,0.6)" : "#FFF"; }, function (props) { return props.checked ? "20" : "0"; });
exports.Switch = function (props) {
    var checked = props.checked, onClick = props.onClick, disabled = props.disabled, loading = props.loading, rest = __rest(props, ["checked", "onClick", "disabled", "loading"]);
    return (React.createElement(Wrapper, __assign({ checked: checked, disabled: disabled, onClick: disabled ? function () { } : onClick }, rest), loading ?
        React.createElement(core_1.Flex, { alignItems: "center", justifyContent: "center", width: "100%", height: "100%" },
            React.createElement(Spinner_1.Spinner, { scale: 0.5, color: "#FFF" }))
        : React.createElement(Circle, { checked: checked, disabled: disabled })));
};
exports.Switch.defaultProps = {
    disabled: false,
    checked: false,
    loading: false,
    onClick: function () { }
};
var templateObject_1, templateObject_2;
