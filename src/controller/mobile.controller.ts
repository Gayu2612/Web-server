import { validationResult } from "express-validator";
import { clientError, errorMessage } from "../helper/ErrorMessage";
import { response } from "../helper/commonResponseHandler";
import { Mobile, MobileDocument } from "../models/mobile.model";

var activity = 'mobile';

/**
 * @author bharath M
 * @date 11-09-2022
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @description this function is used for getAll,getSingle mobile
*/

export const savemobile = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const MobileDetails: MobileDocument = req.body;
            const createMobile = new Mobile(MobileDetails);
          
            const data = await createMobile.save();
            response(req, res, activity, true, 200, data, clientError.success.savedSuccessfully);
        } catch (err: any) {
            response(req, res, activity, false, 500, {}, errorMessage.internalServer, err.message)
        }
    } else {
        response(req, res, activity, false, 422, {}, errorMessage.fieldValidation, JSON.stringify(errors.mapped()))
    }
};

export const getAllMobile = async (req, res, next) => {
    try {
        const data = await Mobile.find({ isDeleted: false });
        response(req, res, activity, true, 200, data, clientError.success.fetchedSuccessfully)
    }
    catch (err: any) {
        response(req, res, activity, false, 500, errorMessage.internalServer, err.message)
    }
};


