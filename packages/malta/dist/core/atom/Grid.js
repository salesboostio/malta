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
var Block_1 = require("./Block");
var styled_system_1 = require("styled-system");
exports.Grid = styled_components_1.default(Block_1.Block)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.gridAutoColumns, styled_system_1.gridAutoFlow, styled_system_1.gridAutoRows, styled_system_1.gridColumnGap, styled_system_1.gridRowGap, styled_system_1.gridGap, styled_system_1.gridTemplateAreas, styled_system_1.gridTemplateColumns, styled_system_1.gridTemplateRows);
var templateObject_1;
