import React from "react";

function Cart({ cart }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid lightgray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;