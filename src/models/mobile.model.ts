import * as mongoose from "mongoose";

export interface MobileDocument extends mongoose.Document {
    _id?: any;
    imageUrl?: string;
    mobileName?: string;
    mobilePrice?: number;
    mobileOffer: string;
    brandName?: string;
    mobileModelName?: string;
    modelNumber?: string;
    wirlessCarrier: string;
    operatingSystem: string;
    technology: string;
    connectivityTech?: string;
    mobileColor?: string;
    wirelessNetwork?: string;
    productDecsription?: string;
    simType?: boolean;
    displaySize?: string;
    displaytechnology?: string;
    resolution?: string;
    itemWight?: string;
    processorType?: string;
    processorCore?: string;
    storage?: string;
    battery?: string;
}
const mobileSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, required: true, auto: true },
    imageUrl: { type: String },
    mobileName: { type: String },
    mobilePrice: { type: Number },
    mobileOffer: { type: String },
    brandName: { type: String },
    mobileModelName: { type: String },
    modelNumber: { type: String },
    wirlessCarrier: { type: String },
    operatingSystem: { type: String },
    technology: { type: String },
    connectivityTech: { type: String },
    mobileColor: { type: String },
    wirelessNetwork: { type: String },
    productDecsription: { type: String },
    simType: { type: String },
    displaySize: { type: String },
    displaytechnology: { type: String },
    resolution: { type: String },
    itemWight: { type: String },
    processorType: { type: String },
    processorCore: { type: String },
    storage: { type: String },
    battery: { type: String },

})
export const Mobile = mongoose.model('mobile', mobileSchema)