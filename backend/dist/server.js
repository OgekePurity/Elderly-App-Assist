"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const db_1 = __importDefault(require("./config/db"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const communityRoutes_1 = __importDefault(require("./routes/communityRoutes"));
const journalRoutes_1 = __importDefault(require("./routes/journalRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const medicationRoutes_1 = __importDefault(require("./routes/medicationRoutes"));
dotenv_1.default.config();
const logger_1 = require("./middlewares/logger");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
const PORT = process.env.PORT || 5000;
app.use((0, cookie_parser_1.default)());
app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use('/api/auth', authRoute_1.default);
app.use('/api/medications', medicationRoutes_1.default);
app.use('/api/appointments', appointmentRoutes_1.default);
app.use('/api/journal', journalRoutes_1.default);
app.use('/api/community', communityRoutes_1.default);
app.use(errorHandler_1.default);
app.use(logger_1.logger);
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path_1.default.join(__dirname, 'views', '404.html'));
    }
    else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    }
    else {
        res.type('txt').send('404 Not Found');
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
