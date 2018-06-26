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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var _a = require("styled-system"), height = _a.height, width = _a.width;
var mediaQuery_1 = require("./tools/mediaQuery");
/*
  Total Step Width = 80% (Default Step = 4)
  StepWidth = (TotalStepWidth / StepCount)
  LeftLineOffset = -(10 / StepWidth), (absolute : -10%)
  LineWidth(Left, Right) = ? [TODO]
  DashedLineWidth = (50% + StepWidth)
  DashedLineLeft = 100 - (DashedLineWidth / 2)

  Step 3 = 26.66%, LeftLineOffset = -37.5%, LineWidth = 76% (76.66), DashedLineWidth = 76%, DashedLineLeft = 61%
  Step 4 = 20%, LeftLineOffset = -50%, LineWidth = 85%, DashedLineWidth = 70%, DashedLineLeft = 65%
  Step 5 = 16%, LeftLineOffset = -62.5%, LineWidth = 89%, DashedLineWidth = 56%, DashedLineLeft = 72%
*/
var Line = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  display: inline-block;\n  border-color: ", ";\n  border-bottom: none;\n  width: 85%;\n  top: 20px;\n  margin: 0;\n"], ["\n  position: absolute;\n  display: inline-block;\n  border-color: ", ";\n  border-bottom: none;\n  width: 85%;\n  top: 20px;\n  margin: 0;\n"])), theme_1.colors.black._20);
var LeftLine = Line.extend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: -50%;\n"], ["\n  left: -50%;\n"])));
var RightLine = Line.extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  right: -50%;\n"], ["\n  right: -50%;\n"])));
var DashedLine = Line.extend(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-top: dashed 1px ", ";\n  width: 70%;\n  left: 65%;\n"], ["\n  border-top: dashed 1px ", ";\n  width: 70%;\n  left: 65%;\n"])), theme_1.colors.black._20);
var StyledStep = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  text-align: center;\n"], ["\n  position: relative;\n  text-align: center;\n"])));
var StepWrap = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  height: 60px;\n  vertical-align: top;\n\n  ", ";\n\n  &.step-3 {\n    width: 26.66%;\n    & ", ",\n    & ", " {\n      width: 76%;\n    }\n    & ", " {\n      left: -37.5%;\n    }\n    & ", " {\n      right: -37.5%;\n    }\n    & ", " {\n      width: 76%;\n      left: 61%;\n    }\n  }\n\n  &.step-4 {\n    width: 20%;\n    & ", ",\n    & ", " {\n      width: 85%;\n    }\n    & ", " {\n      left: -50%;\n    }\n    & ", " {\n      right: -50%;\n    }\n    & ", " {\n      width: 70%;\n      left: 65%;\n    }\n  }\n\n  &.step-5 {\n    width: 16%;\n    & ", ",\n    & ", " {\n      width: 89%;\n    }\n    & ", " {\n      left: -62.5%;\n    }\n    & ", " {\n      right: -62.5%;\n    }\n    & ", " {\n      width: 56%;\n      left: 72%;\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 20%;\n  height: 60px;\n  vertical-align: top;\n\n  ",
    ";\n\n  &.step-3 {\n    width: 26.66%;\n    & ", ",\n    & ", " {\n      width: 76%;\n    }\n    & ", " {\n      left: -37.5%;\n    }\n    & ", " {\n      right: -37.5%;\n    }\n    & ", " {\n      width: 76%;\n      left: 61%;\n    }\n  }\n\n  &.step-4 {\n    width: 20%;\n    & ", ",\n    & ", " {\n      width: 85%;\n    }\n    & ", " {\n      left: -50%;\n    }\n    & ", " {\n      right: -50%;\n    }\n    & ", " {\n      width: 70%;\n      left: 65%;\n    }\n  }\n\n  &.step-5 {\n    width: 16%;\n    & ", ",\n    & ", " {\n      width: 89%;\n    }\n    & ", " {\n      left: -62.5%;\n    }\n    & ", " {\n      right: -62.5%;\n    }\n    & ", " {\n      width: 56%;\n      left: 72%;\n    }\n  }\n"])), mediaQuery_1.generateQuery("max-width", "sm", "\n    height: auto;\n  "), LeftLine, RightLine, LeftLine, RightLine, DashedLine, LeftLine, RightLine, LeftLine, RightLine, DashedLine, LeftLine, RightLine, LeftLine, RightLine, DashedLine);
var StepItem = styled_components_1.default.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  font-weight: ", ";\n\n  & svg {\n    fill: ", ";\n  }\n\n  &.active {\n    color: ", ";\n    font-weight: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: ", ";\n  font-weight: ", ";\n\n  & svg {\n    fill: ", ";\n  }\n\n  &.active {\n    color: ", ";\n    font-weight: ", ";\n  }\n"])), theme_1.colors.black.hint, theme_1.fontWeights.regular, theme_1.colors.blue.deep, theme_1.colors.blue.deep, theme_1.fontWeights.medium);
var StepSeq = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  font-size: ", "px;\n  line-height: 2;\n  height: 40px;\n"], ["\n  display: block;\n  font-size: ", "px;\n  line-height: 2;\n  height: 40px;\n"])), theme_1.fontSizes.h3 * 1.33);
var StepTitle = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: ", "px;\n  margin: 0 ", "px;\n\n  ", ";\n"], ["\n  font-size: ", "px;\n  margin: 0 ", "px;\n\n  ",
    ";\n"])), theme_1.fontSizes.h3, theme_1.space[1], mediaQuery_1.generateQuery("max-width", "sm", "\n    display: none;\n  "));
var MobileStepTitle = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  height: 40px;\n  line-height: 40px;\n\n  ", ";\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  height: 40px;\n  line-height: 40px;\n\n  ",
    ";\n"])), theme_1.colors.blue.deep, theme_1.fontSizes.h4, theme_1.fontWeights.medium, mediaQuery_1.generateQuery("min-width", "sm", "\n    display: none;\n  "));
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step(props) {
        var _this = _super.call(this, props) || this;
        var current = props.current;
        _this.state = {
            current: current
        };
        return _this;
    }
    Step.prototype.renderStep = function (items, useRouter) {
        var _this = this;
        var check = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40" },
            React.createElement("path", { d: "M16.9 26.627l13.435-13.435a1 1 0 1 1 1.414 1.415L17.607 28.749a1 1 0 0 1-1.415 0l-8.485-8.486a1 1 0 1 1 1.414-1.414l7.778 7.778z" }));
        var stepItems = items.map(function (item, index) {
            return React.createElement(StepWrap, { className: "step-" + items.length, key: index },
                index == 0 && (React.createElement(LeftLine, null)),
                React.createElement(StepItem, { className: index == _this.state.current ? "active" : "", href: useRouter ? undefined : item.link, onClick: function (evt) {
                        if (item.callback !== undefined)
                            item.callback(index, item.link, item.id, evt);
                    } },
                    React.createElement(StepSeq, null, item.completed ? check : (index + 1)),
                    React.createElement(StepTitle, null, item.title)),
                (index + 1) == items.length && (React.createElement(RightLine, null)),
                (index + 1) != items.length && (React.createElement(DashedLine, null)));
        });
        return stepItems;
    };
    Step.prototype.render = function () {
        var _a = this.props, items = _a.items, useRouter = _a.useRouter;
        var current = this.state.current;
        return (React.createElement(StyledStep, null,
            this.renderStep(items, useRouter),
            React.createElement(MobileStepTitle, null, items[current].title)));
    };
    Step.defaultProps = {
        items: [],
        current: 1,
        useRouter: false,
        // event
        onClick: function () { }
    };
    return Step;
}(React.Component));
exports.Step = Step;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
