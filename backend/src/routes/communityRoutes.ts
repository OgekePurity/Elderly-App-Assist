import { Router } from 'express';
import {
  getCommunityPosts,
  addCommunityPost,
  updateCommunityPost,
  deleteCommunityPost
} from '../controllers/communityController';

const router = Router();

router.get('/', getCommunityPosts);
router.post('/community', addCommunityPost);
router.put('/community/:id', updateCommunityPost);
router.delete('/community/:id', deleteCommunityPost);

export default router;
