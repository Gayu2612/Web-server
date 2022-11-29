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
    isDeleted?: boolean;
    status?: number;
    default?: number;
    createdOn?: Date;
    createdBy?: string;
    modifiedOn?: Date;
    modifiedBy?: string;
  
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
    discount:{type:String},
    isDeleted: { type: Boolean, default: false },
    status: { type: Number, default: 1 },
    createdOn: { type: Date },
    createdBy: { type: String },
    modifiedOn: { type: Date },
    modifiedBy: { type: String },
})
export const Cloth = mongoose.model('cloth', clothSchema)