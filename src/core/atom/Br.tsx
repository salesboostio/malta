import styled from "styled-components";
import {
  ResponsiveValue,
  display
} from "styled-system";

export const Br = styled.br<{ display: ResponsiveValue<"inline" | "none"> }>`
  ${display}
`;
