"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
        console.error('Authorization header missing or improperly formatted');
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    console.log('Token received:', token);
    const secret = process.env.JWT_ACCESS_TOKEN;
    if (!secret) {
        console.error('JWT secret is not set.');
        return res.status(500).json({ message: 'Internal server error' });
    }
    jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
        if (err) {
            console.error('JWT verification error:', err);
            return res.status(403).json({ message: 'Forbidden' });
        }
        else {
            req.user = decoded;
            console.log('User authenticated:', req.user);
            next();
        }
    });
};
exports.default = authMiddleware;
