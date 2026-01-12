# 🧪 Testing Guide - Task Manager Frontend

## Quick Test Checklist

### ✅ Before Testing

1. **Install Node.js** (if not installed):
   - Download from [nodejs.org](https://nodejs.org)
   - Install Node.js 18+ (includes npm)

2. **Install Dependencies:**
   ```bash
   cd task-manager-frontend
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

---

## 📋 Test Scenarios

### 1. Authentication Tests

#### Register New User
- [ ] Go to `/register` or click "Sign up"
- [ ] Enter username (min 3 characters)
- [ ] Enter valid email
- [ ] Enter password (min 6 characters)
- [ ] Confirm password matches
- [ ] Submit form
- [ ] Should redirect to home page
- [ ] Should see username in navbar

#### Login
- [ ] Go to `/login`
- [ ] Enter username/email
- [ ] Enter password
- [ ] Submit form
- [ ] Should redirect to home page
- [ ] Should see tasks page

#### Logout
- [ ] Click "Logout" in navbar
- [ ] Should redirect to login page
- [ ] Token should be cleared

---

### 2. Task Management Tests

#### Create Task
- [ ] Click "New Task" button
- [ ] Fill in form:
  - Title (required)
  - Description (optional)
  - Status (TODO/IN_PROGRESS/COMPLETED)
  - Priority (LOW/MEDIUM/HIGH)
  - Category (optional)
  - Due Date (optional)
- [ ] Click "Create Task"
- [ ] Task should appear in list
- [ ] Modal should close

#### View Tasks
- [ ] All tasks should be displayed
- [ ] Task cards show all information
- [ ] Status and priority badges are colored correctly
- [ ] Due dates are formatted properly

#### Edit Task
- [ ] Click edit icon on a task
- [ ] Form should open with task data pre-filled
- [ ] Modify fields
- [ ] Click "Update Task"
- [ ] Changes should be reflected in the list

#### Delete Task
- [ ] Click delete icon on a task
- [ ] Confirm deletion in popup
- [ ] Task should be removed from list

#### Update Status
- [ ] Change status via dropdown on task card
- [ ] Status should update immediately
- [ ] Badge color should change

---

### 3. Filtering & Search Tests

#### Search
- [ ] Type in search box
- [ ] Results should filter in real-time
- [ ] Search works for title and description

#### Filter by Status
- [ ] Select status from dropdown
- [ ] Only tasks with that status should show
- [ ] Clear filter button appears

#### Filter by Priority
- [ ] Select priority from dropdown
- [ ] Only tasks with that priority should show

#### Filter by Category
- [ ] Type category name
- [ ] Only tasks with that category should show

#### Clear Filters
- [ ] Apply multiple filters
- [ ] Click "Clear Filters"
- [ ] All filters should reset
- [ ] All tasks should show

---

### 4. UI/UX Tests

#### Responsive Design
- [ ] Test on desktop (1920px+)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Layout should adapt properly
- [ ] No horizontal scrolling

#### Loading States
- [ ] Initial page load shows spinner
- [ ] Tasks load smoothly
- [ ] No flickering

#### Error Handling
- [ ] Invalid login shows error message
- [ ] Network errors are handled gracefully
- [ ] 401 errors redirect to login

#### Empty States
- [ ] No tasks shows helpful message
- [ ] Filtered results with no matches show message

---

### 5. API Integration Tests

#### Verify API Connection
- [ ] Check browser console for API calls
- [ ] Verify requests include Authorization header
- [ ] Check responses are correct

#### Test with Backend
- [ ] Create task in frontend
- [ ] Verify it appears in Swagger UI
- [ ] Update task in Swagger UI
- [ ] Verify it updates in frontend

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot find module"
**Fix:** Run `npm install` again

### Issue: "Port already in use"
**Fix:** Change port in `vite.config.js` or kill process using port 3000

### Issue: "API connection failed"
**Fix:** 
- Check API URL in `src/config/api.js`
- Verify backend is running
- Check CORS settings

### Issue: "401 Unauthorized"
**Fix:**
- Re-login to get fresh token
- Check token is being sent in headers

### Issue: "Blank page"
**Fix:**
- Check browser console for errors
- Verify all imports are correct
- Check React DevTools

---

## ✅ Build Test

Before deploying, test the production build:

```bash
npm run build
npm run preview
```

This tests the optimized production build locally.

---

## 🎯 Quick Test Script

Run these in order:

1. ✅ Register user
2. ✅ Create 3-5 tasks with different statuses/priorities
3. ✅ Test search
4. ✅ Test filters
5. ✅ Edit a task
6. ✅ Delete a task
7. ✅ Update status via dropdown
8. ✅ Logout and login again
9. ✅ Verify tasks persist

If all pass, you're ready to deploy! 🚀
