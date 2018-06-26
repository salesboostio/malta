"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, textAlign = _a.textAlign, width = _a.width;
var StyledModal = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  content: '';\n  opacity: 0;\n  transition: opacity 200ms, z-index 0s 200ms, visibility 0s 200ms;\n  visibility: hidden;\n  background-color: ", ";\n\n  ", "\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  content: '';\n  opacity: 0;\n  transition: opacity 200ms, z-index 0s 200ms, visibility 0s 200ms;\n  visibility: hidden;\n  background-color: ", ";\n\n  ",
    "\n"])), theme_1.colors.black._20, function (props) { return props.open && "\n    opacity: 1;\n    transition: opacity 200ms;\n    visibility: visible;\n  "; });
var ModalContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-top: solid 2px ", ";\n  max-height: 100%;\n  height: 100%;\n  ", "\n  padding: ", "px;\n\n  @media (min-width: 600px) {\n    height: auto;\n    max-width: 75%;\n    max-height: 90%;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 50%;\n    max-height: 80%;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-top: solid 2px ", ";\n  max-height: 100%;\n  height: 100%;\n  ", "\n  padding: ", "px;\n\n  @media (min-width: 600px) {\n    height: auto;\n    max-width: 75%;\n    max-height: 90%;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 50%;\n    max-height: 80%;\n  }\n"])), theme_1.colors.white.standard, theme_1.colors.black.standard, width, theme_1.space[3]);
var ModalHeader = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), theme_1.space[2]);
var ModalHeading = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n"])), theme_1.fontSizes.h2, theme_1.fontWeights.medium);
var ModalClose = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0.25rem 0.25rem 0.125rem;\n"], ["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0.25rem 0.25rem 0.125rem;\n"])));
var ModalContent = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", "px;\n"], ["\n  font-size: ", "px;\n"])), theme_1.fontSizes.h3);
var ModalFooter = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n"], ["\n"])));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, open = _a.open, modalHeading = _a.modalHeading, onRequestClose = _a.onRequestClose;
        var modalButton = (React.createElement(ModalClose, { type: "button", onClick: onRequestClose },
            React.createElement("span", null, "close_icon_here")));
        var modalBody = (React.createElement(ModalContainer, __assign({}, this.props),
            false && (React.createElement("h3", null, "test")),
            React.createElement(ModalHeader, null,
                React.createElement(ModalHeading, null, modalHeading),
                modalButton),
            React.createElement(ModalContent, null, this.props.children),
            React.createElement(ModalFooter, null)));
        return (React.createElement(StyledModal, { open: open }, modalBody));
    };
    Modal.defaultProps = {
        // width
        width: 400,
        // event
        onRequestClose: function () { },
        // options
        open: false,
        modalHeading: "",
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
