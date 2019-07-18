import styled from "styled-components";
import { Block } from "./Block";
import {
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
} from "styled-system";

export type GridProps =
  GridAutoColumnsProps & GridAutoFlowProps & GridAutoRowsProps
  & GridColumnGapProps & GridRowGapProps & GridTemplateAreasProps
  & GridTemplateColumnsProps & GridTemplateRowsProps & GridGapProps;

export const Grid = styled(Block)<GridProps>`
  display: flex;
  ${gridAutoColumns}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridGap}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  ${gridTemplateRows}
`;
