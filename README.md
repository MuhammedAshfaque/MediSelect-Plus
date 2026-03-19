# MediSelect Plus - Doctor Appointment Booking System

A comprehensive full-stack web application that revolutionizes healthcare appointment management by enabling patients to book doctor appointments online, while providing administrators and doctors with powerful dashboards for efficient management and operations.

##  Features

### For Patients
- **User-Friendly Interface**: Intuitive and responsive design for easy navigation
- **Doctor Discovery**: Browse doctors by specialty with detailed profiles
- **Online Booking**: Secure appointment scheduling with real-time availability
- **Profile Management**: Personal dashboard to manage appointments and profile
- **Payment Integration**: Secure payment processing via Razorpay

### For Administrators
- **Comprehensive Dashboard**: Overview of all appointments, doctors, and users
- **Doctor Management**: Add, edit, and manage doctor profiles and availability
- **Appointment Oversight**: Monitor and manage all appointments across the system
- **User Management**: Handle user accounts and system-wide operations

### For Doctors
- **Dedicated Dashboard**: Personalized view of appointments and earnings
- **Appointment Management**: View, confirm, and manage patient appointments
- **Profile Control**: Update professional information and availability
- **Schedule Management**: Efficient handling of booking slots

## Technology Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router DOM** - Declarative routing for React applications
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - ODM for MongoDB
- **JWT (JSON Web Tokens)** - Secure authentication
- **bcrypt** - Password hashing for security
- **Razorpay** - Payment gateway integration
- **Cloudinary** - Cloud-based image management
- **Multer** - Middleware for handling file uploads

### Security & Authentication
- JWT-based authentication with role-based access control
- Password hashing with bcrypt
- CORS configuration for secure API access
- Input validation and sanitization

##  Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/doctor-appointment-booking.git
cd doctor-appointment-booking
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend server:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Admin Panel Setup
```bash
cd ../Admin
npm install
npm run dev
```

##  Usage

### Accessing the Application
- **Patient Portal**: http://localhost:5173 (Frontend)
- **Admin/Doctor Portal**: http://localhost:5174 (Admin)
- **Backend API**: http://localhost:4000

### Default Credentials
- **Admin Login**: Use credentials set up during initial configuration
- **Doctor Login**: Register through admin panel or use provided test accounts
- **Patient Registration**: Sign up through the patient portal

##  API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /get-profile` - Get user profile
- `POST /update-profile` - Update user profile
- `POST /book-appointment` - Book appointment
- `GET /appointments` - Get user appointments

### Admin Routes (`/api/admin`)
- `POST /login` - Admin authentication
- `POST /add-doctor` - Add new doctor
- `GET /all-doctors` - Get all doctors
- `POST /change-availability` - Change doctor availability
- `GET /appointments` - Get all appointments
- `POST /cancel-appointment` - Cancel appointment

### Doctor Routes (`/api/doctor`)
- `POST /login` - Doctor authentication
- `GET /appointments` - Get doctor appointments
- `POST /complete-appointment` - Mark appointment complete
- `GET /dashboard` - Get doctor dashboard data
- `POST /update-profile` - Update doctor profile

##  Project Structure

```
doctor-appointment-booking/
├── Admin/                 # Admin and Doctor panel
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React contexts for state management
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── package.json
├── Backend/               # Server-side application
│   ├── config/            # Database and cloud configurations
│   ├── controllers/       # Route controllers
│   ├── middlewares/       # Authentication and utility middlewares
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API route definitions
│   └── server.js          # Main server file
├── Frontend/              # Patient-facing application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React contexts
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── package.json
└── README.md
```

##  Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Role-Based Access Control**: Different permissions for users, doctors, and admins
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured cross-origin resource sharing
- **Secure Payment Processing**: Razorpay integration for safe transactions

