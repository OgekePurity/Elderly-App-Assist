import { Schema, model, Document } from 'mongoose';

interface IAppointment extends Document {
    user: Schema.Types.ObjectId;
    doctor: string;
    date: Date;
    time: string;
}

const appointmentSchema = new Schema<IAppointment>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

export default model<IAppointment>('Appointment', appointmentSchema);
