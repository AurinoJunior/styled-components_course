import React from "react";

import { Titulo, Container, Conteudo } from "./styles";
import Conta from "../Conta";
import Extrato from "../Extrato";

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
