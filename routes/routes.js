import {Router} from 'express';
import { root, getLifeData, getMutualData, getSipData } from '../controller/methods.js';

const router = Router();

router.get('/', root)
router.post('/getLifeData', getLifeData)
router.post('/getMutualData', getMutualData)
router.post('/getSipData', getSipData)

export {router}