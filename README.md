# Todo Backend

A simple RESTful API backend for a Todo application built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- CRUD operations for todos (create, read, update, delete)
- Input validation using Joi
- Protected routes for authenticated users
- MongoDB integration with Mongoose

## Project Structure

```
.
├── app.js
├── package.json
├── .env
├── .gitignore
├── config/
│   └── db.js
├── controllers/
│   ├── auth.js
│   └── todos.js
├── middleware/
│   ├── auth.js
│   └── validateSchema.js
├── models/
│   ├── todo.js
│   └── user.js
├── public/
├── routes/
│   ├── auth.js
│   └── todos.js
├── utils/
│   ├── bcrypt.js
│   └── token.js
└── validators/
    ├── todoValidation.js
    └── userValidation.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/kafi-anan-rafi/todo-backend.git
   cd todo-backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory:**

   ```
   DB_URL=mongodb://localhost:27017/tododb
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Start the server:**

   ```sh
   npm run dev
   ```

   The server will start on `http://localhost:3000` by default.

## API Endpoints

### Auth

- `POST /api/auth/register`  
  Register a new user  
  **Body:** `{ "name": "John", "email": "john@example.com", "password": "pass1234" }`

- `POST /api/auth/login`  
  Login and receive a JWT token  
  **Body:** `{ "email": "john@example.com", "password": "pass1234" }`

### Todos (Protected, require `Authorization: Bearer <token>` header)

- `GET /api/todos`  
  Get all todos for the authenticated user

- `GET /api/todos/:id`  
  Get a single todo by ID

- `POST /api/todos`  
  Create a new todo  
  **Body:**

  ```json
  {
    "name": "Buy groceries",
    "details": "Milk, Bread, Eggs",
    "dueDate": "2024-06-30",
    "priority": "medium",
    "tags": ["shopping", "errands"]
  }
  ```

- `PUT /api/todos/:id`  
  Update a todo

- `DELETE /api/todos/:id`  
  Delete a todo

## Author

**Kafi Anan Rafi**  
Software Engineer  
[GitHub](https://github.com/kafi-anan-rafi) | [LinkedIn](https://www.linkedin.com/in/kafi-anan-rafi/)  
Passionate about building scalable web applications and APIs.