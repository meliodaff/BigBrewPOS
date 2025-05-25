import { useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";
import RemoveModal from "./RemoveModal";
const ViewItems = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [positionToRemove, setPositionToRemove] = useState(null);
  const [drinkName, setDrinkName] = useState("");
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    setCurrentCart(props.cart);
  }, []);

  const handleRemove = () => {
    const updatedCart = [...currentCart];
    updatedCart.splice(positionToRemove, 1);
    setCurrentCart(updatedCart);
    setShowRemoveModal(false);
    // props.setCart(currentCart);
  };

  useEffect(() => {
    console.log(props.cart);
  }, [props.cart, currentCart]);

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
              <h5 className="modal-title">Items</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body items-modal">
              <div className="items-grid">
                {currentCart.length > 0 ? (
                  currentCart.map((item, index) => (
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
                        <button className="edit-button">Edit</button>
                      </div>
                      <button
                        className="remove-item btn btn-danger"
                        onClick={() => {
                          setShowRemoveModal(true);
                          setPositionToRemove(index);
                          setDrinkName(item.drinkName);
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No Items</p>
                )}
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <button
                disabled={props.cart.length === currentCart.length}
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  props.myFunc();
                  props.setCart(currentCart);
                  props.onClose();
                }}
              >
                Save changes
              </button>
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
      {showRemoveModal && (
        <RemoveModal
          onClose={() => {
            setShowRemoveModal(false);
          }}
          handleRemove={handleRemove}
          drinkName={drinkName}
        />
      )}
    </>
  );
};

export default ViewItems;
