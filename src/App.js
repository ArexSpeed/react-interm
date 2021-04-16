import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./style.css";

const Button = styled.button`
  background: ${props =>
    props.secondary ? props.theme.colors.secondary : props.theme.colors.main};
  color: ${props => (props.secondary ? "black" : "red")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em;
  border: 2px solid blue;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
//extend component
const InlineButton = styled(Button)`
  background: unset;
  color: #000;
`;
//set theme provider
const theme = {
  colors: {
    main: "black",
    secondary: "white"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Button>Button</Button>
        <Button secondary>Next</Button>
        <InlineButton>Next</InlineButton>
      </div>
    </ThemeProvider>
  );
}
