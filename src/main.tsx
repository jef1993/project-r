import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
// import "./index.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
