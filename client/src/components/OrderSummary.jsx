import { useEffect, useState } from "react";
import ViewItems from "./ViewItems";

const OrderSummary = (props) => {
  const [showViewItems, setShowViewItems] = useState(false);

  return (
    <>
      <div className="summary-container">
        <button
          style={{ backgroundColor: "#6F5EB0" }}
          onClick={() => setShowViewItems(true)}
        >
          View Items
        </button>
        <div>Items: {props.cartItems}</div>
        <button style={{ backgroundColor: "#5EB065" }}>Proceed</button>
        <div>Total: {props.totalPrice}</div>
      </div>
      {showViewItems && (
        <ViewItems
          cart={props.cart}
          setCart={props.setCart}
          myFunc={props.myFunc}
          onClose={() => setShowViewItems(false)}
        />
      )}
    </>
  );
};

export default OrderSummary;
