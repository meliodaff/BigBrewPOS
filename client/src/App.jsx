import { useState } from "react";
import Header from "./components/Header";
import MilkTea from "./components/MilkTea";
import Praf from "./components/Praf";
import SettingsButton from "./components/SettingsButton";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [showMilkTeaProduct, setShowMilkTeaProduct] = useState(true);
  const [showPrafProduct, setShowPrafProduct] = useState(false);

  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <Header
        setShowMilkTeaProduct={setShowMilkTeaProduct}
        setShowPrafProduct={setShowPrafProduct}
      />
      {showMilkTeaProduct && <MilkTea setTotalItems={setTotalItems} />}
      {showPrafProduct && <Praf />}
      <SettingsButton />
      <OrderSummary cartItems={totalItems} />
    </>
  );
}

export default App;
