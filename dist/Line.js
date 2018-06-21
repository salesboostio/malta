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
var space = require("styled-system").space;
var StyledLine = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  border: none;\n  border-bottom: solid 1px ", ";\n"], ["\n  ", "\n  border: none;\n  border-bottom: solid 1px ", ";\n"])), space, function (props) { return props.color; });
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        return (React.createElement(StyledLine, __assign({}, this.props)));
    };
    Line.defaultProps = {
        // color
        color: "#ededf1",
        // space
        m: 1,
        p: 0,
        // width
        width: "100%"
    };
    return Line;
}(React.Component));
exports.Line = Line;
var templateObject_1;
