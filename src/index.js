import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </Theme>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
