import { useState } from "react";
import Header from "./components/Header";
import MilkTea from "./components/MilkTea";
import Praf from "./components/Praf";
import SettingsButton from "./components/SettingsButton";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [showMilkTeaProduct, setShowMilkTeaProduct] = useState(true);
  const [showPrafProduct, setShowPrafProduct] = useState(false);

  return (
    <>
      <Header
        setShowMilkTeaProduct={setShowMilkTeaProduct}
        setShowPrafProduct={setShowPrafProduct}
      />
      {showMilkTeaProduct && <MilkTea />}
      {showPrafProduct && <Praf />}
      <SettingsButton />
      <OrderSummary />
    </>
  );
}

export default App;
