import express from 'express';
import { getPost,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
const routep = express.Router();

routep.get('/',getPost);
routep.post('/',createPost);
routep.patch('/:id',updatePost);
routep.delete('/:id',deletePost);
routep.patch('/:id/likepost',likePost);

export default routep;