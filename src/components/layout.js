import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
  }
`;


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
};

export default Layout;
