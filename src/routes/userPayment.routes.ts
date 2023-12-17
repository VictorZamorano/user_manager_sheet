import { Router } from "express";

const userPaymentRoutes = Router();

// Deberia ser solo put, solo queremos modificar el estado del pago manualmente
// userPaymentRoutes.post('/');
userPaymentRoutes.put('/');

export default userPaymentRoutes;