import React from "react";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" />
      </Routes>
    </div>
  );
}

export default AppRouter;
