import {Router} from 'express';
import exampleRouter from './example.routes';

const router = Router();

router.use('/examples', exampleRouter);

export default router;
