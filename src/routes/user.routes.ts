import { Router } from "express";
import { postUser } from "../controllers/user.controller";

const userRoutes = Router();

// Visualiza todos los usuarios
userRoutes.get('/');
// Visualiza a un solo usuario
userRoutes.get('/:id');
// Añade un usuario
userRoutes.post('/', postUser);
// Actualiza el perfil de los usuarios
userRoutes.put('/:id')
// Elimina un usuario
userRoutes.delete('/:id');

export default userRoutes;