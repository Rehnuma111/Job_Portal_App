import express from 'express';
import { createUser , getUserById, getUsers } from '../controller/user.controller.js';  

const router = express.Router();

router.post('/create', createUser); 
router.get('/getUsers', getUsers); 
router.get('/:id', getUserById);
router.put('/:id', updateUser);

export default router;  
