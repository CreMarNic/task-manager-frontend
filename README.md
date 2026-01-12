# Task Manager Frontend

A modern React frontend application for managing tasks, connected to the Task Management REST API.

## 🚀 Features

- **User Authentication**: Login and registration
- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter by status, priority, category
- **Search**: Search tasks by title or description
- **Status Updates**: Quick status changes via dropdown
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Beautiful dark theme with smooth animations

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling

## 📋 Prerequisites

- Node.js 16+ and npm
- Task Management API running (or use the deployed version)

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API URL

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://task-management-api-production-96e5.up.railway.app
```

Or edit `src/config/api.js` to change the API URL directly.

### 3. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 🚀 Deployment

### Option 1: Netlify (Recommended - Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"
7. Done! Your site is live

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Done!

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/task-manager-frontend",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📁 Project Structure

```
task-manager-frontend/
├── src/
│   ├── components/       # React components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── Navbar.jsx
│   ├── context/         # React Context
│   │   └── AuthContext.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── config/          # Configuration
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🔐 API Connection

The frontend connects to your Task Management API:
- **Default URL:** `https://task-management-api-production-96e5.up.railway.app`
- **Authentication:** JWT tokens stored in localStorage
- **Endpoints:** All API endpoints are used (auth, tasks CRUD)

## 🎨 Features in Detail

### Authentication
- Secure login/register
- JWT token management
- Protected routes
- Auto-logout on token expiry

### Task Management
- Create tasks with title, description, status, priority, category, due date
- Edit existing tasks
- Delete tasks with confirmation
- Quick status updates via dropdown
- Real-time filtering and search

### UI/UX
- Dark theme
- Smooth animations
- Responsive design
- Loading states
- Error handling
- Empty states

## 🧪 Testing

1. Register a new user
2. Login with your credentials
3. Create a task
4. Test filtering and search
5. Update task status
6. Edit and delete tasks

## 📝 Environment Variables

Create `.env` file:

```env
VITE_API_URL=https://task-management-api-production-96e5.up.railway.app
```

## 🔄 Future Enhancements

- [ ] Task due date reminders
- [ ] Drag and drop task reordering
- [ ] Task categories management
- [ ] Dark/light theme toggle
- [ ] Task sharing
- [ ] Export tasks to CSV/PDF

## 👤 Author

**Marius Cretu**
- GitHub: [CreMarNic](https://github.com/CreMarNic)
- Portfolio: [Your Portfolio URL]

---

Built with ❤️ using React
