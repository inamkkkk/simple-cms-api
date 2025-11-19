# Simple CMS API

A simple CMS API built with Node.js, Express, and MongoDB. It allows for managing content with rich text editing and image uploads.

## Features

*   Content Management (Create, Read, Update, Delete)
*   Rich Text Editing support
*   Image Uploads
*   Authentication with JWT

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure the environment:

    *   Create a `.env` file based on `.env.example`.
    *   Set the `MONGODB_URI`, `JWT_SECRET` and other environment variables.

4.  Start the server:

    
    npm start
    

## API Endpoints

### Authentication

*   `POST /api/auth/register` - Register a new user.
*   `POST /api/auth/login` - Login an existing user.

### Content

*   `GET /api/content` - Get all content.
*   `GET /api/content/:id` - Get content by ID.
*   `POST /api/content` - Create new content (requires authentication).
*   `PUT /api/content/:id` - Update content by ID (requires authentication).
*   `DELETE /api/content/:id` - Delete content by ID (requires authentication).

### Images

*   `POST /api/images/upload` - Upload an image (requires authentication).

## Environment Variables

*   `PORT` - The port the server will run on (default: 3000).
*   `MONGODB_URI` - The MongoDB connection string.
*   `JWT_SECRET` - The secret key used for JWT signing.
