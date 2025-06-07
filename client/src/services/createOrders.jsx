import { useState } from "react";
import axios from "axios";
const useCreateOrders = () => {
  const [responseForCreateOrders, setResponseForCreateOrders] = useState("");
  const [loadingForCreateOrders, setLoadingForCreateOrders] = useState(false);

  const createOrders = async (data) => {
    setLoadingForCreateOrders(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/orders/many",
        data
      );
      setResponseForCreateOrders(response.data);
      return response.data;
    } catch (error) {
      setResponseForCreateOrders(error); // idk if this will work, because im sending it in message object
      console.log(error.stack);
    }
    setLoadingForCreateOrders(false);
  };

  return { responseForCreateOrders, loadingForCreateOrders, createOrders };
};

export default useCreateOrders;
