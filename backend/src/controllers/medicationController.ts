import { Request, Response } from 'express';
import Medication from '../models/Medication';
import { IUser } from '../models/User';

export const getMedications = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as IUser)._id; // Type assertion
    const medications = await Medication.find({ user: userId });
    res.status(200).json(medications);
  } catch (error) {
    console.error('Error fetching medications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addMedication = async (req: Request, res: Response) => {
  try {
    console.log('Received request to add medication:', req.body); // Log request body
    const { name, dosage, frequency } = req.body;
    const user = req.user as IUser; // Type assertion

    console.log('Authenticated user:', user); // Log authenticated user

    if (!user) {
      console.error('User not authenticated');
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (!name || !dosage || !frequency) {
      console.error('Missing required fields:', { name, dosage, frequency });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const medication = new Medication({ name, dosage, frequency, user: user._id });
    await medication.save();
    console.log('Medication added successfully:', medication); // Log successful addition
    res.status(201).json(medication);
  } catch (error) {
    console.error('Error adding medication:', error); // Improved logging
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateMedication = async (req: Request, res: Response) => {
  try {
    console.log('Updating medication with ID:', req.params.id); // Log ID
    const { name, dosage, frequency } = req.body;
    const userId = (req.user as IUser)._id; // Type assertion

    const updatedMedication = await Medication.findOneAndUpdate(
      { _id: req.params.id, user: userId },
      { name, dosage, frequency },
      { new: true }
    );

    if (!updatedMedication) {
      return res.status(404).json({ error: 'Medication not found or unauthorized' });
    }

    res.status(200).json(updatedMedication);
  } catch (error) {
    console.error('Error updating medication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteMedication = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as IUser)._id; // Type assertion

    const deletedMedication = await Medication.findOneAndDelete({ _id: req.params.id, user: userId });

    if (!deletedMedication) {
      return res.status(404).json({ error: 'Medication not found or unauthorized' });
    }

    res.status(200).json({ message: 'Medication deleted successfully' });
  } catch (error) {
    console.error('Error deleting medication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
