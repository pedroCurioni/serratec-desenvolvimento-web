import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
// import {ComponentePai} from "./pages/aula02/ComponentePai"
// import { AdicionarLista } from "./pages/aula03/AdicionarLista";
import { RendereizacaoCondicional } from "../pages/aula03/RenderizacaoCondicional";
import { AdicionarLista } from "../pages/aula03/AdicionarLista";
import { Home } from "../pages/aula03/Home";
import { QuemSomos } from "../pages/aula03/QuemSomos";
import { ComponentePai } from "../pages/aula02/ComponentePai";

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/comppai" element={<ComponentePai />} />
          <Route path="/addlista" element={<AdicionarLista />} />
          <Route path="/condicional" element={<RendereizacaoCondicional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
