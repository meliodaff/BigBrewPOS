import { useEffect, useState } from "react";
import hotBrewDatas from "./data/hotBrew.json";
import HotBrewAddOns from "./HotBrewAddOns";
const HotBrew = (props) => {
  const [hotBrew, setHotBrew] = useState(hotBrewDatas);

  const [hotBrewForAddOns, setHotBrewForAddOns] = useState(null);

  const [showAddOns, setShowAddOns] = useState(false);

  const handleClick = (hotBrewItem) => {
    setHotBrewForAddOns(hotBrewItem);
    setShowAddOns(true);
  };

  useEffect(() => {
    props.setCart(props.cart);
  }, [props.cart]);

  return (
    <>
      <div className="product-grid">
        {hotBrew.map((value, index) => (
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
        <HotBrewAddOns
          hotBrew={hotBrewForAddOns}
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

export default HotBrew;
