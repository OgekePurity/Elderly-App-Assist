import { Schema, model, Document } from 'mongoose';

interface INotification extends Document {
    user: Schema.Types.ObjectId;
    message: string;
    date: Date;
}

const notificationSchema = new Schema<INotification>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model<INotification>('Notification', notificationSchema);
