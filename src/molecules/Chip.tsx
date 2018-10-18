import * as React from "react";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import { Flex } from "../atoms/Flex";
import { width, height, borderRadius } from "styled-system";

const StyledChip = styled(Flex)`
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