import React, { useContext } from "react";
import { ThemeConsumer, ThemeContext } from "./ThemeContext";

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

const Button = ({ theme, children }) => {
  const context = useContext(ThemeContext);
  return (
    <>
      {/* podejscie z komponentem */}
      <ThemeConsumer>
        {value => (
          <button style={styles[value]}>
            {children} {value}
          </button>
        )}
      </ThemeConsumer>
      {/* podejscie z useContext */}
      <button style={styles[context]}>Contextbtn {context}</button>
    </>
  );
};

export default Button;
