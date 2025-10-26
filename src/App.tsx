import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

//components
import GlobalModalWrapper from "@/components/modals/GlobalModal";

//data

import "./App.css";
import { PageRouters } from "@/data/PageRoutes";
import createChildRoutes from "@/utils/createRoutes";
import ScrollToTop from "./components/scrollTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalModalWrapper>
        <Routes>
          <Route>
            {PageRouters.map((paramObj) => {
              const { element: PathElement, path } = paramObj;
              if (!PathElement) return null;
              return (
                <Route key={path}>
                  <Route path={paramObj.path} element={<PathElement />}>
                    {createChildRoutes(paramObj)}
                  </Route>
                </Route>
              );
            })}
          </Route>
        </Routes>
      </GlobalModalWrapper>
    </BrowserRouter>
  );
}

export default App;
