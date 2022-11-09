import { Router } from 'express';
import { getAllMobile, savemobile } from '../controller/mobile.controller';

const router: Router = Router();


router.post('/', savemobile)
router.get('/', getAllMobile)


export default router;