import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
`;

interface Props {
  theme: object;
  children?: any;
}

export const App = (props: Props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </ThemeProvider>
  );
};
