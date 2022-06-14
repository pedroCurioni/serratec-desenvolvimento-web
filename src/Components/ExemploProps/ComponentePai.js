import React, { useState } from "react";
import { CompontenteFilho } from "./ComponenteFilho";

export const ComponentePai = () => {
  const [nome, setNome] = useState("inicial");
  const [idade, setIdade] = useState("inicial");
  const [nerd, setNerd] = useState("inicial");

  function handleChangeNome(e) {
    setNome(e.target.value);
  }
  function handleChangeIdade(e) {
    setIdade(e.target.value);
  }
  function handleChangeNerd(e) {
    setNerd(e.target.value);
  }

  return (
    <>
      <label>
        Nome: <CompontenteFilho nome={nome} />
      </label>
      <br />
      <input value={nome} onChange={(e) => handleChangeNome(e)}></input>
      <br />
      <label>
        Idade: <CompontenteFilho idade={idade} />
      </label>
      <br />
      <input value={idade} onChange={(e) => handleChangeIdade(e)}></input>
      <br />
      <label>
        nerd: <CompontenteFilho nerd={nerd} />
      </label>
      <br />
      <input value={nerd} onChange={(e) => handleChangeNerd(e)}></input>
    </>
  );
};
