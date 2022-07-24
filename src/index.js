import { StrictMode } from "react";
import ReactDOM from "react-dom/";

import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
