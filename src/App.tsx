import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./consts/routes";

import { TRoutes } from "./consts/types";

function App(): JSX.Element {
  return (
    <Routes>
      {ROUTES.map((route: TRoutes, index: number) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
