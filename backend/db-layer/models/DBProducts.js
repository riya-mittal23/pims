import mongoose from "mongoose"

const productSchema= new mongoose.Schema(
    {
        name:{
            type:String
        },
        category:{
            type:String
        },
        price:{
            type:Number
        },
        stock:{
            type:Number
        }
    },{
        timestamps:true
    }
)

export const ProductDB=mongoose.model("products",productSchema)