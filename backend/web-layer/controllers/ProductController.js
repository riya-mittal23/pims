import { addProductsService, getProductsService, lowStockProductsService } from "../../service-layer/implementations/ProductsService.js"

export const getProducts=async(req,res)=>{
    return await getProductsService()
}

export const addProduct=async (req,res)=>{
    const {name,category,price,stock}=req.body
    if(!name || !category ||price==null ||stock==null){
       return res.status(400).json({message:"All fields are required"})
    }
    const product=await addProductsService(req.body)
    return res.status(200).json({data:product})
}

export const getLowStockProducts=async(req,res)=>{
    let stockCount=10
    let products=await lowStockProductsService(stockCount)
    if(products.length){
        return res.status(200).json({data:products})
    }else{
        return res.status(400).json({message:"No Products found"})
    }
}