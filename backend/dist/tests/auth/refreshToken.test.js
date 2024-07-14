"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const User_1 = __importDefault(require("../../models/User"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
describe('Refresh Access Token Controller', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(MONGO_URI);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connection.close();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield User_1.default.deleteMany({});
    }));
    it('should refresh the access token', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_1.default.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
        });
        const refreshToken = jsonwebtoken_1.default.sign({ user: { id: user.id } }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '10d' });
        const response = yield (0, supertest_1.default)(server_1.default)
            .post('/api/auth/refresh')
            .set('Cookie', `refreshToken=${refreshToken}`)
            .send();
        expect(response.status).toBe(200);
        expect(response.body.accessToken).toBeDefined();
    }));
    it('should return 401 if no refresh token is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(server_1.default).post('/api/auth/refresh').send();
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('No refresh token provided');
    }));
});
