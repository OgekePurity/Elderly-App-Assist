import express from 'express';
import { getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../controllers/appointmentController';
import  authMiddleware  from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getAppointments);
router.post('/', authMiddleware, addAppointment);
router.put('/:id', authMiddleware, updateAppointment);
router.delete('/:id', authMiddleware, deleteAppointment);

export default router;
