import * as mongoose from "mongoose";

export interface ClothDocument extends mongoose.Document {
    _id?: any;
    imageUrl?: string;
    clothName?:string;
    price?:number;
    description?: string;
    category?: string;
    brand?: string;
    quantity?: number;
    maxQuantity?:number;
    type?: string;
    discount?: number;
  
}
const clothSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, required: true, auto: true },
    imageUrl: { type: String },
    clothName:{type:String},
    price:{type:Number},
    description:{type:String},
    category:{type:String},
    brand:{type:String},
    quantity:{type:Number,default:1},
    maxQuantity:{type:Number},
    type:{type:String},
    discount:{type:String}
})
export const Cloth = mongoose.model('cloth', clothSchema)