import { Router } from 'express';
import { getMedications, addMedication, updateMedication, deleteMedication } from '../controllers/medicationController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/',  getMedications);
router.post('/',  addMedication);
router.put('/:id',  updateMedication);
router.delete('/:id',  deleteMedication);

export default router;
