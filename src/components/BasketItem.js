import React from "react";

function BasketItem(props) {
  console.log(props);
  return (
    <div>
      <div>
        <h3>
          {props.product.name}: {props.product.quantity}
        </h3>
      </div>
    </div>
  );
}

export default BasketItem;
