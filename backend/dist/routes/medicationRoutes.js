"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicationController_1 = require("../controllers/medicationController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.default, medicationController_1.getMedications);
router.post('/', authMiddleware_1.default, medicationController_1.addMedication);
router.put('/:id', authMiddleware_1.default, medicationController_1.updateMedication);
router.delete('/:id', authMiddleware_1.default, medicationController_1.deleteMedication);
exports.default = router;
