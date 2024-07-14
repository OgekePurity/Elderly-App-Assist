import { Request, Response } from 'express';
import Medication from '../models/Medication';

export const getMedications = async (req: Request, res: Response) => {
    try {
        const medications = await Medication.find();
        res.status(200).json(medications);
    } catch (error) {
        console.error('Error fetching medications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const addMedication = async (req: Request, res: Response) => {
    try {
        const { name, dosage, frequency } = req.body;

        const medication = new Medication({
            name,
            dosage,
            frequency,
        });
        await medication.save();

        res.status(201).json({ message: 'Medication added successfully', medication });
    } catch (error) {
        console.error('Error adding medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateMedication = async (req: Request, res: Response) => {
    try {
        const { name, dosage, frequency } = req.body;

        const updatedMedication = await Medication.findOneAndUpdate(
            { _id: req.params.id },
            { name, dosage, frequency },
            { new: true }
        );

        if (!updatedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }

        res.status(200).json({ message: 'Medication updated successfully', medication: updatedMedication });
    } catch (error) {
        console.error('Error updating medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteMedication = async (req: Request, res: Response) => {
    try {
        const deletedMedication = await Medication.findOneAndDelete({ _id: req.params.id });

        if (!deletedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }

        res.status(200).json({ message: 'Medication deleted successfully' });
    } catch (error) {
        console.error('Error deleting medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
