import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(process.env.DATABASE_URL);
  res.send("im herdas2e");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server running at port ${port}`);
});
