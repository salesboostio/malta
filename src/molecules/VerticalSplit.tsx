import styled from "styled-components";
import { Flex } from "../atoms/Flex";
import { colors } from "../commons/theme";
import {
  space,
  SpaceProps,
  HeightProps
} from "styled-system";

type Props = SpaceProps & HeightProps;

export const VerticalSplit = styled<Props>(Flex)`
  width: 0;
  border-right: 1px solid ${colors.black._20};
  ${space}
`;
