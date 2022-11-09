import { validationResult } from "express-validator";
import * as async from "async";
import { Forgot, ForgotDocument } from "src/models/forgot.model";
import { response } from "../helper/commonResponseHandler";
import { clientError, errorMessage } from "../helper/ErrorMessage";

var activity = "Forgot";
