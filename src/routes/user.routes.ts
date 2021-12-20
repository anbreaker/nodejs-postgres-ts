import { Router } from 'express';
const router = Router();

import { getUsers } from '../controllers/user.controller';

// /api/users
router.get('/users', getUsers);
// router.post('/users', getUser);

// /api/users/:id
// router.get('/users/:id', getUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteteUser);

export default router;
