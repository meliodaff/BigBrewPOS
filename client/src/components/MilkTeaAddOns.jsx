import { use, useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";

const MilkTeaAddOns = (props) => {
  const [size, setSize] = useState(props.size);
  const [addOns, setAddOns] = useState({
    extraShot: props.extraShot,
    pearl: props.pearl,
    crystal: props.crystal,
    creamCheese: props.creamCheese,
    creamPuff: props.creamPuff,
    cheesecake: props.cheesecake,
    crushedOreo: props.crushedOreo,
    coffeeJelly: props.coffeeJelly,
    whippedCream: props.whippedCream,
  });

  const originalAddOns = {
    extraShot: props.extraShot,
    pearl: props.pearl,
    crystal: props.crystal,
    creamCheese: props.creamCheese,
    creamPuff: props.creamPuff,
    cheesecake: props.cheesecake,
    crushedOreo: props.crushedOreo,
    coffeeJelly: props.coffeeJelly,
    whippedCream: props.whippedCream,
  };

  const originalSize = props.size;

  const areAddOnsEqual =
    JSON.stringify(originalAddOns) === JSON.stringify(addOns);
  const isSizeSame = size === props.size;

  const isSaveDisabled = props.forEdit && areAddOnsEqual && isSizeSame;

  const handleClick = () => {
    if (!props.forEdit) {
      if (size === "Medio" && props.medioCups <= 0) {
        alert("Medio Cups has ran out");
        return;
      } else if (size === "Grande" && props.grandeCups <= 0) {
        alert("Grande Cups has ran out");
        return;
      }

      if (props.straws <= 0) {
        alert("Straws has ran out");
        return;
      }
    }

    // if (props.forEdit) {
    //   if (size === "Medio" && props.currentMedioCups <= 0) {
    //     alert("Medio Cups has ran out");
    //     return;
    //   } else if (size === "Grande" && props.currentGrandeCups <= 0) {
    //     alert("Grande Cups has ran out");
    //     return;
    //   }
    // }

    const priceForSize =
      size === "Medio" ? props.medioPrice : props.grandePrice;
    // const priceForAddOns = addOns.length * 9;

    let priceForAddOns = 0;

    Object.entries(addOns).forEach(([key, value]) => {
      if (value === 0) {
        // if the add ons were not increased, it will just skip the calculations
        return;
      }

      if (key === "extraShot") {
        priceForAddOns += value * 5;
      } else {
        priceForAddOns += value * 9;
      }
    });

    const newItem = {
      id: props.milkTea.id,
      drinkName: props.milkTea.drinkName,
      drinkSize: size,
      drinkImage: props.milkTea.drinkImage,
      drinkAddOns: addOns,
      price: priceForSize + priceForAddOns,
      drinkCategory: props.milkTea.drinkCategory,
    };

    if (props.forEdit) {
      if (
        size === "Medio" &&
        props.currentMedioCups <= 0 &&
        originalSize !== size
      ) {
        alert("Medio Cups has ran out");
        return;
      } else if (
        size === "Grande" &&
        props.currentGrandeCups <= 0 &&
        originalSize !== size
      ) {
        alert("Grande Cups has ran out");
        return;
      }

      if (
        props.currentCart[props.positionToEdit].drinkSize === "Medio" &&
        originalSize !== size
      ) {
        props.setReturnedMedioCups((prev) => Number(prev + 1));
        props.setReturnedGrandeCups((prev) => Number(prev - 1));
        props.setCurrentGrandeCups((prev) => prev - 1);
        props.setCurrentMedioCups((prev) => prev + 1);
      } else if (
        props.currentCart[props.positionToEdit].drinkSize === "Grande" &&
        originalSize !== size
      ) {
        props.setReturnedMedioCups((prev) => Number(prev - 1));
        props.setReturnedGrandeCups((prev) => Number(prev + 1));
        props.setCurrentMedioCups((prev) => prev - 1);
        props.setCurrentGrandeCups((prev) => prev + 1);
      }
      props.setCurrentCart((prev) => {
        const updatedCart = [...prev];
        updatedCart[props.positionToEdit] = newItem;
        return updatedCart;
      });
    } else {
      // HAVE TO CHANGE THIS TO A MORE CONSISTENT NAME
      if (props.cart.length < 1) {
        props.setCart([newItem]);
      } else {
        props.setCart((prev) => [...prev, newItem]);
      }

      props.setStraws((prev) => prev - 1);

      if (newItem.drinkSize === "Medio") {
        props.setMedioCups((prev) => Number(prev - 1)); // i have to make a function where in the number of cups wont decrease when not checked out yet. That means i have to make a remaining cups variable to juts display so that the user is aware of the remaining cups
      } else if (newItem.drinkSize === "Grande") {
        props.setGrandeCups((prev) => Number(prev - 1));
      }
    }
    console.log(props.cart);
    console.log(props.currentCart);
  };

  useEffect(() => {
    // console.log(addOns);
  }, [props.cart]);

  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ paddingTop: "5px", paddingBottom: "2px" }}
            >
              <h5 className="modal-title">
                {props.forEdit && "Edit"} Add Ons for {props.milkTea.drinkName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body" style={{ paddingTop: "0" }}>
              <h4>Sizes:</h4>
              <div className="sizes-container">
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Medio"}
                  onChange={() => {
                    // setSize((prev) => (prev === "Medio" ? "Medio" : "Medio"));
                    setSize("Medio");
                    // this makes the toggle off disabled
                    // two different methods but will work the same
                  }}
                />
                <div className="size">Medio</div>
                <div className="remaining-cups-container">
                  <strong>Remaining Cups:</strong>
                </div>
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Grande"}
                  onChange={() => {
                    setSize((prev) =>
                      prev === "Grande" ? "Grande" : "Grande"
                    );
                  }}
                />
                <div className="size">Grande</div>
                <div className="remaining-cups-container">
                  <div>
                    Medio:{" "}
                    {props.forEdit ? props.currentMedioCups : props.medioCups}
                  </div>
                </div>
                <div></div>
                <div></div>
                <div className="remaining-cups-container">
                  <div>
                    Grande:{" "}
                    {props.forEdit ? props.currentGrandeCups : props.grandeCups}
                  </div>
                </div>
                <div></div>
                <div></div>
                <div className="remaining-cups-container">
                  <div>
                    Straws: {props.forEdit ? props.currentStraws : props.straws}
                  </div>
                </div>
              </div>
              <div className="divider-add-ons"></div>

              <h4>Add Ons:</h4>
              <div className="add-ons-container">
                {Object.entries(addOns).map(([key, value], index) => (
                  <div key={index}>
                    <button
                      disabled={
                        key === "extraShot" &&
                        props.milkTea.drinkName !== "Salted Caramel"
                      }
                      onClick={() => {
                        if (addOns[key] >= 5) {
                          return;
                        }
                        setAddOns((prev) => ({
                          ...prev,
                          [key]: prev[key] + 1,
                        }));
                      }}
                      className="btn btn-success add"
                    >
                      +
                    </button>
                    <button
                      disabled={
                        key === "extraShot" &&
                        props.milkTea.drinkName !== "Salted Caramel"
                      }
                      onClick={() => {
                        if (addOns[key] <= 0) {
                          return;
                        }
                        setAddOns((prev) => ({
                          ...prev,
                          [key]: prev[key] - 1,
                        }));
                      }}
                      className="btn btn-danger minus"
                    >
                      -
                    </button>
                    <input
                      disabled
                      type="number"
                      value={addOns[key]}
                      onChange={(e) => {
                        setAddOns((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }));
                      }}
                      className="add-ons-input"
                    />
                    <div className="add-ons-name">{formatAddOnName(key)}</div>
                  </div>
                ))}

                {/* {availableAddOns.map((item, index) => (
                  <>
                    <input
                      type="number"
                      className="add-ons-checkbox"
                      disabled={
                        item === "Extra Shot" &&
                        props.milkTea.drinkName !== "Salted Caramel"
                      }
                      value={item}
                      // checked={addOns.includes(item)}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (e.target.checked) {
                          // Add to list
                          setAddOns((prev) => [...prev, value]);
                        } else {
                          // Remove from list
                          setAddOns((prev) =>
                            prev.filter((addOn) => addOn !== value)
                          );
                        }
                      }}
                    />
                    <div className="add-ons-name">{item}</div>
                  </>
                ))} */}
              </div>
            </div>
            <div
              className="modal-footer"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <button
                disabled={isSaveDisabled}
                type="button"
                className="btn btn-primary w-25"
                onClick={() => {
                  // props.forEdit ? props.handleEdit() : handleClick();
                  handleClick();
                  props.onClose();
                }}
              >
                {props.forEdit ? "Save" : "Add"}
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
    </>
  );
};

export default MilkTeaAddOns;
