import { use, useEffect, useState } from "react";
import Header from "./components/Header";
import MilkTea from "./components/MilkTea";
import Praf from "./components/Praf";
import IcedCoffee from "./components/IcedCoffee";
import SettingsButton from "./components/SettingsButton";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [showMilkTeaProduct, setShowMilkTeaProduct] = useState(true);
  const [showPrafProduct, setShowPrafProduct] = useState(false);
  const [showIcedCoffeeProduct, setShowIcedCoffeeProduct] = useState(false);

  const [totalPriceForMilkTeas, setTotalPriceForMilkTeas] = useState(0);
  const [totalPriceForPrafs, setTotalPriceForPrafs] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [cart, setCart] = useState([]);

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
      {showMilkTeaProduct && <MilkTea cart={cart} setCart={setCart} />}
      {showPrafProduct && <Praf cart={cart} setCart={setCart} />}
      {showIcedCoffeeProduct && <IcedCoffee cart={cart} setCart={setCart} />}
      <SettingsButton />
      <OrderSummary
        cartItems={cart.length}
        totalPrice={totalPrice}
        myFunc={myFunc}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default App;
