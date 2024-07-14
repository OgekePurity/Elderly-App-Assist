import { Request, Response } from 'express';
import JournalEntry from '../models/JournalEntry';

export const getJournalEntries = async (req: Request, res: Response) => {
    try {
        const journalEntries = await JournalEntry.find({ user: req.user?.id });
        res.status(200).json(journalEntries);
    } catch (error) {
        console.error('Error fetching journal entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const addJournalEntry = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const journalEntry = new JournalEntry({ user: req.user.id, title, content });
        await journalEntry.save();

        res.status(201).json({ message: 'Journal entry added successfully', journalEntry });
    } catch (error) {
        console.error('Error adding journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateJournalEntry = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const updatedJournalEntry = await JournalEntry.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { title, content },
            { new: true }
        );

        if (!updatedJournalEntry) {
            return res.status(404).json({ error: 'Journal entry not found' });
        }

        res.status(200).json({ message: 'Journal entry updated successfully', journalEntry: updatedJournalEntry });
    } catch (error) {
        console.error('Error updating journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const deletedJournalEntry = await JournalEntry.findOneAndDelete({ _id: req.params.id, user: req.user.id });

        if (!deletedJournalEntry) {
            return res.status(404).json({ error: 'Journal entry not found' });
        }

        res.status(200).json({ message: 'Journal entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
