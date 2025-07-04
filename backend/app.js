import express from "express";
import dotenv from "dotenv";
import appoinmentsRoutes from "./routes/appoinmentsRoutes";

dotenv.config();

const app = express();
app.use(express.json());

//Routes
app.use("/api/appointments", appoinmentsRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
