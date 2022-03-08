import React from "react";
import useFetch from "./utils/useFetch";
import { Link } from "react-router-dom";

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
    <div className="blog-list">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {items &&
        items.map((item) => (
          <div className="blog-preview" key={item._id}>
            <Link to={`/items/${item._id}`}>
              <h2>{item.name}</h2>
              <p>{item.body.slice(0, 25) + "..."}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Items;
