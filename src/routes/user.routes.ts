import { Router } from 'express';
const router = Router();

import { getUsers, getUserById } from '../controllers/user.controller';

// /api/users
router.get('/users', getUsers);
// router.post('/users', getUser);

// /api/users/:id
router.get('/users/:id', getUserById);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteteUser);

export default router;
