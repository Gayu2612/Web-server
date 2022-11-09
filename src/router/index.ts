import { Router } from 'express';
const router: Router = Router();


import Mail from './mail.routes';
import Student from './student.routes';
import Mobile from './mobile.routes';
import Login from './login.routes';
import Register from './register.routes'
import  Cloth  from './cloth.routes';


router.use('/login', Login);
router.use('/register', Register)
router.use('/mail', Mail);
router.use('/student', Student);
router.use('/mobile', Mobile)
router.use('/cloth',Cloth)



export default router;
