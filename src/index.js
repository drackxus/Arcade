import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Main from "./views/main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  rootElement
);
