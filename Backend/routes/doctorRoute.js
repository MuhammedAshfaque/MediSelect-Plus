import express from 'express';
import { loginDoctor, appointmentsDoctor, appointmentCancel, doctorList, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile, changeAvailablity } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';
import {  } from '../controllers/doctorController.js';
const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.get("/list", doctorList)
doctorRouter.post("/change-availability", authDoctor, changeAvailablity)
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)
doctorRouter.get("/dashboard", authDoctor, doctorDashboard)
doctorRouter.get("/profile", authDoctor, doctorProfile)
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile)

export default doctorRouter;