import { useEffect, useState } from "react";
import milkTeaDatas from "./data/milkTea.json";
import AddOns from "./AddOns";
const MilkTea = () => {
  const [milkTea, setMilkTea] = useState(milkTeaDatas);
  const [cart, setCart] = useState([]);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (value) => {
    setShowAddOns(true);
    if (cart.length <= 0) {
      setCart([value]);
      return;
    }

    setCart((prev) => [...prev, value]);
    console.log(cart);
  };

  useEffect(() => {
    console.log(cart);
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

      {showAddOns && <AddOns />}
    </>
  );
};

export default MilkTea;
