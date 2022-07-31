import express from 'express';
import { createPost, findOne } from '../controllers/post';

const postRoutes = express.Router();

postRoutes.post('/', createPost);
postRoutes.get('/:id', findOne);

export default postRoutes;
