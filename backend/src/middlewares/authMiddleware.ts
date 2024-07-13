import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user: any;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !(authHeader as string).toLowerCase().startsWith('bearer ')) {
    console.error('Authorization header missing or improperly formatted');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = (authHeader as string).split(' ')[1];
  console.log('Token received:', token);
  const secret = process.env.JWT_ACCESS_TOKEN;

  if (!secret) {
    console.error('JWT secret is not set.');
    return res.status(500).json({ message: 'Internal server error' });
  }

  jwt.verify(token, secret as string, (err, decoded) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.status(403).json({ message: 'Forbidden' });
    } else {
      req.user = decoded;
      console.log('User authenticated:', req.user);
      next();
    }
  });
};

export default authMiddleware;
