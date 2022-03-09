import React from "react";
import useFetch from "./utils/useFetch";
import { Link } from "react-router-dom";
import Item from "./Item";
import Basket from "./Basket";

function Items() {
  const {
    error,
    isPending,
    data: items,
  } = useFetch(
    "https://port-3000-js-practice-vice889681.codeanyapp.com/api/items"
  );
  console.log(items);
  return (
    <div className="container">
      <Basket />
      <div className="blog-list">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {items && items.map((item) => <Item key={item._id} item={item} />)}
      </div>
    </div>
  );
}

export default Items;
