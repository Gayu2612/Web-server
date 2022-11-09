import { Router } from 'express';
import { getAllcloth,getSingleCloth,savecloth, updatecloth } from '../controller/cloth.controller';

const router: Router = Router();


router.post('/', savecloth)
router.get('/', getAllcloth)
router.get('/getSingleCloth',getSingleCloth)
router.put('/',updatecloth)

export default router;