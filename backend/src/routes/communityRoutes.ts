import { Router } from 'express';
import {
  getCommunityPosts,
  addCommunityPost,
  updateCommunityPost,
  deleteCommunityPost
} from '../controllers/communityController';

const router = Router();

router.get('/', getCommunityPosts);
router.post('/', addCommunityPost);
router.put('/:id', updateCommunityPost);
router.delete('/:id', deleteCommunityPost);

export default router;
