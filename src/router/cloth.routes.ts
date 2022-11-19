import { Router } from 'express';
import { deleteCloth, getAllcloth,getSingleCloth,savecloth, updateCloth } from '../controller/cloth.controller';

const router: Router = Router();


router.post('/', savecloth)
router.get('/', getAllcloth)
router.get('/getSingleCloth',getSingleCloth)
router.put('/',updateCloth)
router.delete('/',deleteCloth)
export default router;