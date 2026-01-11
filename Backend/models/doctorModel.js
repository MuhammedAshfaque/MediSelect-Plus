import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },  // Inside the database email will be unique
    password: { type: String, required: true },  // email and password extra added - So that doctor can login into admit panel and can check booking appoinments
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
    address: { type: Object, required: true },
    date: { type: Number, required: true }, //To know when doctor was added into database

},{ minimize: false })  // In order to use empty object as default value
const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)  // to avoid creation of doctor model everytime. whenever project gets started
export default doctorModel