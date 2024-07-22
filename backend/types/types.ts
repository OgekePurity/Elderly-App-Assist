import { Request as ExpressRequest } from 'express';
import { IUser } from '../src/models/User';

export interface IRequest extends ExpressRequest {
  user?: IUser;
}

export type IRequestHandler = (req: IRequest, res: Response) => any;