import { validationResult } from "express-validator";
import * as async from "async";
import { StudentDocument, Student } from "../models/student.model";
import { response } from "../helper/commonResponseHandler";
import { clientError, errorMessage } from "../helper/ErrorMessage";

var activity = "Student";

export const saveStudent = async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            const EmailSettingsDetails: StudentDocument = req.body;
            const createEmailSettings = new Student(EmailSettingsDetails);
            const data = await createEmailSettings.save();
            response(
                req,
                res,
                activity,
                true,
                200,
                data,
                clientError.success.savedSuccessfully
            );
        } catch (err: any) {
            response(
                req,
                res,
                activity,
                false,
                500,
                {},
                errorMessage.internalServer,
                err.message
            );
        }
    } else {
        response(
            req,
            res,
            activity,
            false,
            422,
            {},
            errorMessage.fieldValidation,
            JSON.stringify(errors.mapped())
        );
    }
};
