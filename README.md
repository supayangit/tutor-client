# 🏥 MediQueue – Tutor Booking System

🔗 Live Site: https://mediqueue-gray.vercel.app

---

## 📌 Project Overview

**MediQueue** is a full-stack tutor booking web application that allows students to register, log in, browse tutors, and book learning sessions based on subject availability and time slots.

The system eliminates manual scheduling issues by introducing:
- Automated booking flow
- Slot-based availability control
- Session token generation
- Organized tutor management system

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