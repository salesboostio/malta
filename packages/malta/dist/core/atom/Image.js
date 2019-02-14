"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
var objectFit = function (props) { return "object-fit: " + props.fit + ";"; };
var objectPosition = function (props) { return "object-position: " + props.position + ";"; };
exports.Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  flex-shrink: 0;\n  overflow: hidden;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n  flex-shrink: 0;\n  overflow: hidden;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.space, styled_system_1.width, styled_system_1.height, objectFit, objectPosition, styled_system_1.flex, styled_system_1.maxWidth, styled_system_1.maxHeight);
exports.Image.defaultProps = {
    width: "100%",
    height: "100%",
    alt: "img",
    objectFit: "cover",
    objectPosition: "50% 50%"
};
var templateObject_1;
