import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute';
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './config/db';
import errorHandler from './middlewares/errorHandler';
import communityRoutes from './routes/communityRoutes';
import journalRoutes from './routes/journalRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import medicationRoutes from './routes/medicationRoutes';
dotenv.config();
import { logger } from './middlewares/logger';
import cors from 'cors';

const app = express();
connectDB();
app.use(cors({ origin: 'http://localhost:5173' }));
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/community', communityRoutes);

 
app.use(errorHandler);
app.use(logger)


app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' });
  } else {
      res.type('txt').send('404 Not Found');
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



