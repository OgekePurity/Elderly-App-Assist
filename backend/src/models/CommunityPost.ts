import { Schema, model, Document } from 'mongoose';

interface ICommunityPost extends Document {
    user: Schema.Types.ObjectId;
    title: string;
    content: string;
    date: Date;
}

const communityPostSchema = new Schema<ICommunityPost>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model<ICommunityPost>('CommunityPost', communityPostSchema);
