import React from "react";
import { useNavigate } from "react-router-dom";

export const QuemSomos = () => {

  let navigate = useNavigate();

  function handleClick(){
    navigate("/")
  }

  return (
    <>
    <button onClick={handleClick}>Voltar para Home</button>
      <h2>Pedro</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
      <h2>Ester</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
      <h2>Marina</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
      <h2>Kaua</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
      <h2>Breno</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
      <h2>Sophia</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
        turpis et sem porta, vitae hendrerit velit vehicula. Etiam et facilisis
        nisl. Vestibulum lobortis tellus ac iaculis hendrerit. Aliquam et.
      </p>
    </>
  );
};
