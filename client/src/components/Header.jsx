import { useState } from "react";

const Header = (props) => {
  const [iceCoffee, setIceCoffee] = useState(false);
  const [milkTea, setMilkTea] = useState(true);
  const [fruitTea, setFruitTea] = useState(false);
  const [praf, setPraf] = useState(false);
  const [hotBrew, setHotBrew] = useState(false);
  const [brosty, setBrosty] = useState(false);
  const [special, setSpecial] = useState(false);

  const icedCoffeeClick = () => {
    setIceCoffee(true);
    setMilkTea(false);
    setFruitTea(false);
    setPraf(false);
    setHotBrew(false);
    setBrosty(false);
    setSpecial(false);

    props.setShowMilkTeaProduct(false);
  };

  const milkTeaClick = () => {
    setMilkTea(true);
    setIceCoffee(false);
    setFruitTea(false);
    setPraf(false);
    setHotBrew(false);
    setBrosty(false);
    setSpecial(false);

    props.setShowMilkTeaProduct(true);
    props.setShowPrafProduct(false);
  };

  const fruitTeaClick = () => {
    setFruitTea(true);
    setMilkTea(false);
    setIceCoffee(false);
    setPraf(false);
    setHotBrew(false);
    setBrosty(false);
    setSpecial(false);
  };

  const prafClick = () => {
    setPraf(true);
    setMilkTea(false);
    setIceCoffee(false);
    setFruitTea(false);
    setHotBrew(false);
    setBrosty(false);
    setSpecial(false);

    props.setShowPrafProduct(true);
    props.setShowMilkTeaProduct(false);
  };

  const hotBrewClick = () => {
    setHotBrew(true);
    setMilkTea(false);
    setIceCoffee(false);
    setFruitTea(false);
    setPraf(false);
    setBrosty(false);
    setSpecial(false);
  };

  const brostyClick = () => {
    setBrosty(true);
    setMilkTea(false);
    setIceCoffee(false);
    setFruitTea(false);
    setPraf(false);
    setHotBrew(false);
    setSpecial(false);
  };

  const specialClick = () => {
    setSpecial(true);
    setBrosty(false);
    setMilkTea(false);
    setIceCoffee(false);
    setFruitTea(false);
    setPraf(false);
    setHotBrew(false);
  };

  return (
    <>
      <header>
        <div className="top-row">
          <div className="category-container">
            <button
              className="category-btn"
              onClick={icedCoffeeClick}
              style={iceCoffee ? { fontWeight: "600", color: "white" } : {}}
            >
              ICED COFFEE
            </button>
          </div>
          <div
            className="divider"
            style={iceCoffee || fruitTea ? { backgroundColor: "white" } : {}}
          ></div>

          <div className="category-container">
            <button
              className="category-btn"
              onClick={fruitTeaClick}
              style={fruitTea ? { fontWeight: "600", color: "white" } : {}}
            >
              FRUIT TEA
            </button>
          </div>
          <div
            className="divider"
            style={fruitTea || hotBrew ? { backgroundColor: "white" } : {}}
          ></div>

          <div className="category-container">
            <button
              className="category-btn"
              onClick={hotBrewClick}
              style={hotBrew ? { fontWeight: "600", color: "white" } : {}}
            >
              HOT BREW
            </button>
          </div>
          <div
            className="divider"
            style={hotBrew || brosty ? { backgroundColor: "white" } : {}}
          ></div>

          <div className="category-container">
            <button
              className="category-btn"
              onClick={brostyClick}
              style={brosty ? { fontWeight: "600", color: "white" } : {}}
            >
              BROSTY
            </button>
          </div>
          <div
            className="divider"
            style={brosty || special ? { backgroundColor: "white" } : {}}
          ></div>

          <div className="category-container">
            <button
              className="category-btn"
              onClick={specialClick}
              style={special ? { fontWeight: "600", color: "white" } : {}}
            >
              SPECIAL
            </button>
          </div>
        </div>
        <div className="middle-divider"></div>
        <div className="bottom-row">
          <div className="category-container">
            <button
              className="category-btn"
              onClick={milkTeaClick}
              style={milkTea ? { fontWeight: "600", color: "white" } : {}}
            >
              MILK TEA
            </button>
          </div>
          <div
            className="divider"
            style={
              milkTea || praf ? { backgroundColor: "white", width: "2px" } : {}
            }
          ></div>
          <div className="category-container">
            <button
              className="category-btn"
              onClick={prafClick}
              style={praf ? { fontWeight: "600", color: "white" } : {}}
            >
              PRAF
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
