import { Schema, model, Document } from 'mongoose';

interface IJournalEntry extends Document {
    user: Schema.Types.ObjectId;
    title: string;
    content: string;
    date: Date;
}

const journalEntrySchema = new Schema<IJournalEntry>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model<IJournalEntry>('JournalEntry', journalEntrySchema);
