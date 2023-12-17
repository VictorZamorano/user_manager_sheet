"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminAccRoutes = (0, express_1.Router)();
adminAccRoutes.post('/register');
adminAccRoutes.post('/login');
exports.default = adminAccRoutes;
