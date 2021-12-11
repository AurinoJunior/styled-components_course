import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import SwitchTheme from "./Components/SwitchTheme";

import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { ButtonTema } from "./Components/UI";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [theme, setTheme] = useState(temaClaro);

  const handleSwitchTheme = () => {
    setTheme(theme === temaClaro ? temaEscuro : temaClaro);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ButtonTema onClick={handleSwitchTheme}>
        <SwitchTheme theme={theme} />
      </ButtonTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
