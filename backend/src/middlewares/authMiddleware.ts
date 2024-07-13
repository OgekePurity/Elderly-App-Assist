import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user: any;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader ||!(authHeader as string).toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = (authHeader as string).split(' ')[1];

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN as string, (err: jwt.JsonWebTokenError | null, decoded: jwt.JwtPayload | string | undefined) => {
    if (err) {
      res.status(403).json({ message: 'Forbidden' });
    } else {
      req.user = decoded;
      next();
    }
  });
};

export default authMiddleware;