import {Router} from 'express';
import * as database from '../database';

const router = Router();

router.get('/', (req, res) => {
    res.json(database.getSchedules());
});

export default router;