import * as React from "react";
import { Flex } from "../atoms/Flex";
import { Text } from "../atoms/Text";

export class SalesboostFooter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  static defaultProps = {
    color: "black.hint",
    bg: "black._20",
    fontSize: ["h4", "h3", "h3"],
    fontFamily: "Noto Sans KR",
    height: ["32px", "50px"]
  };

  public render() {
    const { color, fontFamily, fontSize, bg, height} = this.props;
    return (
      <Flex alignItems="center" justifyContent="center" bg={bg} height={height} mt="auto">
        <Text color={color} fontFamily={fontFamily} fontSize={fontSize} width="fit-content" height="fit-content" demiLight>Copyright &copy; 2018 Salesboost. Inc</Text>
      </Flex>
    );
  }
}