import express, { Request } from "express";
import * as ordersController from "../controllers/orders.controller";

const router = express.Router();

router.get("/", ordersController.getOrders);
router.post("/", ordersController.createOrder);
export default router;
