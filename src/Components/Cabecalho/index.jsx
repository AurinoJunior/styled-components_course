import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Header } from "./styles";

const Cabecalho = () => {
  return (
    <Header>
      <img height="50" width="50" src={bank_logo} alt="Logo Smart Bank" />
      <nav>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </nav>
    </Header>
  );
};

export default Cabecalho;
