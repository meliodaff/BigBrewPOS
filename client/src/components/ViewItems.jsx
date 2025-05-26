import { useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";
import RemoveModal from "./RemoveModal";
import MilkTeaAddOns from "./MilkTeaAddOns";
const ViewItems = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [positionToRemove, setPositionToRemove] = useState(null);
  const [drinkName, setDrinkName] = useState("");
  const [currentCart, setCurrentCart] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [drinkToEdit, setDrinkToEdit] = useState([]);
  const [positionToEdit, setPositionToEdit] = useState(null);

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

  const handleEdit = () => {
    console.log("im for editing function");
    console.log(positionToEdit);
    console.log(drinkToEdit);

    // create a function that updates the details of a certain drink
    // edited -- we can create the function right inside the milkteaaddons.jsx
    // because im assuming that all the required details for me to edit the drink
    // are there
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
                        <button
                          className="edit-button"
                          onClick={() => {
                            setShowEditModal(true);
                            setDrinkToEdit(item);
                            setPositionToEdit(index);
                          }}
                        >
                          Edit
                        </button>
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
                // disabled={props.cart.length === currentCart.length}
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
      {console.log(drinkToEdit)}
      {showEditModal && drinkToEdit.drinkCategory === "Milk Tea" ? (
        <MilkTeaAddOns
          // milkTea={milkTeaForAddOns || ""}
          milkTea={drinkToEdit}
          onClose={() => setShowEditModal(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={29}
          grandePrice={39}
          extraShot={0}
          pearl={drinkToEdit.drinkAddOns.pearl}
          crystal={drinkToEdit.drinkAddOns.crystal}
          creamCheese={drinkToEdit.drinkAddOns.creamCheese}
          creamPuff={drinkToEdit.drinkAddOns.creamPuff}
          cheesecake={drinkToEdit.drinkAddOns.cheesecake}
          crushedOreo={drinkToEdit.drinkAddOns.crushedOreo}
          coffeeJelly={drinkToEdit.drinkAddOns.coffeeJelly}
          whippedCream={drinkToEdit.drinkAddOns.whippedCream}
          forEdit={true}
          handleEdit={handleEdit}
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
          positionToEdit={positionToEdit}
          size={drinkToEdit.drinkSize}
        />
      ) : null}
    </>
  );
};

export default ViewItems;
