import { Router } from 'express';
import { getMedications, addMedication, updateMedication, deleteMedication } from '../controllers/medicationController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getMedications); 
router.post('/', authMiddleware, addMedication); 
router.put('/:id', authMiddleware, updateMedication); 
router.delete('/:id', authMiddleware, deleteMedication); 

export default router;
  