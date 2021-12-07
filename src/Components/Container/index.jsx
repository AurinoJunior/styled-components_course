import React from "react";

import { Titulo, Container, Conteudo } from "./styles";
import Conta from "../Conta";

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};
