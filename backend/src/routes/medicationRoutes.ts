import { Router } from 'express';
import { getMedications, addMedication, updateMedication, deleteMedication } from '../controllers/medicationController';

const router = Router();

router.get('/',  getMedications);
router.post('/',  addMedication);
router.put('/:id',  updateMedication);
router.delete('/:id',  deleteMedication);

export default router;
