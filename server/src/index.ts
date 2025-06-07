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

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
