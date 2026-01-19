import express from "express";
import { addProduct, getLowStockProducts, getProducts } from "../controllers/ProductController.js";
const router=express.Router()
router.get("/",getProducts);
router.post("/",addProduct);
router.get("/low-stock",getLowStockProducts);
export const routes=router
