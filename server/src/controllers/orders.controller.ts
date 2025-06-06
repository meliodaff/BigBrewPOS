import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Order } from "../models/orders";
const prisma = new PrismaClient();

export const getOrders = async (req: Request, res: Response) => {
  try {
    const rawOrders = await prisma.orders.findMany();

    // the reason i formatted it is because i tried to only get the time of the createdAt entity
    const formattedOrders = rawOrders.map((order) => {
      return {
        id: order.order_id,
        drinkName: order.drink_name,
        timeCreated: order.created_at.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        dateCreated: order.created_at.toISOString().split("T")[0],
      };
    });
    res.status(200).json(formattedOrders);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { drinkName } = req.body;
  console.log(req.body);

  if (!drinkName) {
    res.status(400).json({ message: "Drink name is null" });
    return;
  }

  const order = await prisma.orders.create({
    data: {
      drink_name: drinkName,
    },
  });
  res.status(200).json(order);
};
