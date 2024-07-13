"use strict";
// src/controllers/medicationController.ts
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
exports.deleteMedication = exports.updateMedication = exports.addMedication = exports.getMedicationById = exports.getMedications = void 0;
const Medication_1 = __importDefault(require("../models/Medication"));
// GET all medications for a specific user
const getMedications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medications = yield Medication_1.default.find({ user: req.user.id });
        res.status(200).json(medications);
    }
    catch (error) {
        console.error('Error fetching medications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getMedications = getMedications;
// GET single medication by ID
const getMedicationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield Medication_1.default.findOne({ _id: req.params.id, user: req.user.id });
        if (!medication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.status(200).json(medication);
    }
    catch (error) {
        console.error('Error fetching medication by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getMedicationById = getMedicationById;
// POST a new medication for the logged-in user
const addMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dosage, frequency } = req.body;
        const medication = new Medication_1.default({ user: req.user.id, name, dosage, frequency });
        yield medication.save();
        res.status(201).json({ message: 'Medication added successfully', medication });
    }
    catch (error) {
        console.error('Error adding medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.addMedication = addMedication;
// PUT update medication by ID
const updateMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dosage, frequency } = req.body;
        const updatedMedication = yield Medication_1.default.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { name, dosage, frequency }, { new: true } // Return the updated document
        );
        if (!updatedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.status(200).json({ message: 'Medication updated successfully', medication: updatedMedication });
    }
    catch (error) {
        console.error('Error updating medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateMedication = updateMedication;
// DELETE medication by ID
const deleteMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMedication = yield Medication_1.default.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!deletedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.status(200).json({ message: 'Medication deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteMedication = deleteMedication;
