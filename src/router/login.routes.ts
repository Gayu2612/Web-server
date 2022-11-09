import { Router } from "express"
import { loginEmail } from "../controller/login.controller"
import { basicAuthUser } from "src/middleware/checkAuth";
import { checkRequestBodyParams } from "src/middleware/Validators";


const router: Router = Router();

router.post('',
    loginEmail

)
export default router;