import mongoose, { Schema, Document } from 'mongoose';

export interface MedicationModel extends Document {
    name: string;
    dosage: string;
    frequency: string;
    user: mongoose.Schema.Types.ObjectId; // Reference to the user
}

const medicationSchema: Schema = new Schema({
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User model
});

export default mongoose.model<MedicationModel>('Medication', medicationSchema);
