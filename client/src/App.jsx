import { use, useEffect, useState } from "react";
import Header from "./components/Header";
import MilkTea from "./components/MilkTea";
import Praf from "./components/Praf";
import IcedCoffee from "./components/IcedCoffee";
import SettingsButton from "./components/SettingsButton";
import OrderSummary from "./components/OrderSummary";
import SettingsModal from "./components/SettingsModal";
import FruitTea from "./components/FruitTea";
import Brosty from "./components/Brosty";
import Special from "./components/Special";
import HotBrew from "./components/HotBrew";

function App() {
  const [showMilkTeaProduct, setShowMilkTeaProduct] = useState(true);
  const [showPrafProduct, setShowPrafProduct] = useState(false);
  const [showIcedCoffeeProduct, setShowIcedCoffeeProduct] = useState(false);
  const [showFruitTeaProduct, setShowFruitTeaProduct] = useState(false);
  const [showBrostyProduct, setShowBrostyProduct] = useState(false);
  const [showSpecialProduct, setShowSpecialProduct] = useState(false);
  const [showHotBrewProduct, setShowHotBrewProduct] = useState(false);

  const [totalPriceForMilkTeas, setTotalPriceForMilkTeas] = useState(0);
  const [totalPriceForPrafs, setTotalPriceForPrafs] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [cart, setCart] = useState([]);

  const [medioCups, setMedioCups] = useState(5);
  const [grandeCups, setGrandeCups] = useState(5);
  const [straws, setStraws] = useState(5);
  const [domes, setDomes] = useState(5);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [hotCups, setHotCups] = useState(5);
  const [flatLids, setFlatLids] = useState(5);

  useEffect(() => {
    console.log(`${medioCups}
${grandeCups}
${domes}`);
  }, [medioCups, grandeCups, domes]);

  useEffect(() => {
    let updatedTotal = 0;

    cart.forEach((drink) => {
      updatedTotal += drink.price;
      console.log(drink);
    });
    // const updatedTotal = totalPriceForMilkTeas + totalPriceForPrafs;
    setTotalPrice(updatedTotal);
    console.log(cart);
  }, [totalPriceForMilkTeas, totalPriceForPrafs, cart]); // i dont know if this still necessary lol i forgot the logic here xD

  const myFunc = () => {
    console.log(cart);
  };

  return (
    <>
      <Header
        setShowMilkTeaProduct={setShowMilkTeaProduct}
        setShowPrafProduct={setShowPrafProduct}
        setShowIcedCoffeeProduct={setShowIcedCoffeeProduct}
        setShowFruitTeaProduct={setShowFruitTeaProduct}
        setShowBrostyProduct={setShowBrostyProduct}
        setShowSpecialProduct={setShowSpecialProduct}
        setShowHotBrewProduct={setShowHotBrewProduct}
      />
      {showMilkTeaProduct && (
        <MilkTea
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
        />
      )}
      {showPrafProduct && (
        <Praf
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
          domes={domes}
          setDomes={setDomes}
        />
      )}
      {showIcedCoffeeProduct && (
        <IcedCoffee
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
          domes={domes}
          setDomes={setDomes}
        />
      )}
      {showFruitTeaProduct && (
        <FruitTea
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
          domes={domes}
          setDomes={setDomes}
        />
      )}
      {showBrostyProduct && (
        <Brosty
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
          domes={domes}
          setDomes={setDomes}
        />
      )}
      {showSpecialProduct && (
        <Special
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
          grandeCups={grandeCups}
          setGrandeCups={setGrandeCups}
          straws={straws}
          setStraws={setStraws}
          domes={domes}
          setDomes={setDomes}
          hotCups={hotCups}
          setHotCups={setHotCups}
          flatLids={flatLids}
          setFlatLids={setFlatLids}
        />
      )}
      {showHotBrewProduct && (
        <HotBrew
          cart={cart}
          setCart={setCart}
          // medioCups={medioCups}
          // setMedioCups={setMedioCups}
          // grandeCups={grandeCups}
          // setGrandeCups={setGrandeCups}
          // straws={straws}
          // setStraws={setStraws}
          // domes={domes}
          // setDomes={setDomes}
          hotCups={hotCups}
          setHotCups={setHotCups}
          flatLids={flatLids}
          setFlatLids={setFlatLids}
        />
      )}
      <SettingsButton setShowSettingsModal={setShowSettingsModal} />
      <OrderSummary
        cartItems={cart.length}
        totalPrice={totalPrice}
        myFunc={myFunc}
        cart={cart}
        setCart={setCart}
        medioCups={medioCups}
        setMedioCups={setMedioCups}
        grandeCups={grandeCups}
        setGrandeCups={setGrandeCups}
        straws={straws}
        setStraws={setStraws}
        domes={domes}
        setDomes={setDomes}
        hotCups={hotCups}
        setHotCups={setHotCups}
        flatLids={flatLids}
        setFlatLids={setFlatLids}
      />
      {showSettingsModal && (
        <SettingsModal
          onClose={() => setShowSettingsModal(false)}
          medioCups={medioCups}
          grandeCups={grandeCups}
          domes={domes}
          setMedioCups={setMedioCups}
          setGrandeCups={setGrandeCups}
          setDomes={setDomes}
          straws={straws}
          setStraws={setStraws}
          hotCups={hotCups}
          setHotCups={setHotCups}
          flatLids={flatLids}
          setFlatLids={setFlatLids}
        />
      )}
    </>
  );
}

export default App;
