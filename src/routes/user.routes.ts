import { Router } from 'express';
const router = Router();

import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/user.controller';

// /api/users
router.get('/users', getUsers);
router.post('/users', createUser);

// /api/users/:id
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
