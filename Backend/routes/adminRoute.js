import express from 'express'
import { addDoctor, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import { changeAvailablity } from '../controllers/doctorController.js'
import upload from '../middlewares/multer.js'
import { loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
const adminRouter = express.Router()

adminRouter.post('/login', loginAdmin)

//Protected route, authentication will be needed. No any one can add doctor
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
adminRouter.get('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailablity)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)
export default adminRouter