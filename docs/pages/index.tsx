import * as React from "react";
import {
  Icon,
  Flex,
  Split,
} from "../../core";
import {
  Input,
  Select,
  IconButton,
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

  state = {
    inputValue: ""
  };

  render() {
    return (
      <div>
        <Icon name="arrow-right" color="rgba(22,27,72,0.3)" size={50} cursor="pointer" hover={{ color: "rgba(22,27,72,0.8)" }} />
        <Flex cursor="pointer" size="50px" bg="red" hover={{ "background": "rgba(22,27,72,0.3)" }} />
        <HoverElem hover={{ "background": "red" }} />
        <Select mb={3} placeholder="Please select" initialSelection={1}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </Select>
        <Flex width="300px" height="300px" bg="mint._90" alignItems="center" justifyContent="center">
          <Split horizontal />
        </Flex>
        <Input
          my={2} mx={2}
          placeholder="Input placeholder"
          value={this.state.inputValue}
          onTextChange={(text) => this.setState({ inputValue: text })}
          validator={(text) => { return text.length < 5; }}
          title="Input title"
          errorText="Input error"
          description="Input description"
          helpText="Input help" />
        <IconButton name="arrow-right" color="red._100" hover={{ color: "rgba(22,27,72,0.2)" }} />
      </div>
    );
  }
}

export default Index;
