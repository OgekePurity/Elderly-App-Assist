import { Request, Response } from 'express';
import CommunityPost from '../models/CommunityPost';

// Get all community posts
export const getCommunityPosts = async (req: Request, res: Response) => {
    try {
        const communityPosts = await CommunityPost.find({});
        res.status(200).json(communityPosts);
    } catch (error) {
        console.error('Error fetching community posts:', error);
        res.status(500).json({ error: 'Failed to fetch community posts. Please try again later.' });
    }
};

// Add a new community post
export const addCommunityPost = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const communityPost = new CommunityPost({ user: req.user.id, title, content });
        await communityPost.save();

        res.status(201).json({ message: 'Community post added successfully', communityPost });
    } catch (error) {
        console.error('Error adding community post:', error);
        res.status(500).json({ error: 'Failed to add community post. Please try again later.' });
    }
};

// Update a community post
export const updateCommunityPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }

        const communityPost = await CommunityPost.findById(id);

        if (!communityPost) {
            return res.status(404).json({ error: 'Community post not found.' });
        }

        if (communityPost.user.toString() !== req.user.id) {
            return res.status(403).json({ error: 'You are not authorized to update this post.' });
        }

        communityPost.title = title;
        communityPost.content = content;
        await communityPost.save();

        res.status(200).json({ message: 'Community post updated successfully', communityPost });
    } catch (error) {
        console.error('Error updating community post:', error);
        res.status(500).json({ error: 'Failed to update community post. Please try again later.' });
    }
};

// Delete a community post
export const deleteCommunityPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const communityPost = await CommunityPost.findById(id);

        if (!communityPost) {
            return res.status(404).json({ error: 'Community post not found.' });
        }

        if (communityPost.user.toString() !== req.user.id) {
            return res.status(403).json({ error: 'You are not authorized to delete this post.' });
        }

        await CommunityPost.deleteOne({ _id: id }); // Use deleteOne on the model with a query

        res.status(200).json({ message: 'Community post deleted successfully' });
    } catch (error) {
        console.error('Error deleting community post:', error);
        res.status(500).json({ error: 'Failed to delete community post. Please try again later.' });
    }
};
