import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  theme,
  Header,
  IconButton,
} from "@salesboost/malta";
import {
  getAPI,
  getCatalogURL,
  getAuthURL,
} from "@salesboost/common";
import {
  ServiceDrawer,
  SettingDrawer,
} from "@salesboost/drawer";

class Index extends React.Component<any, any> {

  renderServiceDrawer = (iconColor = "rgba(22,27,72,0.8)") =>
    <ServiceDrawer
      opener={({ handleOpen }) => <IconButton name="hamburger" onClick={handleOpen as any} ml={2} color={iconColor} />} />

  renderSettingDrawer = (iconColor = "rgba(22,27,72,0.8)") =>
    <SettingDrawer opener={({ handleOpen }) => <IconButton name="setting" onClick={handleOpen} mr={3} ml="auto" color={iconColor} />}
      userIndex={"0"} />;


  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ paddingTop: "60px" }}>
          <Header>
            {this.renderServiceDrawer()}
            {this.renderSettingDrawer()}
          </Header>
          asdf
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
