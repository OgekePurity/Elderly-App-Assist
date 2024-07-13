"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentController_1 = require("../controllers/appointmentController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.get('/', authMiddleware_1.default, appointmentController_1.getAppointments);
router.post('/', authMiddleware_1.default, appointmentController_1.addAppointment);
router.put('/:id', authMiddleware_1.default, appointmentController_1.updateAppointment);
router.delete('/:id', authMiddleware_1.default, appointmentController_1.deleteAppointment);
exports.default = router;
