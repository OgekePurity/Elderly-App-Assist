// src/controllers/medicationController.ts

import { Request, Response } from 'express';
import Medication from '../models/Medication';

// GET all medications for a specific user
export const getMedications = async (req: Request, res: Response) => {
    try {
      const medications = await Medication.find({ user: req.user.id });
      res.status(200).json(medications);
    } catch (error) {
      console.error('Error fetching medications:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// GET single medication by ID
export const getMedicationById = async (req: Request, res: Response) => {
    try {
        const medication = await Medication.findOne({ _id: req.params.id, user: req.user.id });
        if (!medication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.status(200).json(medication);
    } catch (error) {
        console.error('Error fetching medication by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST a new medication for the logged-in user
export const addMedication = async (req: Request, res: Response) => {
    try {
        const { name, dosage, frequency } = req.body;

        const medication = new Medication({ user: req.user.id, name, dosage, frequency });
        await medication.save();
        

        res.status(201).json({ message: 'Medication added successfully', medication });
    } catch (error) {
        console.error('Error adding medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT update medication by ID
export const updateMedication = async (req: Request, res: Response) => {
    try {
        const { name, dosage, frequency } = req.body;

        const updatedMedication = await Medication.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { name, dosage, frequency },
            { new: true } // Return the updated document
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

// DELETE medication by ID
export const deleteMedication = async (req: Request, res: Response) => {
    try {
        const deletedMedication = await Medication.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!deletedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }

        res.status(200).json({ message: 'Medication deleted successfully' });
    } catch (error) {
        console.error('Error deleting medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
