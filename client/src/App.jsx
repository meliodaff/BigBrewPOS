import { use, useEffect, useState } from "react";
import Header from "./components/Header";
import MilkTea from "./components/MilkTea";
import Praf from "./components/Praf";
import IcedCoffee from "./components/IcedCoffee";
import SettingsButton from "./components/SettingsButton";
import OrderSummary from "./components/OrderSummary";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [showMilkTeaProduct, setShowMilkTeaProduct] = useState(true);
  const [showPrafProduct, setShowPrafProduct] = useState(false);
  const [showIcedCoffeeProduct, setShowIcedCoffeeProduct] = useState(false);

  const [totalPriceForMilkTeas, setTotalPriceForMilkTeas] = useState(0);
  const [totalPriceForPrafs, setTotalPriceForPrafs] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [cart, setCart] = useState([]);

  const [medioCups, setMedioCups] = useState(100);
  const [grandeCups, setGrandeCups] = useState(100);
  const [domes, setDomes] = useState(100);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

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
  }, [totalPriceForMilkTeas, totalPriceForPrafs, cart]);

  const myFunc = () => {
    console.log(cart);
  };

  return (
    <>
      <Header
        setShowMilkTeaProduct={setShowMilkTeaProduct}
        setShowPrafProduct={setShowPrafProduct}
        setShowIcedCoffeeProduct={setShowIcedCoffeeProduct}
      />
      {showMilkTeaProduct && (
        <MilkTea
          cart={cart}
          setCart={setCart}
          medioCups={medioCups}
          setMedioCups={setMedioCups}
        />
      )}
      {showPrafProduct && <Praf cart={cart} setCart={setCart} />}
      {showIcedCoffeeProduct && <IcedCoffee cart={cart} setCart={setCart} />}
      <SettingsButton setShowSettingsModal={setShowSettingsModal} />
      <OrderSummary
        cartItems={cart.length}
        totalPrice={totalPrice}
        myFunc={myFunc}
        cart={cart}
        setCart={setCart}
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
        />
      )}
    </>
  );
}

export default App;
