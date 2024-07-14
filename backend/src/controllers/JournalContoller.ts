import { Request, Response } from 'express';
import JournalEntry from '../models/JournalEntry';

export const getJournalEntries = async (req: Request, res: Response) => {
  try {
    const journalEntries = await JournalEntry.find();

    if (!journalEntries || journalEntries.length === 0) {
      return res.status(404).json({ error: 'No journal entries found' });
    }

    res.status(200).json(journalEntries);
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addJournalEntry = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const journalEntry = new JournalEntry({ title, content });
    await journalEntry.save();

    res.status(201).json({ message: 'Journal entry added successfully', journalEntry });
  } catch (error) {
    console.error('Error adding journal entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateJournalEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const updatedEntry = await JournalEntry.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    res.status(200).json({ message: 'Journal entry updated successfully', updatedEntry });
  } catch (error) {
    console.error('Error updating journal entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedEntry = await JournalEntry.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ error: 'Journal entry not found' });
    }

    res.status(200).json({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting journal entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
