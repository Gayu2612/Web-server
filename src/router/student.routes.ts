import { Router } from 'express';
 import { saveStudent } from '../controller/student.controller';

const router: Router = Router();


 router.post('/',saveStudent)


export default router;