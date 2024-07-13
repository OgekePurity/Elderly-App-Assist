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
exports.deleteCommunityPost = exports.updateCommunityPost = exports.addCommunityPost = exports.getCommunityPosts = void 0;
const CommunityPost_1 = __importDefault(require("../models/CommunityPost"));
// Get all community posts
const getCommunityPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const communityPosts = yield CommunityPost_1.default.find({});
        res.status(200).json(communityPosts);
    }
    catch (error) {
        console.error('Error fetching community posts:', error);
        res.status(500).json({ error: 'Failed to fetch community posts. Please try again later.' });
    }
});
exports.getCommunityPosts = getCommunityPosts;
// Add a new community post
const addCommunityPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }
        const communityPost = new CommunityPost_1.default({ user: req.user.id, title, content });
        yield communityPost.save();
        res.status(201).json({ message: 'Community post added successfully', communityPost });
    }
    catch (error) {
        console.error('Error adding community post:', error);
        res.status(500).json({ error: 'Failed to add community post. Please try again later.' });
    }
});
exports.addCommunityPost = addCommunityPost;
// Update a community post
const updateCommunityPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required.' });
        }
        const communityPost = yield CommunityPost_1.default.findById(id);
        if (!communityPost) {
            return res.status(404).json({ error: 'Community post not found.' });
        }
        if (communityPost.user.toString() !== req.user.id) {
            return res.status(403).json({ error: 'You are not authorized to update this post.' });
        }
        communityPost.title = title;
        communityPost.content = content;
        yield communityPost.save();
        res.status(200).json({ message: 'Community post updated successfully', communityPost });
    }
    catch (error) {
        console.error('Error updating community post:', error);
        res.status(500).json({ error: 'Failed to update community post. Please try again later.' });
    }
});
exports.updateCommunityPost = updateCommunityPost;
// Delete a community post
const deleteCommunityPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const communityPost = yield CommunityPost_1.default.findById(id);
        if (!communityPost) {
            return res.status(404).json({ error: 'Community post not found.' });
        }
        if (communityPost.user.toString() !== req.user.id) {
            return res.status(403).json({ error: 'You are not authorized to delete this post.' });
        }
        yield CommunityPost_1.default.deleteOne({ _id: id }); // Use deleteOne on the model with a query
        res.status(200).json({ message: 'Community post deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting community post:', error);
        res.status(500).json({ error: 'Failed to delete community post. Please try again later.' });
    }
});
exports.deleteCommunityPost = deleteCommunityPost;
