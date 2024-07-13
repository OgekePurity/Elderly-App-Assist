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
exports.refreshAccessToken = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
// Register controller
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        let user = yield User_1.default.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        user = new User_1.default({
            name,
            email,
            password,
        });
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.password = yield bcryptjs_1.default.hash(password, salt);
        yield user.save();
        const payload = {
            user: {
                id: user.id,
            },
        };
        const accessToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: "1h" });
        res.json({ user, accessToken });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
        else {
            console.error("Unexpected error", err);
            res.status(500).send("Unexpected server error");
        }
    }
});
exports.register = register;
// Login controller
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const payload = {
            user: {
                id: user.id,
            },
        };
        const accessToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: "1h" });
        const refreshToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: "10d" });
        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: expires,
        });
        user.refreshToken = refreshToken;
        yield user.save();
        res.json({ user, accessToken, refreshToken });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send("Server error");
            console.error(err.message);
            res.status(500).json({ error: "Server error", message: err.message });
        }
        else {
            console.error("Unexpected error", err);
            res.status(500).send("Unexpected server error");
            console.error("Unexpected error", err);
        }
    }
});
exports.login = login;
// Refresh Access Token controller
// Refresh Access Token controller
const refreshAccessToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ message: "No refresh token provided" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
        if (!payload || !payload.user) {
            return res.status(401).json({ message: "Invalid payload" });
        }
        const user = yield User_1.default.findById(payload.user.id);
        if (!user) {
            return res.status(401).json({ message: "Invalid user" });
        }
        const newAccessToken = jsonwebtoken_1.default.sign({ user: { id: user.id } }, process.env.JWT_SECRET_TOKEN, { expiresIn: "1h" });
        res.json({ accessToken: newAccessToken });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: "Error refreshing access token" });
        }
        else {
            console.error("Unexpected error", err);
            res.status(500).json({ message: "Unexpected error refreshing access token" });
        }
    }
});
exports.refreshAccessToken = refreshAccessToken;
