import { useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";
import useCreateOrder from "../services/createOrder";
import useCreateOrders from "../services/createOrders";

const ProceedModal = (props) => {
  const [payment, setPayment] = useState(0);
  const { responseForCreateOrder, loadingForCreateOrder, createOrder } =
    useCreateOrder();
  const { responseForCreateOrders, loadingForCreateOrders, createOrders } =
    useCreateOrders();
  const handleMoneyClick = (money) => {
    setPayment(money);
  };

  const handlePayment = async () => {
    if (props.price > payment) {
      alert("Insufficient payment");
      return;
    }

    const balance = payment - props.price;
    alert(`Sufficient payment
      Balance: ${balance}
      `);

    if (props.cart.length > 1) {
      const response = await createOrders(props.cart);
      console.log(response);
    } else {
      const response = await createOrder(props.cart);
      console.log(response);
    }

    props.setCart([]); // when the user checks out the items, the cart will reset to zero items
    props.onClose();
  };
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5 )" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-1">Check Out</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body check-out-modal">
              <div className="items-grid">
                {props.cart.length > 0 ? (
                  props.cart.map((item, index) => (
                    <div className="item-container" key={index}>
                      <img
                        className="item-image"
                        src={item.drinkImage}
                        alt="Drink"
                      />
                      <div className="item-details">
                        <b className="item-name" style={{ fontSize: "large" }}>
                          {item.drinkName}
                        </b>
                        <b className="item-size">{item.drinkSize}</b>
                        <div className="item-add-ons">
                          {Object.entries(item.drinkAddOns).map(
                            ([key, value], index) => (
                              <div key={index}>
                                {value > 0
                                  ? `${value}x ${formatAddOnName(key)}`
                                  : null}
                              </div>
                            )
                          )}
                        </div>
                        <div>₱{item.price}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Items</p>
                )}
              </div>
            </div>
            {props.cart.length > 0 ? (
              <div>
                <div className="input-money-divider"></div>
                <div className="input-money-container">
                  <div>
                    <input
                      type="number"
                      placeholder="₱0"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <div className="money-buttons-container">
                      <button onClick={() => handleMoneyClick(50)}>₱50</button>
                      <button onClick={() => handleMoneyClick(100)}>
                        ₱100
                      </button>
                      <button onClick={() => handleMoneyClick(200)}>
                        ₱200
                      </button>
                      <button onClick={() => handleMoneyClick(500)}>
                        ₱500
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div
              className="modal-footer d-flex justify-content-start"
              style={props.cart.length === 0 ? { marginTop: "60px" } : null}
            >
              {props.cart.length > 0 && (
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ width: "35%" }}
                  onClick={handlePayment}
                >
                  Check Out
                </button>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProceedModal;
