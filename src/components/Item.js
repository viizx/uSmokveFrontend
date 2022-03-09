import React, { useState, useContext } from "react";
import { BasketContext } from "./BasketContext";

function Item(props) {
  const [products, setProducts] = useContext(BasketContext);
  const { item } = props;
  const [quantity, setQuantity] = useState(0);
  const addMore = () => {
    setQuantity(quantity + 1);
  };
  const addLess = () => {
    setQuantity(quantity - 1);
  };
  const addToBasket = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { name: item.name, quantity: quantity, key: item._id },
    ]);
  };
  return (
    <div className="container">
      <div>
        <h3>{item.name}</h3>
      </div>
      <h4>{item.body.slice(0, 24) + "..."}</h4>
      <button onClick={addMore}>+</button>
      <button onClick={addLess}>-</button>
      <button onClick={addToBasket}>Dodaj u kosaricu</button>
      <h3>{quantity}</h3>
    </div>
  );
}

export default Item;
