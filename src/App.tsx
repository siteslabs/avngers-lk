import React from "react";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./consts/routes";

function App() {
  return (
    <Routes>
      {ROUTES.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
