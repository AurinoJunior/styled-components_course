import {
  textoFundoEscuro,
  fundoEscuro,
  conteudoEscuro,
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
} from "../../styles/variables";

export const temaEscuro = {
  type: "escuro",
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
};

export const temaClaro = {
  type: "claro",
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
};
