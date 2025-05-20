import { useEffect, useState } from "react";
import milkTeaDatas from "./data/milkTea.json";
import AddOns from "./AddOns";
const MilkTea = (props) => {
  const [milkTea, setMilkTea] = useState(milkTeaDatas);
  const [cart, setCart] = useState([]);
  const [milkTeaForAddOns, setMilkTeaForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (milkTeaItem) => {
    setMilkTeaForAddOns(milkTeaItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    console.log(cart);
    props.setTotalItems(cart.length); // i should refactor this because im going to just put quantity inside the object
  }, [cart]);

  return (
    <>
      <div className="product-grid">
        {milkTea.map((value, index) => (
          <div className="product-container" key={index}>
            <button
              onClick={() => handleClick(value)}
              className="product-button"
            >
              <img src={value.milkTeaImage} className="product-image" />
            </button>
            <div className="product-name">{value.milkTeaName}</div>
          </div>
        ))}
      </div>
      {showAddOns && (
        <AddOns
          milkTea={milkTeaForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={cart}
          setCart={setCart}
        />
      )}
    </>
  );
};

export default MilkTea;
