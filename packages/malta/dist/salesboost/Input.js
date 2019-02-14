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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("../core");
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var theme_1 = require("./theme");
var InputWrapper = styled_components_1.default(core_1.Block)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 327ox;\n  ", "\n"], ["\n  width: 327ox;\n  ", "\n"])), styled_system_1.width);
var InnerInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 52px;\n  box-sizing: border-box;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #162348;\n  font-size: 16px;\n  font-family: ", ";\n  font-weight: ", ";\n  background: ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);\n  border: ", ";\n  outline: none;\n  :focus {\n    border: #454edf solid 1px;\n  }\n  ::placeholder {\n    opacity: 0.4;\n  }\n"], ["\n  width: 100%;\n  height: 52px;\n  box-sizing: border-box;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #162348;\n  font-size: 16px;\n  font-family: ", ";\n  font-weight: ", ";\n  background: ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);\n  border: ", ";\n  outline: none;\n  :focus {\n    border: #454edf solid 1px;\n  }\n  ::placeholder {\n    opacity: 0.4;\n  }\n"])), theme_1.theme.fontfamilies.sans, theme_1.theme.fontweights.regular, function (_a) {
    var disabled = _a.disabled;
    return disabled ? "rgba(22, 27, 72, 0.05)" : "#fff";
}, function (_a) {
    var valid = _a.valid;
    return (valid ? "rgba(22, 27, 72, 0.2)" : "#f51a1a") + " solid 1px";
});
var InputText = styled_components_1.default(core_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  font-family: ", ";\n"], ["\n  width: 100%;\n  font-family: ", ";\n"])), theme_1.theme.fontfamilies.sans);
var Title = styled_components_1.default(InputText)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 8px;\n  opacity: 0.8;\n  color: #162348;\n  font-size: 14px;\n  line-height: 1.43;\n"], ["\n  margin-bottom: 8px;\n  opacity: 0.8;\n  color: #162348;\n  font-size: 14px;\n  line-height: 1.43;\n"])));
var Description = styled_components_1.default(InputText)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 8px;\n  opacity: 0.8;\n  color: #161b48;\n  font-size: 14px;\n  line-height: 1.71;\n"], ["\n  margin-top: 8px;\n  opacity: 0.8;\n  color: #161b48;\n  font-size: 14px;\n  line-height: 1.71;\n"])));
var Error = styled_components_1.default(InputText)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 8px;\n  color: #f51a1a;\n  opacity: 0.9;\n  line-height: 1.43;\n"], ["\n  margin-top: 8px;\n  color: #f51a1a;\n  opacity: 0.9;\n  line-height: 1.43;\n"])));
var HelpMark = styled_components_1.default(core_1.Flex)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 51px;\n  height: 20px;\n  border-radius: 2px;\n  background-color: #454edf;\n  margin-right: 8px;\n"], ["\n  width: 51px;\n  height: 20px;\n  border-radius: 2px;\n  background-color: #454edf;\n  margin-right: 8px;\n"])));
var Help = function (props) {
    return (React.createElement(core_1.Flex, { width: "100%", flexDirection: "row", mb: 2 },
        React.createElement(HelpMark, { justifyContent: "center" },
            React.createElement(core_1.Text, { color: "#fff", fontSize: "14px", fontFamily: theme_1.theme.fontfamilies.sans }, "HELP")),
        React.createElement(core_1.Text, { color: "#161fba", fontSize: "14px" }, props.children)));
};
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            valid: true,
        };
        _this.handleChange = function (ev) {
            var text = ev.target.value;
            if (_this.props.onTextChange) {
                _this.props.onTextChange(text);
            }
            if (_this.props.validator) {
                _this.setState({
                    valid: _this.props.validator(text),
                });
            }
        };
        _this.renderBottomText = function () {
            var _a = _this.props, description = _a.description, errorText = _a.errorText;
            if (!_this.state.valid) {
                return React.createElement(Error, null, errorText);
            }
            if (description) {
                return React.createElement(Description, null, description);
            }
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, title = _a.title, description = _a.description, placeholder = _a.placeholder, helpText = _a.helpText, errorText = _a.errorText, disabled = _a.disabled, onTextChange = _a.onTextChange, styles = __rest(_a, ["title", "description", "placeholder", "helpText", "errorText", "disabled", "onTextChange"]);
        return (React.createElement(InputWrapper, __assign({}, styles),
            title ? React.createElement(Title, null, title) : null,
            helpText ? React.createElement(Help, null, helpText) : null,
            React.createElement(InnerInput, { onChange: this.handleChange, valid: this.state.valid, disabled: this.props.disabled, placeholder: this.props.placeholder, value: this.props.value }),
            this.renderBottomText()));
    };
    return Input;
}(React.Component));
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
