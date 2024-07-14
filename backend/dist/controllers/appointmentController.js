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
exports.deleteAppointment = exports.updateAppointment = exports.addAppointment = exports.getAppointments = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
// Get all appointments for the logged-in user
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield Appointment_1.default.find({ user: req.user.id });
        res.status(200).json(appointments);
    }
    catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ error: 'Failed to fetch appointments. Please try again later.' });
    }
});
exports.getAppointments = getAppointments;
// Add a new appointment for the logged-in user
const addAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { doctor, date, time } = req.body;
        // Validate input
        if (!doctor || !date || !time) {
            return res.status(400).json({ error: 'Doctor, date, and time are required.' });
        }
        const appointment = new Appointment_1.default({ user: req.user.id, doctor, date, time });
        yield appointment.save();
        res.status(201).json({ message: 'Appointment added successfully', appointment });
    }
    catch (error) {
        console.error('Error adding appointment:', error);
        res.status(500).json({ error: 'Failed to add appointment. Please try again later.' });
    }
});
exports.addAppointment = addAppointment;
// Update an existing appointment
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { doctor, date, time } = req.body;
        // Validate input
        if (!doctor || !date || !time) {
            return res.status(400).json({ error: 'Doctor, date, and time are required.' });
        }
        const appointment = yield Appointment_1.default.findOneAndUpdate({ _id: id, user: req.user.id }, { doctor, date, time }, { new: true });
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found.' });
        }
        res.status(200).json({ message: 'Appointment updated successfully', appointment });
    }
    catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ error: 'Failed to update appointment. Please try again later.' });
    }
});
exports.updateAppointment = updateAppointment;
// Delete an existing appointment
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield Appointment_1.default.findOneAndDelete({ _id: id, user: req.user.id });
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found.' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: 'Failed to delete appointment. Please try again later.' });
    }
});
exports.deleteAppointment = deleteAppointment;
