import React, { useContext } from "react";
import { BasketContext } from "./BasketContext";
import BasketItem from "./BasketItem";

function Basket() {
  const [products, setProducts] = useContext(BasketContext);
  console.log(products);

  return (
    <div className="container">
      <h1>Basket:</h1>
      {!products && <h3>empty</h3>}
      {products && products.map((product) => <BasketItem product={product} />)}
    </div>
  );
}

export default Basket;
