import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Header, BtnHeader } from "./styles";

const Cabecalho = () => {
  return (
    <Header>
      <img height="50" width="50" src={bank_logo} alt="Logo Smart Bank" />
      <nav>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </nav>
    </Header>
  );
};

export default Cabecalho;
