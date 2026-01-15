import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser, createUser } from './UserController.js';

const router = express.Router();

router.get('/Users', getUsers);                // get all users
router.delete('/User/:id', deleteUser);        // delete user by id
router.get('/User/:id', getUserById);          // get user by id
router.post('/createUser', createUser);         // create a new user
router.put('/User/:id', updateUser);           // update user by id

export default router;