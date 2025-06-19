import express, { Request, Response } from "express";
import dotenv from "dotenv";
import ordersRouter from "./routes/orders.route";
import cors from "cors";
dotenv.config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/orders", ordersRouter);

const object = {
  name: "alice",
  age: 14,
};

const [firstArray, secondArray] = Object.entries(object);
const array = Object.entries(object);

const myChangedArray = Object.fromEntries(array);
console.log(firstArray[0]);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
