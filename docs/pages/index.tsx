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
  Drawer,
  Header,
  Button,
  Switch,
  Checkbox,
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
    inputValue: "",
    switch: false,
    checked: false,
  };

  render() {
    return (
      <div style={{ paddingTop: "60px" }}>
        <Header />
        <Button label="Click me" line onClick={() => { console.log("Click!"); }} />
        <Button label="Line me" />
        <Button label="Click me" line disabled />
        <Button label="Line me" disabled />
        <Button label="Click me" line loading />
        <Button label="Line me" loading />
        <Checkbox disabled />
        <Checkbox disabled checked />
        <Checkbox checked m={2} />
        <Checkbox checked={this.state.checked} onClick={() => { this.setState(prev => ({ checked: !prev.checked })); }} />
        <Checkbox style={{ display: "none" }} />
        <Switch loading m={2} onClick={() => { console.log("switch Click"); }} />
        <Switch m={2} style={{ display: "none" }} />
        <Switch loading m={2} />
        <Switch disabled m={2} />
        <Switch checked={this.state.switch} m={2} onClick={() => { this.setState(prev => ({ switch: !prev.switch })); }} />
        <Switch checked disabled m={2} />
        <Drawer left
          opener={({ handleOpen }) =>
            <IconButton name="arrow-right" color="red._100" hover={{ color: "rgba(22,27,72,0.2)" }} onClick={handleOpen} />}
          render={({ handleClose }) =>
            <IconButton name="close" color="navy._100" hover={{ color: "rgba(22,27,72,0.2)" }} onClick={handleClose} />}
        />
      </div>
    );
  }
}

export default Index;
