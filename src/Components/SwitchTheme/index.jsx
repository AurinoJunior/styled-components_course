import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

import { Icone } from "../UI";

const claro = <Icone src={ThemeOn} alt="Tema Claro" filterOff={true} />;
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" filterOff={true} />;

export default ({ theme }) => (theme.type === "claro" ? claro : escuro);
