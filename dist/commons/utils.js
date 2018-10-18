"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = function (from, selector) {
    return selector
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter(function (t) { return t !== ""; })
        .reduce(function (prev, cur) { return prev && prev[cur]; }, from);
};
exports.getValueFromTheme = function (theme, value) {
    return exports.get(theme, value) ? exports.get(theme, value) : value;
};
