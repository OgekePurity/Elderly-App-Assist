import { Schema, model, Document } from 'mongoose';

interface IJournalEntry extends Document {
    title: string;
    content: string;
    date: Date;
}

const journalEntrySchema = new Schema<IJournalEntry>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model<IJournalEntry>('JournalEntry', journalEntrySchema);
