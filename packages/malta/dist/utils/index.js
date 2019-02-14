"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_system_1 = require("styled-system");
var styled_components_1 = require("styled-components");
exports.hover = styled_system_1.style({
    prop: "hover",
    cssProperty: ":hover"
});
exports.transition = styled_system_1.style({
    prop: "transition",
});
exports.styleReducer = function () {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return styled_components_1.css("", styles);
};
exports.ofReducer = function (props) { return exports.styleReducer(props.of); };
exports.cursor = function (props) { return ({
    cursor: props.cursor
}); };
var get = function (from, selector) {
    return selector
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter(function (t) { return t !== ""; })
        .reduce(function (prev, cur) { return prev && prev[cur]; }, from);
};
exports.getValueFromTheme = function (theme, value) {
    return get(theme, value) ? get(theme, value) : value;
};
