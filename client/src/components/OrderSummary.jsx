import { useEffect, useState } from "react";

const OrderSummary = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="summary-container">
        <button style={{ backgroundColor: "#6F5EB0" }}>View Items</button>
        <div>Items: {cartItems}</div>
        <button style={{ backgroundColor: "#5EB065" }}>Proceed</button>
        <div>Total: {total}</div>
      </div>
    </>
  );
};

export default OrderSummary;
