import React from "react";
import Button from "./Button";

const Sidebar = props => {
  return (
    <div>
      <Button theme={props.theme}>Button</Button>
    </div>
  );
};

export default Sidebar;
