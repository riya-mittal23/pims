import { getProducts } from "../../db-layer/implementations/ProductManager.js"

export const getProductsService=async()=>{
    return await getProducts()
}

export const addProductsService=async(req)=>{
    return await addProducts(req)
}

export const lowStockProductsService=async(stock)=>{
    return await lowStockProducts(stock)
}