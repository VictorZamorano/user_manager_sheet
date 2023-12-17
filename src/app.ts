import {Express} from 'express';
import express from "express"
import cors from "cors";
import morgan from "morgan";

// Routes
import userRoutes from './routes/user.routes';
import adminAccRoutes from './routes/admin.routes';
import userPaymentRoutes from './routes/userPayment.routes';

const app:Express = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(adminAccRoutes);
app.use(userRoutes);
app.use(userPaymentRoutes);

export default app;