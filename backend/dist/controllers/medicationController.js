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
exports.deleteMedication = exports.updateMedication = exports.addMedication = exports.getMedications = void 0;
const Medication_1 = __importDefault(require("../models/Medication"));
const getMedications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medications = yield Medication_1.default.find();
        res.status(200).json(medications);
    }
    catch (error) {
        console.error('Error fetching medications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getMedications = getMedications;
const addMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dosage, frequency } = req.body;
        const medication = new Medication_1.default({
            name,
            dosage,
            frequency,
        });
        yield medication.save();
        res.status(201).json({ message: 'Medication added successfully', medication });
    }
    catch (error) {
        console.error('Error adding medication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.addMedication = addMedication;
const updateMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, dosage, frequency } = req.body;
        const updatedMedication = yield Medication_1.default.findOneAndUpdate({ _id: req.params.id }, { name, dosage, frequency }, { new: true });
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
const deleteMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMedication = yield Medication_1.default.findOneAndDelete({ _id: req.params.id });
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
