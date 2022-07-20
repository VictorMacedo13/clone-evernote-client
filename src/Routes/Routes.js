import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/Home";
import RegisterScreen from "../screens/auth/register";
import LoginScreen from "../screens/auth/login";
import NotesScreen from "../screens/notes/index";
import UserEditScreen from "../screens/users/edit";
import PublicRouter from "../components/auth/public_router";
import PrivateRouter from "../components/auth/private_router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route element={<PublicRouter />}>
          <Route path="/register" element={<RegisterScreen />}></Route>
        </Route>
        <Route element={<PublicRouter />}>
          <Route path="/login" element={<LoginScreen />}></Route>
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/notes" element={<NotesScreen />}></Route>
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/user/edit" element={<UserEditScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
