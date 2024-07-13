"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJournalEntry = exports.updateJournalEntry = exports.addJournalEntry = exports.getJournalEntries = void 0;
const JournalEntry_1 = __importDefault(require("../models/JournalEntry"));
const getJournalEntries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user || !req.user.id) {
            return res.status(400).json({ error: 'User not authenticated' });
        }
        const journalEntries = yield JournalEntry_1.default.find({ user: req.user.id });
        if (!journalEntries || journalEntries.length === 0) {
            return res.status(404).json({ error: 'No journal entries found' });
        }
        res.status(200).json(journalEntries);
    }
    catch (error) {
        console.error('Error fetching journal entries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getJournalEntries = getJournalEntries;
const addJournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        const journalEntry = new JournalEntry_1.default({ user: req.user.id, title, content });
        yield journalEntry.save();
        res.status(201).json({ message: 'Journal entry added successfully', journalEntry });
    }
    catch (error) {
        console.error('Error adding journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.addJournalEntry = addJournalEntry;
const updateJournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        const updatedEntry = yield JournalEntry_1.default.findOneAndUpdate({ _id: id, user: req.user.id }, { title, content }, { new: true, runValidators: true });
        if (!updatedEntry) {
            return res.status(404).json({ error: 'Journal entry not found or you do not have permission' });
        }
        res.status(200).json({ message: 'Journal entry updated successfully', updatedEntry });
    }
    catch (error) {
        console.error('Error updating journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateJournalEntry = updateJournalEntry;
const deleteJournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedEntry = yield JournalEntry_1.default.findOneAndDelete({ _id: id, user: req.user.id });
        if (!deletedEntry) {
            return res.status(404).json({ error: 'Journal entry not found or you do not have permission' });
        }
        res.status(200).json({ message: 'Journal entry deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting journal entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteJournalEntry = deleteJournalEntry;
