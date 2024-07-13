import { Router } from 'express';
import { getJournalEntries, addJournalEntry, updateJournalEntry, deleteJournalEntry } from '../controllers/journalController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getJournalEntries);
router.post('/', authMiddleware, addJournalEntry);
router.put('/:id', authMiddleware, updateJournalEntry);
router.delete('/:id', authMiddleware, deleteJournalEntry);

export default router;
