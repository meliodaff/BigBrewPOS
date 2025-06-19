import { useEffect, useState } from "react";
import brostyDatas from "./data/brosty.json";
import IcedCoffeeAddOns from "./IcedCoffeeAddOns";
import FruitTeaAddOns from "./FruitTeaAddOns";
import BrostyAddOns from "./BrostyAddOns";
const Brosty = (props) => {
  const [brosty, setBrosty] = useState(brostyDatas);

  const [brostyForAddOns, setBrostyForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (brostyItem) => {
    setBrostyForAddOns(brostyItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {brosty.map((value, index) => (
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
        <BrostyAddOns
          brosty={brostyForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={49}
          grandePrice={59}
          extraShot={0}
          pearl={0}
          crystal={0}
          creamCheese={0}
          creamPuff={0}
          cheesecake={0}
          crushedOreo={0}
          coffeeJelly={0}
          whippedCream={0}
          forEdit={false}
          size={"Medio"}
          medioCups={props.medioCups}
          setMedioCups={props.setMedioCups}
          grandeCups={props.grandeCups}
          setGrandeCups={props.setGrandeCups}
          straws={props.straws}
          setStraws={props.setStraws}
          domes={props.domes}
          setDomes={props.setDomes}
        />
      )}
    </>
  );
};

export default Brosty;
