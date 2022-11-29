import { validationResult } from "express-validator";
import { clientError, errorMessage } from "../helper/ErrorMessage";
import { response } from "../helper/commonResponseHandler";
import { Cloth, ClothDocument } from "../models/cloth.model";

var activity = 'mobile';

/**
 * @author bharath M
 * @date 11-09-2022
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @description this function is used for getAll,getSingle mobile
*/

export const savecloth = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const ClothDetails: ClothDocument = req.body;
            const createCloth = new Cloth(ClothDetails);

            const data = await createCloth.save();
            response(req, res, activity, true, 200, data, clientError.success.savedSuccessfully);
        } catch (err: any) {
            response(req, res, activity, false, 500, {}, errorMessage.internalServer, err.message)
        }
    } else {
        response(req, res, activity, false, 422, {}, errorMessage.fieldValidation, JSON.stringify(errors.mapped()))
    }
};

export const getAllcloth = async (req, res, next) => {
    try {
        const data = await Cloth.find({ isDeleted: false });
        response(req, res, activity, true, 200, data, clientError.success.fetchedSuccessfully)
    }
    catch (err: any) {
        response(req, res, activity, false, 500, errorMessage.internalServer, err.message)
    }
};

export const getSingleCloth = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const data = await Cloth.findById({ _id: req.query._id });
            response(req, res, activity, true, 200, data, clientError.success.fetchedSuccessfully);
        }
        catch (err: any) {
            response(req, res, activity, false, 500, {}, errorMessage.internalServer, err.message);
        }
    }
    else { response(req, res, activity, false, 422, {}, errorMessage.fieldValidation, JSON.stringify(errors.mapped())) }
};


export let updateCloth = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            console.log('ttfhf', req.body);

            const clothData: ClothDocument = req.body;
            const updatClothData = new Cloth(clothData);
            let insertCloth = await updatClothData.updateOne({
                $set: {

                    imageUrl: clothData.imageUrl,
                    clothName: clothData.clothName,
                    price: clothData.price,
                    description: clothData.description,
                    category: clothData.category,
                    brand: clothData.brand,
                    quantity: clothData.quantity,
                    maxQuantity: clothData.maxQuantity,
                    type: clothData.type,
                    discount: clothData.discount
                }
            });
            response(req, res, activity, true, 200, insertCloth, clientError.success.updateSuccess);
        } catch (err: any) {
            response(req, res, activity, false, 500, {}, errorMessage.internalServer, err.message);
        }
    } else {
        response(req, res, activity, false, 422, {}, errorMessage.fieldValidation, JSON.stringify(errors.mapped()));
    }
};



export let deleteCloth = async (req, res, next) => {
    try {
        let { modifiedOn, modifiedBy } = req.body;
        let id = req.query._id;
        const data = await Cloth.findByIdAndUpdate({ _id: id }, {
            $set: {
                isDeleted: true,
                modifiedOn: modifiedOn,
                modifiedBy: modifiedBy,
            }
        })
        response(req, res, activity, true, 200, data, clientError.success.deleteSuccess)
    }
    catch (err: any) {
        response(req, res, activity, false, 500, {}, errorMessage.internalServer, err.message);
    }
};