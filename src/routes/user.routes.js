"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
// Visualiza todos los usuarios
userRoutes.get('/');
// Visualiza a un solo usuario
userRoutes.get('/:id');
// Añade un usuario
userRoutes.post('/', user_controller_1.postUser);
// Actualiza el perfil de los usuarios
userRoutes.put('/:id');
// Elimina un usuario
userRoutes.delete('/:id');
exports.default = userRoutes;
