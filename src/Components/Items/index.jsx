import React from "react";

import Item from './Item'

import { Items } from "./styles";

export default (props) => {
  return (
    <Items>
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
