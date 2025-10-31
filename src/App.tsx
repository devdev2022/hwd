import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import GlobalModalWrapper from "@/components/modals/GlobalModal";
import ScrollToTop from "./components/scrollTop";

//data
import "./App.css";
import { PageRouters } from "@/data/PageRoutes";
import createChildRoutes from "@/utils/createRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
