import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

//components
import GlobalModalWrapper from "./components/modals/GlobalModal";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalModalWrapper>
        <Routes>
          <Route></Route>
        </Routes>
      </GlobalModalWrapper>
    </BrowserRouter>
  );
}

export default App;
