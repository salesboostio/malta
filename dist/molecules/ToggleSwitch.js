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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Spinner_1 = require("./Spinner");
var theme_1 = require("../commons/theme");
var Flex_1 = require("../atoms/Flex");
var Wrapper = styled_components_1.default(Flex_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  height: 24px;\n  width: 44px;\n  border-radius: 12px;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n  cursor: pointer;\n  transition: background 0.1s ease-out;\n"], ["\n  position: relative;\n  background: ", ";\n  height: 24px;\n  width: 44px;\n  border-radius: 12px;\n  align-items: center;\n  padding-left: 2px;\n  padding-right: 2px;\n  cursor: pointer;\n  transition: background 0.1s ease-out;\n"])), function (props) { return (props.disabled ? theme_1.colors.black.half : props.checked ? theme_1.colors.mint : theme_1.colors.black.hint); });
var Circle = styled_components_1.default(Flex_1.Flex)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: ", ";\n  transform: translateX(", "px);\n  transition: transform 0.1s ease-out;\n"], ["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: ", ";\n  transform: translateX(", "px);\n  transition: transform 0.1s ease-out;\n"])), function (props) { return props.disabled ? "#EEE" : "#FFF"; }, function (props) { return props.checked ? "20" : "0"; });
var ToggleSwitch = /** @class */ (function (_super) {
    __extends(ToggleSwitch, _super);
    function ToggleSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleSwitch.prototype.render = function () {
        return (React.createElement(Wrapper, { checked: this.props.checked, disabled: this.props.disabled, onClick: this.props.disabled ? function () { } : this.props.onClick }, this.props.loading ?
            React.createElement(Flex_1.Flex, { alignItems: "center", justifyContent: "center", width: "100%", height: "100%" },
                React.createElement(Spinner_1.Spinner, { scale: 0.5, color: "#FFF" }))
            : React.createElement(Circle, { checked: this.props.checked, disabled: this.props.disabled })));
    };
    return ToggleSwitch;
}(React.Component));
exports.ToggleSwitch = ToggleSwitch;
ToggleSwitch.defaultProps = {
    disabled: false,
    checked: false,
    loading: false
};
var templateObject_1, templateObject_2;
