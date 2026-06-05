# 🏥 MediQueue – Tutor Booking System

## 📌 Project Overview

**MediQueue** is a full-stack tutor booking web application that allows students to register, log in, browse tutors, and book learning sessions based on subject availability and time slots.

The system eliminates manual scheduling issues by introducing:
- Automated booking flow
- Slot-based availability control
- Session token generation
- Organized tutor management system

## 📸 Screenshot
<img width="1920" height="1080" alt="Screenshot (271)" src="https://github.com/user-attachments/assets/599cda16-4157-4f34-b3c3-f998f4205671" />

## 🚀 Live & Repository Links

### 💻 GitHub Repositories

#### 🧑‍💻 Client Side (Frontend)
👉 https://github.com/supayangit/tutor-client

#### ⚙️ Server Side (Backend)
👉 https://github.com/supayangit/tutor-server

### 🌐 Production Live URL
👉 https://mediqueue-gray.vercel.app/

---

## 🚀 Key Features

- 🔐 User authentication (Email/Password + Google Login)
- 👨‍🏫 Browse and search tutors by subject and name
- 📅 Book sessions with real-time slot validation
- 🧑‍💼 Add, update, and manage tutors (private routes)
- 📊 “My Bookings” dashboard for students
- ❌ Cancel bookings with status updates
- ⚡ Auto slot reduction after booking
- 🌙 Dark / Light theme support
- 📱 Fully responsive UI for all devices

---

## 🧑‍💻 Tech Stack

### Frontend:
- React.js / Next.js
- Tailwind CSS
- React Router / App Router
- Axios / Fetch API
- Toast Notifications

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST API architecture

### Deployment:
- Vercel (Frontend + Backend)
- MongoDB Atlas

---

## 📂 Core Pages

- Home Page (Public)
- Tutors Page
- Tutor Details Page (Private)
- Add Tutor (Private)
- My Tutors (Private)
- My Booked Sessions (Private)
- Login / Register
- 404 Page

---

## 🧩 System Features

### 🔎 Search & Filter
- Search tutors by name (case-insensitive using regex)
- Filter tutors by registration date range ($gte / $lte)

### 🔐 Authentication
- JWT token-based authentication
- Social login (Google)
- Protected routes for private pages

### 📅 Booking System
- Prevent booking when:
  - No slots left
  - Session date not reached
- Auto-decrease slot after booking
- Status tracking for bookings

---

## 🎨 UI/UX Guidelines

- Consistent layout and spacing
- Responsive design (mobile, tablet, desktop)
- Uniform card design and image sizes
- Smooth navigation and transitions
- Dark/Light theme toggle

---

## ⚙️ Project Setup Guide (Run Locally)

Follow these steps to run the project on your local machine:

---

### 1. Clone the repositories

#### Client (Frontend)
git clone https://github.com/supayangit/tutor-client.git
Server (Backend)
git clone https://github.com/supayangit/tutor-server.git
### 2. Setup Backend (Server)
cd tutor-server
npm install

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run server:

npm run dev
### 3. Setup Frontend (Client)
cd tutor-client
npm install

Create a .env file:

VITE_API_URL=http://localhost:5000

Run frontend:

npm run dev
### 4. Open in browser
http://localhost:5173 (or 3000 depending on setup)

### 🚀 Production Build
Frontend
npm run build
npm run preview
Backend
npm start

#### 🌐 Deployment
Frontend hosted on Vercel
Backend hosted on Vercel / Render (depending on setup)
Database hosted on MongoDB Atlas
#### 📌 Notes
Make sure backend is running before starting frontend
Ensure environment variables are correctly configured
Use MongoDB Atlas for production database connection

---
