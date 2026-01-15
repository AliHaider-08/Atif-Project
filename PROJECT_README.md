# Atif Web Class Project

A full-stack web application with React frontend and Express.js backend, featuring user authentication and product management.

## Project Structure

```
my-app/
├── src/                    # React frontend source code
│   ├── Dropdown/          # Authentication components
│   │   ├── Signup.jsx      # User registration form
│   │   └── Signin.jsx      # User login form
│   ├── Pages/              # Application pages
│   │   ├── Home.jsx        # Home page
│   │   ├── Dashboard.jsx   # Admin dashboard
│   │   ├── ProductList.jsx # Product listing
│   │   ├── Customers.jsx   # Customer management
│   │   ├── Orders.jsx      # Order management
│   │   └── Settings.jsx    # Application settings
│   ├── redux/              # Redux state management
│   └── Images/             # Image assets
├── backend/                # Express.js backend
│   ├── src/app/            # Backend application code
│   │   ├── Users/          # User management
│   │   ├── Products/       # Product management
│   │   ├── Category/       # Category management
│   │   └── Config/         # Database configuration
│   ├── index.js            # Backend entry point
│   └── package.json        # Backend dependencies
└── package.json            # Frontend dependencies
```

## Features

### Frontend (React)
- ✅ User registration with form validation
- ✅ User login interface
- ✅ Responsive design with Tailwind CSS
- ✅ Redux state management
- ✅ React Router for navigation
- ✅ Product management interface
- ✅ Customer management
- ✅ Order tracking
- ✅ Shopping cart functionality

### Backend (Express.js)
- ✅ RESTful API endpoints
- ✅ User CRUD operations
- ✅ Product management
- ✅ Category management
- ✅ Database integration with Sequelize
- ✅ Password hashing with bcryptjs
- ✅ CORS enabled for frontend integration
- ✅ Comprehensive error handling

## Authentication System

### User Registration
- Fields: Name, Email, Password, Phone, CNIC, Gender, Age
- Password hashing with bcryptjs
- Email validation
- Form validation on frontend
- User data stored in MySQL database

### Database Schema (Users Table)
```sql
- id (Primary Key, Auto Increment)
- name (VARCHAR, Required)
- email (VARCHAR, Required, Unique)
- password (VARCHAR, Required, Hashed)
- phone (VARCHAR, Optional)
- cnic (VARCHAR, Optional)
- gender (VARCHAR, Optional)
- age (INTEGER, Optional)
```

## API Endpoints

### User Management
- `POST /api/createUser` - Register new user
- `GET /api/Users` - Get all users
- `GET /api/User/:id` - Get user by ID
- `PUT /api/User/:id` - Update user
- `DELETE /api/User/:id` - Delete user

### Product Management
- `GET /api/Products` - Get all products
- `POST /api/Products` - Create product
- `PUT /api/Products/:id` - Update product
- `DELETE /api/Products/:id` - Delete product

### Category Management
- `GET /api/Categories` - Get all categories
- `POST /api/Categories` - Create category
- `PUT /api/Categories/:id` - Update category
- `DELETE /api/Categories/:id` - Delete category

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- Git

### Frontend Setup
```bash
cd my-app
npm install
npm start
```
Frontend runs on: `http://localhost:3000`

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on: `http://localhost:9000`

### Database Configuration
1. Create a MySQL database
2. Update database credentials in `backend/src/app/Config/Config.js`
3. The application will automatically create tables on first run

## Technology Stack

### Frontend
- **React 19.1.0** - UI framework
- **React Router 7.7.1** - Navigation
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Express.js** - Web framework
- **Sequelize** - ORM for database
- **MySQL2** - Database driver
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server

## Usage

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend Application**
   ```bash
   cd my-app
   npm start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:9000

4. **Register a New User**
   - Navigate to `/Signup`
   - Fill in the registration form
   - Submit to create account

5. **Login**
   - Navigate to `/Signin`
   - Enter credentials
   - Access authenticated features

## Development Notes

- The backend uses ES modules (`"type": "module"` in package.json)
- Database tables are automatically created/updated
- CORS is configured to allow all origins (development mode)
- Passwords are securely hashed before storage
- Frontend includes comprehensive error handling
- All API responses include proper error messages

## Future Enhancements

- [ ] JWT token-based authentication
- [ ] Protected routes
- [ ] User profile management
- [ ] File upload functionality
- [ ] Advanced search and filtering
- [ ] Payment integration
- [ ] Admin dashboard enhancements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---

**Developed by:** Ali and Team  
**Project Type:** Full-stack Web Application  
**Last Updated:** January 2026
