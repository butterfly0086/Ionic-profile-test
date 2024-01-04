import express from 'express';
import profileRoute from './profile';

const router = express();

router.use('/profile', profileRoute);

export default router;
