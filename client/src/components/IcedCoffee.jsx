import { useEffect, useState } from "react";
import icedCoffeeDatas from "./data/icedCoffee.json";
import IcedCoffeeAddOns from "./IcedCoffeeAddOns";
const IcedCoffee = (props) => {
  const [icedCoffee, setIcedCoffee] = useState(icedCoffeeDatas);

  const [icedCoffeeForAddOns, setIcedCoffeeForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (icedCoffeeItem) => {
    setIcedCoffeeForAddOns(icedCoffeeItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {icedCoffee.map((value, index) => (
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
        <IcedCoffeeAddOns
          icedCoffee={icedCoffeeForAddOns}
          onClose={() => setShowAddOns(false)}
          cart={props.cart}
          setCart={props.setCart}
          medioPrice={29}
          grandePrice={39}
          hotPrice={39}
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

export default IcedCoffee;
