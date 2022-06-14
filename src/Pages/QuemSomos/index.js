import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FirstText, SecondText, Container, AulaButton } from "./style.js"

export const QuemSomos = () => {
  let { nome, idade } = useParams();
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  
  return (
    <>
      <Container>
        <FirstText>Quem somos</FirstText>

        <SecondText>Ola eu sou o {nome}, tenho {idade} anos</SecondText>
      </Container>
      <AulaButton onClick={handleClick}>Voltar para Home</AulaButton>
    </>
  );
};
