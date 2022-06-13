import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/quemsomos">Quem Somos</Link>
        </li>
        <li>
          <Link to="/comppai">Componente Pai</Link>
        </li>
        <li>
          <Link to="/condicional">Rendereizacao Condicional</Link>
        </li>
        <li>
          <Link to="/addlista">Adicionar Lista</Link>
        </li>
      </ul>
    </div>
  );
};
