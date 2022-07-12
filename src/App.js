import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
    </BrowserRouter>
  );
}

export default App;
