"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFoundApi_1 = require("./app/middlewares/notFoundApi");
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Routes
app.get("/", (req, res) => {
    res.json("Welcome to the Bike Servicing Management API");
});
// all routes 
app.use('/api', routes_1.default);
// global error handling
app.use(globalErrorHandler_1.default);
// api not found 
app.use(notFoundApi_1.notFoundApi);
exports.default = app;
