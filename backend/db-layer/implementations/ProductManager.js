import { ProductDB } from "../models/DBProducts.js"

export const getProducts=async()=>{
    return await ProductDB.find()
}

export const addProducts=async(req)=>{
    const data =new ProductDB(req)
    return await data.save()
}

export const lowStockProducts=async(stock)=>{
    const products=await ProductDB.find({stock:{$lt:Number(stock)}})
return products
}