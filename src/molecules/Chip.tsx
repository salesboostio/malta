import * as React from "react";
import { StyledText as Text } from "../atoms/Text";
import { width, height, borderRadius } from "styled-system";
import { StyledFlex } from "../atoms/Flex";

const StyledChip = StyledFlex.extend`
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  font-size: 16px;
  padding: 8px;
  width: fit-content;
  ${width}
  ${height}
  ${borderRadius}
`;


export class Chip extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, color, ...props } = this.props;
    return (
      <StyledChip {...props}>
        <Text color={color} center demiLight>{children}</Text>
      </StyledChip>
    );
  }
}