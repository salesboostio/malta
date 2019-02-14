import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  theme
} from "@salesboost/malta";
import {
  getAPI,
  getCatalogURL,
  getAuthURL,
} from "@salesboost/common";

class Index extends React.Component<any, any> {

  render() {
    console.log(getAPI(), getCatalogURL(), getAuthURL());
    return (
      <ThemeProvider theme={theme}>
        <div style={{ paddingTop: "60px" }}>
          asdf
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
