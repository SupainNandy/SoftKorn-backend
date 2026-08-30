# SoftKorn Backend

REST API powering the SoftKorn company website: public content endpoints plus a JWT-protected admin CMS.

## Tech Stack

- **Node.js** (ES modules) + **Express 5**
- **MongoDB** via **Mongoose**
- **JWT** authentication with **bcryptjs** password hashing

## Getting Started

```bash
npm install         # install dependencies
node src/seeder.js  # create the initial admin user (admin@softkorn.com / password123)
npm run dev         # start with nodemon (or: npm start)
```

The server listens on `http://localhost:5000` unless `PORT` is set.

## Environment Variables (`.env`)

| Variable | Description |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string (required) |
| `MONGO_USERNAME` / `MONGO_PASS` | MongoDB credentials (kept for reference; the URI is used directly) |
| `JWT_SECRET` | Secret used to sign admin tokens |
| `PORT` | Server port (default: `5000`) |

## API Overview

| Method & Path | Access | Description |
| --- | --- | --- |
| `GET /api/projects` | Public | List projects |
| `POST /api/projects` | Admin | Create a project |
| `PUT /api/projects/:id` | Admin | Update a project |
| `DELETE /api/projects/:id` | Admin | Delete a project |
| `GET /api/about` | Public | Get mission & story |
| `PUT /api/about` | Admin | Update mission & story |
| `POST /api/contact` | Public | Submit a contact message |
| `GET /api/contact` | Public | List contact messages |
| `POST /api/admin/login` | Public | Admin login (returns a JWT) |

Admin endpoints require an `Authorization: Bearer <token>` header using the token returned by the login endpoint.

## Project Structure

```
src/
  config/db.js                 # MongoDB connection
  models/                      # Mongoose models (Admin, About, Contact, Project)
  controllers/                 # Request handlers
  routes/                      # Express routers
  middleware/authMiddleware.js # JWT verification
  seeder.js                    # Creates the initial admin user
  index.js                     # App entry point
```
