import React from "react";
import styled from "styled-components";

export const ButtonTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const IconeTema = styled.img`
  filter: ${({ theme }) =>
    theme.type === "claro" ? "invert(0)" : "invert(1)"};
`;

export const Icone = ({ src, alt, filterOff }) => {
  return filterOff ? (
    <img width="25" height="25" src={src} alt={alt} />
  ) : (
    <IconeTema width="25" height="25" src={src} alt={alt} />
  );
};
