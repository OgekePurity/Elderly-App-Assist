import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

// Get all appointments for the logged-in user
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id });
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Failed to fetch appointments. Please try again later.' });
    }
};

// Add a new appointment for the logged-in user
export const addAppointment = async (req: Request, res: Response) => {
    try {
        const { doctor, date, time } = req.body;

        // Validate input
        if (!doctor || !date || !time) {
            return res.status(400).json({ error: 'Doctor, date, and time are required.' });
        }

        const appointment = new Appointment({ user: req.user.id, doctor, date, time });
        await appointment.save();

        res.status(201).json({ message: 'Appointment added successfully', appointment });
    } catch (error) {
        console.error('Error adding appointment:', error);
        res.status(500).json({ error: 'Failed to add appointment. Please try again later.' });
    }
};

// Update an existing appointment
export const updateAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { doctor, date, time } = req.body;

        // Validate input
        if (!doctor || !date || !time) {
            return res.status(400).json({ error: 'Doctor, date, and time are required.' });
        }

        const appointment = await Appointment.findOneAndUpdate(
            { _id: id, user: req.user.id },
            { doctor, date, time },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found.' });
        }

        res.status(200).json({ message: 'Appointment updated successfully', appointment });
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ error: 'Failed to update appointment. Please try again later.' });
    }
};

// Delete an existing appointment
export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const appointment = await Appointment.findOneAndDelete({ _id: id, user: req.user.id });

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found.' });
        }

        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: 'Failed to delete appointment. Please try again later.' });
    }
};
