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
var core_1 = require("../core");
var ButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  cursor: ", ";\n  border-radius: 2px;\n  :hover {\n    ", "\n  }\n  transition: all 0.15s ease-out;\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n  ", "\n  ", "\n  cursor: ", ";\n  border-radius: 2px;\n  :hover {\n    ", "\n  }\n  transition: all 0.15s ease-out;\n"])), styled_system_1.width, styled_system_1.height, styled_system_1.space, function (props) { return props.disabled ? "not-allowed" : "pointer"; }, function (props) { return props.disabled ? "" : "background: rgba(22,27,72,0.1);"; });
exports.IconButton = function (props) {
    var name = props.name, size = props.size, disabled = props.disabled, color = props.color, hover = props.hover, rest = __rest(props, ["name", "size", "disabled", "color", "hover"]);
    return (React.createElement(ButtonWrapper, __assign({}, rest, { disabled: disabled }),
        React.createElement(core_1.Icon, { name: name, size: size, color: color, hover: hover })));
};
exports.IconButton.defaultProps = {
    size: 24,
    width: "40px",
    height: "40px",
    disabled: false,
    color: "rgba(22,27,72,0.8)",
};
var templateObject_1;
