import request from 'supertest';
import app from '../../server' 
import User from '../../models/User';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test'

describe('Register Controller', () => { 
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.user).toBeDefined();
    expect(response.body.accessToken).toBeDefined();
  });

  it('should return 400 if user already exists', async () => {
    await User.create({ name: 'John Doe', email: 'john@example.com', password: 'password123' });

    const response = await request(app)
      .post('/api/auth/register')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User already exists');
  });
});
