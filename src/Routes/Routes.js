import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../screens/HomeScreen";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
