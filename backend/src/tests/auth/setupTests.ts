import mongoose from 'mongoose';
import app from '../../server';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

beforeAll(async () => {
  await mongoose.connect(MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  if (mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase(); // Check if db connection exists
  }
});

afterEach(async () => {
  if (mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase(); // Check if db connection exists
  }
});

export default app; // Export the app instance for use in tests
