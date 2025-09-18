import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//css
import "./styles/global.css";
import "./styles/component/component.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
