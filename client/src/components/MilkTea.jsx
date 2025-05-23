import { useEffect, useState } from "react";
import milkTeaDatas from "./data/milkTea.json";
import MilkTeaAddOns from "./MilkTeaAddOns";
const MilkTea = (props) => {
  const [milkTea, setMilkTea] = useState(milkTeaDatas);

  const [milkTeaForAddOns, setMilkTeaForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (milkTeaItem) => {
    setMilkTeaForAddOns(milkTeaItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {milkTea.map((value, index) => (
          <div className="product-container" key={index}>
            <button
              onClick={() => handleClick(value)}
              className="product-button"
            >
              <img src={value.drinkImage} className="product-image" />
            </button>
            <div className="product-name">{value.drinkName}</div>
          </div>
        ))}
      </div>
      {showAddOns && (
        <MilkTeaAddOns
          milkTea={milkTeaForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={29}
          grandePrice={39}
        />
      )}
    </>
  );
};

export default MilkTea;
