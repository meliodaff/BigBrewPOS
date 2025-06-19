import { use, useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";
import RemoveModal from "./RemoveModal";
import MilkTeaAddOns from "./MilkTeaAddOns";
import IcedCoffeeAddOns from "./IcedCoffeeAddOns";
import PrafAddOns from "./PrafAddOns";
import FruitTeaAddOns from "./FruitTeaAddOns";
const ViewItems = (props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [positionToRemove, setPositionToRemove] = useState(null);
  const [drinkName, setDrinkName] = useState("");
  const [currentCart, setCurrentCart] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [drinkToEdit, setDrinkToEdit] = useState([]);
  const [positionToEdit, setPositionToEdit] = useState(null);
  const [returnedMedioCups, setReturnedMedioCups] = useState(0);
  const [returnedGrandeCups, setReturnedGrandeCups] = useState(0);
  const [currentMedioCups, setCurrentMedioCups] = useState(props.medioCups);
  const [currentGrandeCups, setCurrentGrandeCups] = useState(props.grandeCups);
  const [currentStraws, setCurrentStraws] = useState(props.straws);
  const [currentDomes, setCurrentDomes] = useState(props.domes);

  useEffect(() => {
    setCurrentCart(props.cart);
  }, []);

  const handleRemove = () => {
    setCurrentStraws((prev) => prev + 1);

    const updatedCart = [...currentCart];

    if (updatedCart[positionToRemove].drinkCategory === "Praf") {
      setCurrentDomes((prev) => prev + 1);
    }

    if (updatedCart[positionToRemove].drinkSize === "Medio") {
      setReturnedMedioCups((prev) => prev + 1);
      setCurrentMedioCups((prev) => prev + 1);
    } else if (updatedCart[positionToRemove].drinkSize === "Grande") {
      setReturnedGrandeCups((prev) => prev + 1);
      setCurrentGrandeCups((prev) => prev + 1);
    }
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
              <h5 className="modal-title fs-1">Items</h5>
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
              {props.cart.length > 0 && (
                <div>
                  <button
                    disabled={
                      JSON.stringify(props.cart) === JSON.stringify(currentCart)
                    }
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      props.myFunc();
                      props.setCart(currentCart);
                      // my theory is that these two functions are just the same since i dndt remove setReturnedCups functions
                      // props.setMedioCups((prev) => prev + returnedMedioCups);
                      // props.setGrandeCups((prev) => prev + returnedGrandeCups);
                      props.setMedioCups(currentMedioCups);
                      props.setGrandeCups(currentGrandeCups);
                      props.setDomes(currentDomes);
                      props.setStraws(currentStraws);
                      props.onClose();
                    }}
                  >
                    Save changes
                  </button>{" "}
                </div>
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
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
          positionToEdit={positionToEdit}
          size={drinkToEdit.drinkSize}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          straws={props.straws}
          setStraws={props.setStraws}
          returnedMedioCups={returnedMedioCups}
          returnedGrandeCups={returnedGrandeCups}
          setReturnedMedioCups={setReturnedMedioCups}
          setReturnedGrandeCups={setReturnedGrandeCups}
          currentMedioCups={currentMedioCups}
          currentGrandeCups={currentGrandeCups}
          setCurrentMedioCups={setCurrentMedioCups}
          setCurrentGrandeCups={setCurrentGrandeCups}
          currentStraws={currentStraws}
          setCurrentStraws={setCurrentStraws}
        />
      ) : null}
      {showEditModal && drinkToEdit.drinkCategory === "Iced Coffee" ? (
        <IcedCoffeeAddOns
          // milkTea={milkTeaForAddOns || ""}
          icedCoffee={drinkToEdit}
          onClose={() => setShowEditModal(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={29}
          grandePrice={39}
          hotPrice={39}
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
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
          positionToEdit={positionToEdit}
          size={drinkToEdit.drinkSize}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          straws={props.straws}
          setStraws={props.setStraws}
          returnedMedioCups={returnedMedioCups}
          returnedGrandeCups={returnedGrandeCups}
          setReturnedMedioCups={setReturnedMedioCups}
          setReturnedGrandeCups={setReturnedGrandeCups}
          currentMedioCups={currentMedioCups}
          currentGrandeCups={currentGrandeCups}
          setCurrentMedioCups={setCurrentMedioCups}
          setCurrentGrandeCups={setCurrentGrandeCups}
          currentStraws={currentStraws}
          setCurrentStraws={setCurrentStraws}
        />
      ) : null}
      {showEditModal && drinkToEdit.drinkCategory === "Praf" ? (
        <PrafAddOns
          // milkTea={milkTeaForAddOns || ""}
          praf={drinkToEdit}
          onClose={() => setShowEditModal(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={49}
          grandePrice={59}
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
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
          positionToEdit={positionToEdit}
          size={drinkToEdit.drinkSize}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          domes={props.domes}
          setDomes={props.setDomes}
          straws={props.straws}
          setStraws={props.setStraws}
          returnedMedioCups={returnedMedioCups}
          returnedGrandeCups={returnedGrandeCups}
          setReturnedMedioCups={setReturnedMedioCups}
          setReturnedGrandeCups={setReturnedGrandeCups}
          currentMedioCups={currentMedioCups}
          currentGrandeCups={currentGrandeCups}
          setCurrentMedioCups={setCurrentMedioCups}
          setCurrentGrandeCups={setCurrentGrandeCups}
          currentStraws={currentStraws}
          setCurrentStraws={setCurrentStraws}
          currentDomes={currentDomes}
          setCurrentDomes={setCurrentDomes}
        />
      ) : null}
      {showEditModal && drinkToEdit.drinkCategory === "Fruit Tea" ? (
        <FruitTeaAddOns
          // milkTea={milkTeaForAddOns || ""}
          fruitTea={drinkToEdit}
          onClose={() => setShowEditModal(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={49}
          grandePrice={59}
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
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
          positionToEdit={positionToEdit}
          size={drinkToEdit.drinkSize}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          domes={props.domes}
          setDomes={props.setDomes}
          straws={props.straws}
          setStraws={props.setStraws}
          returnedMedioCups={returnedMedioCups}
          returnedGrandeCups={returnedGrandeCups}
          setReturnedMedioCups={setReturnedMedioCups}
          setReturnedGrandeCups={setReturnedGrandeCups}
          currentMedioCups={currentMedioCups}
          currentGrandeCups={currentGrandeCups}
          setCurrentMedioCups={setCurrentMedioCups}
          setCurrentGrandeCups={setCurrentGrandeCups}
          currentStraws={currentStraws}
          setCurrentStraws={setCurrentStraws}
          currentDomes={currentDomes}
          setCurrentDomes={setCurrentDomes}
        />
      ) : null}
    </>
  );
};

export default ViewItems;
