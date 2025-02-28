# CRUD Server with Express, TypeScript, and Repository Pattern

A robust, production-ready CRUD API server built with Express.js and TypeScript. This application demonstrates best practices for building a scalable backend service with proper architecture, error handling, validation, and database integration.

## Features

- Complete CRUD operations for resources
- TypeScript for type safety and better developer experience
- Repository pattern for clean data access
- MongoDB integration for data persistence
- Input validation with Joi
- Error handling middleware
- Filter functionality for resource listing
- RESTful API design
- API documentation
- Clean code architecture with separation of concerns

## Architecture Overview

This project implements a layered architecture following the **Repository Pattern**:

1. **Controllers** - Handle HTTP requests and responses
2. **Services** - Implement business logic
3. **Repositories** - Manage data access and persistence
4. **Models** - Define data structures and validation

This separation of concerns ensures:
- **Testability** - Each layer can be tested independently
- **Maintainability** - Changes in one layer don't affect others
- **Flexibility** - Data sources can be swapped without affecting business logic
- **Separation of Concerns** - Each layer has a specific responsibility

## Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Programming language
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Joi** - Input validation
- **Morgan** - HTTP request logger
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
src/
├── controllers/     # Request handlers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── services/        # Business logic
├── repositories/    # Data access layer
├── utils/           # Utility functions
├── app.ts           # Express app configuration
└── server.ts        # Server entry point
```

## API Endpoints

| Method | Endpoint              | Description                          |
|--------|----------------------|--------------------------------------|
| POST   | /api/resources       | Create a new resource                |
| GET    | /api/resources       | Get all resources (with filters)     |
| GET    | /api/resources/:id   | Get a specific resource by ID        |
| PUT    | /api/resources/:id   | Update a resource                    |
| DELETE | /api/resources/:id   | Delete a resource                    |
| GET    | /health              | Health check endpoint                |

## Repository Pattern Implementation

The repository pattern is implemented as follows:

1. **Base Repository** (`BaseRepository<T>`) - Generic abstract class providing CRUD operations
2. **Resource Repository** (`ResourceRepository`) - Extended implementation with resource-specific operations
3. **Service Layer** - Uses repositories to implement business logic
4. **Controllers** - Use services to handle HTTP requests

This implementation provides several benefits:
- **Abstraction** - Data access details are hidden from services
- **Reusability** - Common CRUD operations are defined once
- **Consistency** - Standard patterns for data access across the application

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crude-server.git
   cd crude-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/crude-server
   ```

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Build and run in production mode:**
```bash
npm run build
npm start
```

### Seeding the Database
To populate the database with initial sample data:
```bash
npm run seed
```

## API Usage Examples

### Create a Resource
```bash
curl -X POST http://localhost:5000/api/resources \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Resource",
    "description": "This is a sample resource",
    "category": "Technology",
    "price": 99.99,
    "isAvailable": true
  }'
```

### Get All Resources
```bash
curl http://localhost:5000/api/resources
```

### Get All Resources with Filters
```bash
curl http://localhost:5000/api/resources?category=Technology&minPrice=50&maxPrice=200&isAvailable=true
```

### Get a Specific Resource
```bash
curl http://localhost:5000/api/resources/your-resource-id
```

### Update a Resource
```bash
curl -X PUT http://localhost:5000/api/resources/your-resource-id \
  -H "Content-Type: application/json" \
  -d '{
    "price": 129.99,
    "description": "Updated description"
  }'
```

### Delete a Resource
```bash
curl -X DELETE http://localhost:5000/api/resources/your-resource-id
```

## Testing

Run tests using:
```bash
npm test
```

## Improvements and Extensions

The following enhancements could be implemented in the future:

- **Authentication**: JWT-based authentication system
- **Pagination**: For handling large datasets
- **Caching**: Redis integration for improved performance
- **Rate Limiting**: To prevent abuse
- **File Upload**: Supporting file attachments for resources
- **WebSocket**: Real-time updates
- **CI/CD**: Integration with GitHub Actions or other CI/CD platforms
- **Docker**: Containerization for easy deployment
- **Frontend Integration**: Building a frontend to interact with this API