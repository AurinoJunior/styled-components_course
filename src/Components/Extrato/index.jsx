import React from "react";

import { extratoLista } from "../../info";
import Items from "../Items";
import { Box, Button } from "./styles";

export default () => {
  return (
    <Box>
      {extratoLista.updates.map((item) => (
        <Items key={item.id} {...item} />
      ))}
      <Button>Ver mais</Button>
    </Box>
  );
};
