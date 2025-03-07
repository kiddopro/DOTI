# Full Stack Note-Taking Application

## Description

This is a web-based note-taking application that allows users to create, edit, delete, archive, and filter notes. The application is divided into two phases:

- **Phase 1**: Creating, editing, deleting, and archiving notes.
- **Phase 2**: Applying tags and filtering notes.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express, Supabase
- **Database**: PostgreSQL

## Requirements

- Node.js (v18.17 or higher)
- npm (v9.6.7 or higher)

## Installation

#### 1. Clone the repository:

```sh
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

#### 2. Configure the environment variables for backend:
```sh
PORT=8080
SUPABASE_URL=<YOUR_SUPABASE_URL>
SUPABASE_KEY=<YOUR_SUPABASE_KEY>
SUPABASE_SERVICE=<YOUR_SUPABASE_SERVICE_KEY>
DATABASE_URL=<YOUR_DATABASE_URL>
HOSTNAME=localhost
```

## Usage

- The frontend will be available at http://localhost:8000.
- The backend will be available at http://localhost:8080.

## Backend endpoints

```sh
GET /api/task           # Retrieve all tasks.
GET /api/task/:id       # Retrieve a task by ID.
POST /api/task          # Create a new task.
PUT /api/task/:id       # Update an existing task.
DELETE /api/task/:id    # Delete a task.
```

## Features
#### Phase 1
- Create, edit, and delete notes.
- Archive and unarchive notes.
- List active and archived notes.
#### Phase 2
- Add and remove categories from notes.
- Filter notes by category.

