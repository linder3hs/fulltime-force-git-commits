import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Routes from "./router/Routes";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
