import { useState } from "react";
import axios from "axios";
const useCreateOrder = () => {
  const [responseForCreateOrder, setResponseForCreateOrder] = useState("");
  const [loadingForCreateOrder, setLoadingForCreateOrder] = useState(false);

  const createOrder = async (data) => {
    setLoadingForCreateOrder(true);
    try {
      const response = await axios.post("http://localhost:3000/orders", data);
      setResponseForCreateOrder(response.data);
      return response.data;
    } catch (error) {
      setResponseForCreateOrder(response.data); // idk if this will work, because im sending it in message object
      console.log(error.stack);
    }
    setLoadingForCreateOrder(false);
  };

  return { responseForCreateOrder, loadingForCreateOrder, createOrder };
};

export default useCreateOrder;
