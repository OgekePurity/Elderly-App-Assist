import { Router } from 'express';
import { getCommunityPosts, addCommunityPost, updateCommunityPost, deleteCommunityPost } from '../controllers/communityController';
import  authMiddleware  from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware , getCommunityPosts);
router.post('/', authMiddleware , addCommunityPost);
router.put('/:id', updateCommunityPost);
router.delete('/:id', deleteCommunityPost);

export default router;
