import * as React from "react";
import {
  Icon,
} from "../../core";
import {
  Select,
} from "../../salesboost";
import {
  hover
} from "../../utils";
import styled from "styled-components";
import Router from "next/router";

const HoverElem = styled.div<any>`
  ${hover}
  width: 50px;
  height: 50px;
  background: rgba(22,27,72,0.6);
  cursor: pointer;
`;

class Index extends React.Component<any, any> {

  render() {
    return (
      <div>
        <Icon name="arrow-right" color="rgba(22,27,72,0.3)" size={50} cursor="pointer" hover={{ color: "rgba(22,27,72,0.8)" }} />
        <Flex cursor="pointer" size="50px" bg="red" hover={{ "background": "rgba(22,27,72,0.3)" }} />
        <HoverElem hover={{ "background": "red" }} />
        <Select initialSelection={-1}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </Select>
        <Flex width="300px" height="300px" bg="mint._90" alignItems="center" justifyContent="center">
          <Split horizontal />
        </Flex>
      </div>
    );
  }
}

export default Index;
