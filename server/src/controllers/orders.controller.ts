import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { OrderInterface } from "../models/orders";

const prisma = new PrismaClient();

interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(): string;
}

const user: UserInterface = {
  id: 1,
  name: "jay",
  greet() {
    return `Hi im ${this.name}`;
  },
};

console.log(user.greet());

export const getOrders = async (req: Request, res: Response) => {
  try {
    const rawOrders = await prisma.orders.findMany();
    console.log(rawOrders);
    // the reason i formatted it is because i tried to only get the time of the createdAt entity
    const formattedOrders = rawOrders.map((order) => {
      return {
        id: order.order_id,
        drinkName: order.drink_name,
        drinkSize: order.drink_size,
        drinkPrice: order.drink_price,
        drinkImage: order.drink_image,
        drinkCategory: order.drink_category,
        drinkAddOns: order.drink_add_ons,
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
  const data: OrderInterface = req.body[0];
  if (!data) {
    res.status(400).json({ message: "Drink name is null" });
    return;
  }
  // in this one, i also formatted it but right inside the query
  const order = await prisma.orders.create({
    data: {
      drink_name: data.drinkName,
      drink_size: data.drinkSize,
      drink_price: data.price,
      drink_image: data.drinkImage,
      drink_category: data.drinkCategory,
      drink_add_ons: data.drinkAddOns,
    },
  });
  res.status(200).json(order);
};

export const createOrders = async (req: Request, res: Response) => {
  const data: OrderInterface[] = req.body;
  console.log(data);
  if (!data) {
    res.status(400).json({ message: "Drink name is null" });
    return;
  }
  // i have to format it so that i can insert its values in my db
  const formattedData = data.map((item) => {
    return {
      drink_name: item.drinkName,
      drink_size: item.drinkSize,
      drink_price: item.price,
      drink_image: item.drinkImage,
      drink_category: item.drinkCategory,
      drink_add_ons: item.drinkAddOns,
    };
  });

  const order = await prisma.orders.createMany({
    data: formattedData,
  });
  res.status(200).json({ insertedCount: order.count });
};
