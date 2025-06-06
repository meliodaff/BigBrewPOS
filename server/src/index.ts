import express, { Request, Response } from "express";
import dotenv from "dotenv";
import ordersRouter from "./routes/orders.route";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/orders", ordersRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
