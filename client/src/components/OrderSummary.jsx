import { useEffect, useState } from "react";
import ViewItems from "./ViewItems";
import ProceedModal from "./ProceedModal";

const OrderSummary = (props) => {
  const [showViewItems, setShowViewItems] = useState(false);
  const [showProceedModal, setShowProceedModal] = useState(false);

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
        <button
          style={{ backgroundColor: "#5EB065" }}
          onClick={() => setShowProceedModal(true)}
        >
          Proceed
        </button>
        <div>Total: {props.totalPrice}</div>
      </div>
      {showViewItems && (
        <ViewItems
          cart={props.cart}
          setCart={props.setCart}
          myFunc={props.myFunc}
          onClose={() => setShowViewItems(false)}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          straws={props.straws}
          setStraws={props.setStraws}
          domes={props.domes}
          setDomes={props.setDomes}
        />
      )}

      {showProceedModal && (
        <ProceedModal
          onClose={() => setShowProceedModal(false)}
          cart={props.cart}
          setCart={props.setCart}
          price={props.totalPrice}
        />
      )}
    </>
  );
};

export default OrderSummary;
