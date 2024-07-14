import request from 'supertest';
import app from '../../server' 
import User from '../../models/User';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test'


describe('Refresh Access Token Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should refresh the access token', async () => {
    const user = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    const refreshToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_REFRESH_TOKEN as string,
      { expiresIn: '10d' }
    );

    const response = await request(app)
      .post('/api/auth/refresh')
      .set('Cookie', `refreshToken=${refreshToken}`)
      .send();

    expect(response.status).toBe(200);
    expect(response.body.accessToken).toBeDefined();
  });

  it('should return 401 if no refresh token is provided', async () => {
    const response = await request(app).post('/api/auth/refresh').send();

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('No refresh token provided');
  });
});
