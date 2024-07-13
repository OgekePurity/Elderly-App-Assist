// src/models/Medication.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface MedicationModel extends Document {
    user: mongoose.Types.ObjectId;
    name: string;
    dosage: string;
    frequency: string;
}

const medicationSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true }
});

export default mongoose.model<MedicationModel>('Medication', medicationSchema);
