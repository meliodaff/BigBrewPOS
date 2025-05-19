import { useEffect, useState } from "react";
import milkTeaDatas from "./data/milkTea.json";
const MilkTea = () => {
  const [milkTea, setMilkTea] = useState(milkTeaDatas);
  const [cart, setCart] = useState([]);
  const handleClick = (value) => {
    if (cart.length === 0) {
      console.log("cart no value");
      setCart(value);
      return;
    }
    console.log("cart has value/s");
    setCart((prev) => prev + value);
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
    </>
  );
};

export default MilkTea;
