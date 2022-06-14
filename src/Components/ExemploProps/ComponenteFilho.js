import React from "react";

export const CompontenteFilho = (props) => {
  return (
    <>
      {props.nome}
      {props.idade}
      {props.nerd ? "Verdadeiro" : "Falso"}
    </>
  );
};
