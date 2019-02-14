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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../core");
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var Wrapper = styled_components_1.default(core_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styled_system_1.display);
var RadioButtonWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  ", ";\n  border-radius: 50%;\n  background: ", ";\n  :hover {\n    ", "\n  }\n"], ["\n  ", "\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  ",
    ";\n  border-radius: 50%;\n  background: ",
    ";\n  :hover {\n    ", "\n  }\n"])), styled_system_1.space, function (props) {
    if (props.disabled && !props.checked) {
        return "border: 1px solid  rgba(22, 27, 72, 0.2)";
    }
    else if (!props.checked) {
        return "border: 1px solid rgba(22, 27, 72, 0.2)";
    }
}, function (props) {
    if (props.disabled) {
        if (props.checked) {
            return "rgba(22, 27, 72, 0.6)";
        }
        else {
            return "rgba(22, 27, 72, 0.2)";
        }
    }
    else {
        if (props.checked) {
            return "#454EDF";
        }
        else {
            return "#FFFFFF";
        }
    }
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled ? "border-color: rgba(22, 27, 72, 0.8);" : "";
});
var Fill = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  background: #ffffff;\n"], ["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  background: #ffffff;\n"])));
exports.RadioButton = function (props) {
    var styles = __rest(props, []);
    return (react_1.default.createElement(Wrapper, { display: props.display, flexDirection: "row", alignItems: "center" },
        props.leftText ? props.leftText : null,
        react_1.default.createElement(RadioButtonWrapper, __assign({}, styles, { checked: props.checked, onClick: function () { return props.onClick ? props.onClick(!props.checked) : null; } }), props.checked ? react_1.default.createElement(Fill, null) : null),
        props.rightText ? props.rightText : null));
};
exports.RadioButton.defaultProps = {
    width: "20px",
    height: "20px"
};
var templateObject_1, templateObject_2, templateObject_3;
