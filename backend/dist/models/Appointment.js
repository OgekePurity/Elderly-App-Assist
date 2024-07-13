"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const appointmentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('Appointment', appointmentSchema);
