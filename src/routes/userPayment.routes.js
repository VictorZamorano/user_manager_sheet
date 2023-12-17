"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userPaymentRoutes = (0, express_1.Router)();
// Deberia ser solo put, solo queremos modificar el estado del pago manualmente
// userPaymentRoutes.post('/');
userPaymentRoutes.put('/');
exports.default = userPaymentRoutes;
