import React from "react";

import { Titulo } from "./styles";
import Conta from "../Conta";

const Container = () => {
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
