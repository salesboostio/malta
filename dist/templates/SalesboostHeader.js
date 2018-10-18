"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Flex_1 = require("../atoms/Flex");
var Image_1 = require("../atoms/Image");
var Box_1 = require("../atoms/Box");
exports.SalesboostHeader = function (props) {
    return (React.createElement(Flex_1.Flex, { width: "100%", height: props.headerHeight, bg: props.bg, alignItems: "center", pl: props.padding },
        React.createElement(Box_1.Box, { mr: "auto", height: props.imageHeight, style: { cursor: "pointer" }, onClick: props.onClick, width: props.imageWidth },
            React.createElement("a", { href: props.href },
                React.createElement(Image_1.Image, { src: props.logoSrc, fit: "contain" }))),
        props.children));
};
exports.SalesboostHeader.defaultProps = {
    bg: undefined,
    headerHeight: ["50px", "70px"],
    imageHeight: ["28px", "34px"],
    padding: ["8px", "32px"],
    onClick: function () { }
};
