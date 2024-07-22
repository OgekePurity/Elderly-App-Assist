import express, { Router } from 'express';
import { getMedications, addMedication, updateMedication, deleteMedication } from '../controllers/medicationController';

const router: Router = express.Router();

router.get('/', async (req, res) => {
  await getMedications(req, res);
});

router.post('/', async (req, res) => {
  await addMedication(req, res);
});

router.put('/:id', async (req, res) => {
  await updateMedication(req, res);
});

router.delete('/:id', async (req, res) => {
  await deleteMedication(req, res);
});

export default router;