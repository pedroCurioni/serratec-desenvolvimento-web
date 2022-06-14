import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "../Pages/Home/index";
import { QuemSomos } from "../Pages/QuemSomos/index";
import { NotFound } from "../Pages/NotFound";

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos/:nome&:idade" element={<QuemSomos />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
