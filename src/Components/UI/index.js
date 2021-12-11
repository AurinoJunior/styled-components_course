import React from "react";
import styled from "styled-components";

export const Icone = ({ src, alt }) => {
  return <img width="25" height="25" src={src} alt={alt} />;
};

export const ButtonTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
