import React from "react";
import Page from "./Page";
import Sidebar from "./Sidebar";
import "./style.css";

import {ThemeProvider} from './ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <Page>
        <Sidebar theme="dark" />
      </Page>
    </ThemeProvider>
  );
}
