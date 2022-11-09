const { check, validationResult, param, query } = require('express-validator');
import { ErrorMessage } from '../helper/ErrorMessage';
import { body } from 'express-validator';


/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of email
 * @param {string} email
 * @param {boolean} isRequired
 */
export let checkEmail = (email) => {
    return check(email, ErrorMessage.email.required)
        .exists()
        .isEmail().withMessage(ErrorMessage.email.validation)
        .trim()
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of email
 * @param {string} email
 * @param {boolean} isRequired
 */
export let checkEmailOptional = (email) => {
    return check(email, ErrorMessage.email.required)
        .optional()
        .isEmail().withMessage(ErrorMessage.email.validation)
        .trim()
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of password
 * @param {string} password
 * @param {boolean} isRequired
 */
export let password = (password) => {
    return check(password)
        .exists()
        .trim()
}

export let passwordOptional = (password) => {
    return check(password)
        .optional()
        .trim()
}



export let checkPassword = (password) => {
    return check(password, ErrorMessage.password.required)
        .exists().withMessage(ErrorMessage.password.required)
        .trim()
}

export let checkPasswordOptional = (password) => {
    return check(password, ErrorMessage.password.required)
        .optional()
        .trim()
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of Query
 * @param {string} id
 * @param {boolean} isRequired
 */

export let checkQuery = (id) => {
    return query(id, ErrorMessage.id.required).isLength({ min: 1 })
        .trim()
        .exists()
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of Params
 * @param {string} id
 * @param {boolean} isRequired
 */

export let checkParam = (id) => {
    return param(id, ErrorMessage.id.required)
        .trim()
        .exists()
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of boady arguments
 * @param {string} val
 * @param {boolean} isRequired
 */
export let checkRequestBodyParams = (val) => {
    return body(val, ErrorMessage.general.required).isLength({ min: 1 })
        .trim()
        .exists().withMessage(ErrorMessage.general.required)
}

/**
 * @author Murugan S
 * @date  14-10-2021
 * @description Function to check for the Validation of Mobile
 * @param {string} mobile
 * @param {boolean} isRequired
 */
export let checkMobile = (mobile) => {
    return check(mobile, ErrorMessage.mobileNumber.validation).isLength({ min: 10, max: 10 })
        .trim()
        .exists().withMessage(ErrorMessage.mobileNumber.validation)
}