import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Wrapper = styled.div`
  height: 100%;
`;

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          {this.props.children}
        </Wrapper>
      </ThemeProvider>
    );
  }
}
