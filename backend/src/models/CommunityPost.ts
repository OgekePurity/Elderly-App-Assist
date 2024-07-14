import { Schema, model, Document } from 'mongoose';

interface ICommunityPost extends Document {
    title: string;
    content: string;
    date: Date;
}

const communityPostSchema = new Schema<ICommunityPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default model<ICommunityPost>('CommunityPost', communityPostSchema);