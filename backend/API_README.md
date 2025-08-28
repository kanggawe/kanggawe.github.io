# Laravel Backend API Documentation

## Overview
This Laravel backend provides a RESTful API for the React frontend application. It includes authentication, contact management, and service management features.

## Base URL
```
http://localhost:8000/api
```

## Authentication
The API uses Laravel Sanctum for token-based authentication.

### Register User
```http
POST /api/register
```

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "password_confirmation": "password123"
}
```

**Response:**
```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "created_at": "2024-01-01T00:00:00.000000Z",
            "updated_at": "2024-01-01T00:00:00.000000Z"
        },
        "token": "1|abc123...",
        "token_type": "Bearer"
    }
}
```

### Login User
```http
POST /api/login
```

**Request Body:**
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

**Response:**
```json
{
    "success": true,
    "message": "Login successful",
    "data": {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com"
        },
        "token": "1|abc123...",
        "token_type": "Bearer"
    }
}
```

### Logout User
```http
POST /api/logout
```

**Headers:**
```
Authorization: Bearer {token}
```

### Get Current User
```http
GET /api/user
```

**Headers:**
```
Authorization: Bearer {token}
```

## Contact Management

### Submit Contact Form (Public)
```http
POST /api/contacts
```

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry about services",
    "message": "I would like to know more about your web development services."
}
```

### Get All Contacts (Protected)
```http
GET /api/contacts
```

**Headers:**
```
Authorization: Bearer {token}
```

### Get Contact by ID (Protected)
```http
GET /api/contacts/{id}
```

### Update Contact (Protected)
```http
PUT /api/contacts/{id}
```

**Request Body:**
```json
{
    "status": "read",
    "name": "John Doe Updated",
    "email": "john.updated@example.com"
}
```

### Delete Contact (Protected)
```http
DELETE /api/contacts/{id}
```

### Get Contacts by Status (Protected)
```http
GET /api/contacts/status/{status}
```

**Status values:** `pending`, `read`, `replied`

## Service Management

### Get Active Services (Public)
```http
GET /api/services/active
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "Web Development",
            "description": "Custom web applications...",
            "icon": "fas fa-code",
            "price": "1500.00",
            "status": "active",
            "created_at": "2024-01-01T00:00:00.000000Z",
            "updated_at": "2024-01-01T00:00:00.000000Z"
        }
    ]
}
```

### Get All Services (Protected)
```http
GET /api/services
```

### Create Service (Protected)
```http
POST /api/services
```

**Request Body:**
```json
{
    "title": "New Service",
    "description": "Service description",
    "icon": "fas fa-star",
    "price": 1000.00,
    "status": "active"
}
```

### Get Service by ID (Protected)
```http
GET /api/services/{id}
```

### Update Service (Protected)
```http
PUT /api/services/{id}
```

### Delete Service (Protected)
```http
DELETE /api/services/{id}
```

### Toggle Service Status (Protected)
```http
PATCH /api/services/{id}/toggle-status
```

## Error Responses

### Validation Error (422)
```json
{
    "success": false,
    "message": "Validation errors",
    "errors": {
        "email": ["The email field is required."],
        "password": ["The password field is required."]
    }
}
```

### Authentication Error (401)
```json
{
    "success": false,
    "message": "Invalid credentials"
}
```

### Not Found Error (404)
```json
{
    "message": "No query results for model [App\\Models\\Contact] 999"
}
```

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   composer install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Database Setup:**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

4. **Start Server:**
   ```bash
   php artisan serve
   ```

## Default Users

After running the seeders, you'll have these default users:

- **Admin User:**
  - Email: `admin@example.com`
  - Password: `password123`

- **Test User:**
  - Email: `test@example.com`
  - Password: `password123`

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://127.0.0.1:5173`

## Testing the API

You can test the API using tools like:
- Postman
- Insomnia
- cURL
- Thunder Client (VS Code extension)

### Example cURL Commands

**Login:**
```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
```

**Get Active Services:**
```bash
curl -X GET http://localhost:8000/api/services/active
```

**Submit Contact Form:**
```bash
curl -X POST http://localhost:8000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","subject":"Test","message":"Test message"}'
```
