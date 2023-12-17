import { Router } from "express";

const adminAccRoutes = Router();

adminAccRoutes.post('/register');
adminAccRoutes.post('/login');

export default adminAccRoutes;