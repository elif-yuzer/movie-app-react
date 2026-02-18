import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import MyNavbar from "../companents/MyNavbar";
import Watchlist from "../pages/Watchlist";

const AppRouter = () => {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
