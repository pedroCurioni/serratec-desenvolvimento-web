import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Exemplo } from "../../Components/ExemploComponentes/Exemplo";

export const Home = () => {

  const [usuario] = useState({
    nome:"Pedro",
    idade:19
  })

  const [Teste] = useState([
    1,2,3,4,5
  ])

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={`/quemsomos/${usuario.nome}&${usuario.idade}`}>Quem Somos</Link>
        </li>
      </ul>
      {Teste.map(res => {
        return <Exemplo/>
      })}
    </div>
  );
};
