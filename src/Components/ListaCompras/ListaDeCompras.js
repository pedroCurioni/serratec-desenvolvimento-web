import React from "react";

export const ListaDeCompras = (props) => {
  return (
    <div>
      <h1>Lista de Compras</h1>
      {props.lista.map((res) => (
        <div>
          <span>{res}</span>
        </div>
      ))}
    </div>
  );
};
