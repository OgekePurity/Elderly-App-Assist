import { IUser } from '../src/models/User'

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Add user property to the Request type
    }
  }
}
