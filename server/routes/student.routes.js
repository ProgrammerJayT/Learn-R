import express from 'express';
import { login, register } from '../controllers/student';

const studentRoutes = express.Router();

studentRoutes.post('/login', login);
studentRoutes.post('/register', register);

export default studentRoutes;
