import { useState } from "react";
import axios from "axios";
const useFetchOrders = () => {
  const [orders, setOrders] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/orders");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return { orders, loading, fetchOrders };
};

export default useFetchOrders;
