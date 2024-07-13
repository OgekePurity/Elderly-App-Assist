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
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("../../server"));
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MONGO_URI);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.db) {
        yield mongoose_1.default.connection.db.dropDatabase(); // Check if db connection exists
    }
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.db) {
        yield mongoose_1.default.connection.db.dropDatabase(); // Check if db connection exists
    }
}));
exports.default = server_1.default; // Export the app instance for use in tests