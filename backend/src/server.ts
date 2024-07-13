import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute';
import cookieParser from 'cookie-parser';
import path from 'path';
import errorHandler from './middlewares/errorHandler';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api/auth', authRoutes);
/*app.use('/api/schedules', scheduleRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/appointments', appointmentRoutes);
 */
app.use(errorHandler);


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


const MONGO_URI = process.env.MONGO_URI as string;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
export default app;