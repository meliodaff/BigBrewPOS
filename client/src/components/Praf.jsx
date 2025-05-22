import { useEffect, useState } from "react";
import prafDatas from "./data/praf.json";
import AddOns from "./MilkTeaAddOns";
import PrafAddOns from "./PrafAddOns";
const Praf = (props) => {
  const [prafs, setPrafs] = useState(prafDatas);

  const [prafForAddOns, setPrafForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const [totalPriceForPrafs, setTotalPriceForPrafs] = useState(0);

  const handleClick = (prafItem) => {
    setPrafForAddOns(prafItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {prafs.map((value, index) => (
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
        <PrafAddOns
          praf={prafForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={39}
          grandePrice={49}
        />
      )}
    </>
  );
};

export default Praf;
