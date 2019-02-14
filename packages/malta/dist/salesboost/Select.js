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
var SelectWrapper = styled_components_1.default(core_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 327px;\n  ", "\n  position: relative;\n"], ["\n  width: 327px;\n  ", "\n  position: relative;\n"])), styled_system_1.width);
var HiddenSelect = styled_components_1.default.select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var Selected = styled_components_1.default(core_1.Flex)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 60px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  margin: 8px 0;\n  border-radius: 2px;\n  border: solid 1px;\n  border-color: ", ";\n  background-color: #fff;\n  cursor: pointer;\n  :hover {\n    border-color: ", ";\n  }\n  ::placeholder {\n    color: rgba(22,35,72, 0.4);\n  }\n"], ["\n  width: 100%;\n  height: 60px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  margin: 8px 0;\n  border-radius: 2px;\n  border: solid 1px;\n  border-color: ", ";\n  background-color: #fff;\n  cursor: pointer;\n  :hover {\n    border-color: ", ";\n  }\n  ::placeholder {\n    color: rgba(22,35,72, 0.4);\n  }\n"])), function (props) { return props.isOpened ? "#454edf" : "rgba(22, 27, 72, 0.2)"; }, function (props) { return !props.isOpened ? "rgba(22, 27, 72, 0.5)" : ""; });
var DropdownWrapper = styled_components_1.default(core_1.Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-top: -4px;\n  max-height: 330px;\n  flex-direction: column;\n  overflow-y: overlay;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: solid 1px rgba(22, 27, 72, 0.4);\n  ::-webkit-scrollbar {\n    width: 20px;\n  }\n  ::-webkit-scrollbar-thumb {\n    border: solid 6px transparent;\n    border-radius: 10px;\n    border-top-width: 10px;\n    border-bottom-width: 10px;\n    background-color: rgba(22,27,72,0.2);\n    background-clip: padding-box;\n  }\n"], ["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-top: -4px;\n  max-height: 330px;\n  flex-direction: column;\n  overflow-y: overlay;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: solid 1px rgba(22, 27, 72, 0.4);\n  ::-webkit-scrollbar {\n    width: 20px;\n  }\n  ::-webkit-scrollbar-thumb {\n    border: solid 6px transparent;\n    border-radius: 10px;\n    border-top-width: 10px;\n    border-bottom-width: 10px;\n    background-color: rgba(22,27,72,0.2);\n    background-clip: padding-box;\n  }\n"])));
var DropdownItem = styled_components_1.default(core_1.Flex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: none;\n  width: 100%;\n  height: 60px;\n  padding: 0 20px;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  :hover {\n    background-color: rgba(22,27,72, 0.05);\n  }\n"], ["\n  flex: none;\n  width: 100%;\n  height: 60px;\n  padding: 0 20px;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  :hover {\n    background-color: rgba(22,27,72, 0.05);\n  }\n"])));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            index: _this.props.initialSelection || -1,
            value: _this.props.initialSelection > -1 ? _this.getValueFromOptions(_this.props.children, _this.props.initialSelection) : "",
            isOpened: false
        };
        _this.toggleDropdown = function () {
            _this.setState(function (state) {
                return __assign({}, state, { isOpened: !state.isOpened });
            });
        };
        _this.renderDropdown = function () {
            var children = _this.props.children;
            if (!children || !_this.state.isOpened) {
                return null;
            }
            return (React.createElement(DropdownWrapper, null, React.Children.map(children, function (child, index) {
                return React.createElement(DropdownItem, { key: "option-list-" + index, onClick: function () { return _this.handleOptionClick(index); } },
                    React.createElement(core_1.Text, { fontSize: ["16px", "18px"], color: "rgba(22,35,72,0.9)" }, child));
            })));
        };
        _this.handleOptionClick = function (index) {
            if (index === void 0) { index = 0; }
            var _a = _this.props, children = _a.children, onValueChange = _a.onValueChange;
            _this.setState({
                index: index,
                value: _this.getValueFromOptions(children, index),
                isOpened: false
            }, function () {
                if (onValueChange)
                    onValueChange(_this.getValueFromOptions(children, index), index);
            });
        };
        return _this;
    }
    Select.prototype.getValueFromOptions = function (options, index) {
        return options instanceof Array ? options[index].props.children : options.props.children;
    };
    Select.prototype.render = function () {
        var _a = this.props, children = _a.children, onValueChange = _a.onValueChange, styles = __rest(_a, ["children", "onValueChange"]);
        return (React.createElement(SelectWrapper, __assign({}, styles),
            React.createElement(HiddenSelect, null, children),
            React.createElement(Selected, { isExpanded: this.state.isOpened, onClick: this.toggleDropdown },
                React.createElement(core_1.Text, { fontSize: ["16px", "18px"], color: "rgba(22,35,72,0.9)" }, this.state.value || this.props.placeholder),
                React.createElement(core_1.Icon, { name: this.state.isOpened ? "arrow-up" : "arrow-down", color: "rgba(22,27,72,0.6)", size: 16 })),
            this.renderDropdown()));
    };
    return Select;
}(React.Component));
exports.Select = Select;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
