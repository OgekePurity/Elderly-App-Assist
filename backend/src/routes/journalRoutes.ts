import { Router } from 'express';
import {
    getJournalEntries,
    addJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
} from '../controllers/JournalContoller';


const router = Router();

router.get('/', getJournalEntries);
router.post('/journal', addJournalEntry);
router.put('/journal/:id', updateJournalEntry);
router.delete('/:id', deleteJournalEntry);

export default router;
