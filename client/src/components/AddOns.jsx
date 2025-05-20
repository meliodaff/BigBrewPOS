import { use, useEffect, useState } from "react";

const AddOns = (props) => {
  const [size, setSize] = useState("Medio");
  const [addOns, setAddOns] = useState([]);

  const availableAddOns = [
    "Extra Shot",
    "Pearl",
    "Crystal",
    "Cream Cheese",
    "Cream Puff",
    "Cheesecake",
    "Crushed Oreo",
    "Coffee Jelly",
    "Whipped Cream",
  ];

  const handleClick = () => {
    const priceForSize =
      size === "Medio" ? props.medioPrice : props.grandePrice;
    // const priceForAddOns = addOns.length * 9;

    let priceForAddOns = 0;

    addOns.forEach((item) => {
      if (item === "Extra Shot") {
        priceForAddOns += 5;
      } else {
        priceForAddOns += 9;
      }
    });
    // HAVE TO CHANGE THIS TO A MORE CONSISTENT NAME
    const newItem = {
      id: props.milkTea.id,
      milkTeaName: props.milkTea.milkTeaName,
      milkTeaSize: size,
      milkTeaImage: props.milkTea.milkTeaImage,
      milkTeaAddOns: addOns,
      price: priceForSize + priceForAddOns,
    };

    if (props.cart.length < 1) {
      props.setCart([newItem]);
    } else {
      props.setCart((prev) => [...prev, newItem]);
    }

    const updatedCart = [...props.cart, newItem];

    let totalPriceForMilkTeas = 0;
    for (let i = 0; i < updatedCart.length; i++) {
      totalPriceForMilkTeas += updatedCart[i].milkTeaPrice;
    }

    props.setTotalPrice(totalPriceForMilkTeas);
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
                {/* Add Ons for {props.milkTea.drinkName} */}
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
                {availableAddOns.map((item, index) => (
                  <>
                    <input
                      type="checkbox"
                      className="add-ons-checkbox"
                      disabled={
                        item === "Extra Shot" &&
                        props.milkTea.milkTeaName !== "Salted Caramel"
                      }
                      value={item}
                      checked={addOns.includes(item)}
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
                ))}
                {/* 
                    
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Pearl</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Crystal</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cream Cheese</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cream Puff</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cheesecake</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Crushed Oreo</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Coffee Jelly</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Whipped Cream</div> */}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleClick();
                  props.onClose();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
