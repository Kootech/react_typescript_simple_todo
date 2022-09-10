import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState<null | number>(0);

  return (
    <h2>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </h2>
  );
}

export default App;
