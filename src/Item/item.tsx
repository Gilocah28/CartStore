import { FC } from "react";
import { Button } from "@mui/material";

import { CartItemType } from "../App";
//Style
import { Wrapper } from "./item.style";

type Props = {
  item: CartItemType;
  handleAddtoCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddtoCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>

    <Button onClick={() => handleAddtoCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
