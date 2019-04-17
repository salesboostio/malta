import styled from "styled-components";
import {
  ResponsiveValue,
  display
} from "styled-system";

export interface BrProps {
  display: ResponsiveValue<"inline" | "none">;
}

export const Br = styled.br<BrProps>`
  ${display}
`;

Br.defaultProps = {
  display: "inline",
};
