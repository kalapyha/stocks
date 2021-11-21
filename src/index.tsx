import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import store from "./store/store";
import App from "./components/App/App";
import theme from "./theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
