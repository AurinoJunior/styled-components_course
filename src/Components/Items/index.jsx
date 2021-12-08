import React from "react";

import Item from "./Item";
import imageFilter from "../../utils/imageFilter";
import { Items } from "./styles";

export default (props) => {
  return (
    <Items>
      {imageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
