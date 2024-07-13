import { Request, Response } from 'express';
import Notification from '../models/Notification';

export const getNotifications = async (req: Request, res: Response) => {
    try {
        const notifications = await Notification.find({ user: req.user.id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
