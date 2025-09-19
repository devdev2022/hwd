import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//css
import.meta.glob("./styles/**/*.css", { eager: true });

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
