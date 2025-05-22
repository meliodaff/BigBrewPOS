import { use, useEffect, useState } from "react";

const MilkTeaAddOns = (props) => {
  const [size, setSize] = useState("Medio");
  const [addOns, setAddOns] = useState({
    extraShot: 0,
    pearl: 0,
    crystal: 0,
    creamCheese: 0,
    creamPuff: 0,
    cheesecake: 0,
    crushedOreo: 0,
    coffeeJelly: 0,
    whippedCream: 0,
  });

  const handleClick = () => {
    const priceForSize =
      size === "Medio" ? props.medioPrice : props.grandePrice;
    // const priceForAddOns = addOns.length * 9;

    let priceForAddOns = 0;

    Object.entries(addOns).forEach(([key, value]) => {
      if (value === 0) {
        // if the add ons were not increased, it will just skip the calculations
        return;
      }

      console.log(`Key: ${key}`);
      console.log(`Value: ${value}`);

      if (key === "extraShot") {
        priceForAddOns += value * 5;
      } else {
        priceForAddOns += value * 9;
      }
    });
    // HAVE TO CHANGE THIS TO A MORE CONSISTENT NAME
    const newItem = {
      id: props.milkTea.id,
      drinkName: props.milkTea.drinkName,
      drinkSize: size,
      drinkImage: props.milkTea.drinkImage,
      drinkAddOns: addOns,
      price: priceForSize + priceForAddOns,
    };

    if (props.cart.length < 1) {
      props.setCart([newItem]);
    } else {
      props.setCart((prev) => [...prev, newItem]);
    }
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
            <div className="modal-header">
              <h5 className="modal-title">
                Add Ons for {props.milkTea.drinkName}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <h3>Sizes:</h3>
              <div className="sizes-container">
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Medio"}
                  onChange={() => {
                    setSize((prev) => (prev === "Medio" ? "" : "Medio"));
                  }}
                />
                <div className="size">Medio</div>
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Grande"}
                  onChange={() => {
                    setSize((prev) => (prev === "Grande" ? "" : "Grande"));
                  }}
                />
                <div className="size">Grande</div>
              </div>
              <div className="divider-add-ons"></div>

              <h3>Add Ons:</h3>
              <div className="add-ons-container">
                {Object.entries(addOns).map(([key, value]) => (
                  <>
                    <button
                      disabled={
                        key === "extraShot" &&
                        props.milkTea.drinkName !== "Coffee Jelly"
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
                    />
                    <div className="add-ons-name">{key}</div>
                  </>
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
                type="button"
                className="btn btn-primary w-25"
                onClick={() => {
                  handleClick();
                  props.onClose();
                }}
              >
                Add
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
