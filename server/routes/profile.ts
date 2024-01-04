import express from 'express';
import { profileController } from '../controllers/index';

const router = express.Router();

router.post('/', profileController.saveProfile);
router.get('/:id', profileController.getProfile);

export default router;
