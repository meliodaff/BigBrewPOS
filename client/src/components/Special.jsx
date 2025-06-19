import { useEffect, useState } from "react";
import specialDatas from "./data/special.json";
import SpecialAddOns from "./SpecialAddOns";
const Special = (props) => {
  const [special, setSpecial] = useState(specialDatas);

  const [specialForAddOns, setSpecialForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (specialItem) => {
    setSpecialForAddOns(specialItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {special.map((value, index) => (
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
        <SpecialAddOns
          special={specialForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={29}
          grandePrice={39}
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
        />
      )}
    </>
  );
};

export default Special;
