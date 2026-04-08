# MERN-Based Role Management System

This project is a MERN (MongoDB, Express.js, React.js, Node.js) based role management system that allows users to sign up, log in, and access different dashboards based on their roles (Admin, Manager, User).

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB (local or cloud instance)

## Project Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd MERN-based-role-management-system
```

### 2. Backend Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory and add the following:
   ```env
   PORT=4000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:4000`.

### 3. Frontend Setup

1. Navigate to the `Frontend` directory:
   ```bash
   cd ../Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`.

## Features

- **Role-Based Authentication**: Users are assigned roles (Admin, Manager, User) during signup.
- **Admin Dashboard**: Admins can manage users and view analytics.
- **Manager Dashboard**: Managers can oversee specific tasks.
- **User Dashboard**: Regular users can access their profiles and basic features.

## Folder Structure

```
MERN-based-role-management-system/
├── Backend/
│   ├── controller/       # Controllers for handling requests
│   ├── db/               # Database connection
│   ├── middleware/       # Authentication middleware
│   ├── model/            # Mongoose models
│   ├── routes/           # API routes
│   ├── index.js          # Entry point for the backend
│   └── package.json      # Backend dependencies
├── Frontend/
│   ├── src/              # React source files
│   ├── public/           # Static assets
│   ├── vite.config.js    # Vite configuration
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

## API Endpoints

### Authentication
- **POST** `/api/v1/auth/login`: Log in a user.
- **POST** `/api/v1/auth/signup`: Register a new user.

### Admin
- **POST** `/api/v1/admin/createManager`: Create a new manager.
- **POST** `/api/v1/admin/createUser`: Create a new user.
- **GET** `/api/v1/admin/viewAllUsers`: View all users.

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀