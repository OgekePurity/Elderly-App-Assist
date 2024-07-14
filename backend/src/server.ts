import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute';
import journalRoutes from './routes/journalRoutes'
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './config/db';
import errorHandler from './middlewares/errorHandler';
import communityRoutes from './routes/communityRoutes';
import medicationRoutes from './routes/medicationRoutes';
dotenv.config();

import cors from 'cors';

const app = express();
connectDB();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes)
app.use('/api/medications', medicationRoutes);
app.use('/api/community', communityRoutes);

app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
