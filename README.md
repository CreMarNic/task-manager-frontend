# Task Manager Frontend

A React + TypeScript frontend for managing tasks, connected to the Task Management REST API.

## Full-Stack Project

This repository contains only the frontend application. It is part of a full-stack Task Manager project and is designed to work with a separate backend API repository.

- Frontend: React, TypeScript, Vite, Axios, React Router
- Backend API: Spring Boot REST API with JWT authentication and task CRUD endpoints

For local development, the frontend runs on `http://localhost:3000` and sends API requests to the backend on `http://localhost:8080`.

```text
Backend repository: https://github.com/CreMarNic/task-manager-api.git
```

## Project Highlights

- JWT-based authentication flow with protected frontend routes
- Centralized Axios API layer with environment-based backend configuration
- Typed task, authentication, and filter models using TypeScript
- Responsive task dashboard with filtering, searching, editing, deletion, and quick status updates
- Production build runs TypeScript validation before bundling

## Features

- User authentication with login and registration
- Protected task dashboard
- Create, read, update, and delete tasks
- Filter tasks by status, priority, category, and search text
- Quick status updates from each task card
- Responsive dark UI

## Tech Stack

- React 18
- TypeScript
- React Router
- Axios
- Vite
- CSS

## Prerequisites

- Node.js 18+ and npm
- Task Management API running locally on `http://localhost:8080`

Start the backend with:

```powershell
git clone https://github.com/CreMarNic/task-manager-api.git
cd task-manager-api
mvn spring-boot:run
```

## Local Setup

Install dependencies:

```powershell
npm install
```

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8080
```

Start the frontend:

```powershell
npm start
```

The frontend runs at:

```text
http://localhost:3000
```

Use this local layout:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:8080
```

## Scripts

```powershell
npm start
```

Starts the Vite dev server.

```powershell
npm run dev
```

Same as `npm start`.

```powershell
npm run typecheck
```

Runs TypeScript type checking.

```powershell
npm run build
```

Runs TypeScript type checking and creates the production build in `dist/`.

```powershell
npm run preview
```

Previews the Vite production build locally.

```powershell
npm run serve:dist
```

Serves the generated `dist/` folder on port `3000`.

## Project Structure

```text
task-manager-frontend/
├── src/
│   ├── components/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── services/
│   │   └── api.ts
│   ├── config/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   ├── vite-env.d.ts
│   ├── App.css
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## API Connection

The frontend reads the API base URL from:

```env
VITE_API_URL=http://localhost:8080
```

The API endpoints are built in `src/config/api.ts`:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

Authentication uses JWT tokens stored in `localStorage`.

The backend must be running for login, registration, and task management to work. Without the backend API, the frontend can still load in the browser, but authenticated features will fail because the API requests cannot be completed.

## TypeScript Notes

Shared application types live in:

```text
src/types.ts
```

This includes:

- `User`
- `AuthResponse`
- `LoginCredentials`
- `RegisterData`
- `Task`
- `TaskStatus`
- `TaskPriority`
- `TaskFilters`
- `TaskPayload`

The production build runs `tsc -b` before Vite builds, so type errors fail the build.

## Design Decisions

- React Context is used for authentication state because the app has a small global state surface.
- API configuration is centralized so backend URL and endpoint changes stay isolated.
- Protected routes prevent unauthenticated users from opening task management screens.
- Vite is used for fast local development and a simple production build pipeline.
- JWT tokens are stored in `localStorage` to keep the demo flow simple across page reloads.

## Testing The App Manually

1. Start the backend on `http://localhost:8080`.
2. Start the frontend on `http://localhost:3000`.
3. Register a new account.
4. Login with your credentials.
5. Create a task.
6. Test filtering, search, status updates, edit, and delete.

Automated tests are not included yet. Current validation is done through TypeScript build checks and manual end-to-end testing with the backend API.

## Docker

The included `Dockerfile` serves the production build with Nginx. Build the React app first so the `dist/` folder exists:

```powershell
npm run build
```

Build the Docker image:

```powershell
docker build -t task-manager-frontend .
```

Run the container:

```powershell
docker run --rm -p 3000:80 task-manager-frontend
```

Open the app at:

```text
http://localhost:3000
```

`VITE_API_URL` is read during the Vite build, so set the correct backend API URL before running `npm run build`:

```env
VITE_API_URL=http://localhost:8080
```

## Deployment

For static React hosting, Netlify or Vercel are the simplest options.

Build command:

```powershell
npm run build
```

Publish directory:

```text
dist
```

Set `VITE_API_URL` in the hosting provider environment variables to the deployed backend API URL.

Railway deployment settings are still available in `railway.json`, but local development should use the backend on port `8080` and the frontend on port `3000`.

## Future Improvements

- Add automated tests with React Testing Library
- Improve token refresh and logout handling
- Add loading and error states for all API actions
- Add pagination or sorting for larger task lists

## Generated Files

These can be deleted safely and regenerated:

- `dist/`: generated by `npm run build`
- `node_modules/`: regenerated by `npm install`

These are local/editor files and are not required by the app:

- `.idea/`

## Author

Marius Cretu

- GitHub: [CreMarNic](https://github.com/CreMarNic)
