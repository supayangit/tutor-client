# 📚 LibriFlow — Online Book Borrowing Platform

A modern, full-stack digital library system built with Next.js and BetterAuth that allows users to explore, search, and borrow books seamlessly. The platform transforms the traditional library experience into a fast, secure, and responsive web application.

---

## 🎯 Purpose

LibriFlow was built to digitize the traditional book borrowing system into a modern web experience. It focuses on:

- Fast book discovery
- Secure authentication
- Category-based filtering
- Smooth UX with modern UI components
- Scalable architecture using Next.js + MongoDB

---

## ✨ Key Features

### 🏠 Home Page
- Hero banner with “Find Your Next Read” CTA
- Animated marquee for announcements and new arrivals
- Featured books section (server-fetched top books)
- Additional custom UI sections for improved engagement

---

### 📚 Book System
- Browse all books dynamically from API
- Category-based filtering (Story, Tech, Science, etc.)
- Search books by title or author
- Responsive Swiper-based carousel layout

---

### 📖 Book Details Page (Protected Route)
- Only accessible to authenticated users
- Detailed book view with:
  - Cover image
  - Title, author, description
  - Availability count
- Borrow system with toast notifications
- Redirect to login if user is not authenticated

---

### 🔐 Authentication (BetterAuth)
- Email/password authentication
- Google OAuth login
- Secure session handling
- Persistent user sessions
- Protected routes (My Profile, Book Details)

---

### 👤 My Profile (Protected Route)
- Displays user information
- Update profile functionality (name & image)
- Secure user data handling using BetterAuth APIs

---

### 🔎 All Books Page
- Full search functionality
- Responsive grid + Swiper integration
- Pagination system
- Real-time filtering

---

### 🧭 Category Filtering System
- Sidebar/category-based navigation
- Dynamic category routing
- Clean URL structure (`/books/[category]`)

---

### 📱 Responsive Design
- Fully responsive (mobile, tablet, desktop)
- Adaptive Swiper layout
- Mobile-optimized UI spacing and typography

---

## 🧠 Advanced Features Implemented (Beyond Requirements)

- ⚡ Dynamic API-based book fetching (no static JSON dependency)
- 🔐 Secure auth integration with BetterAuth + session management
- 🔄 Client-side caching using React state + memoization
- 🧩 Reusable component architecture (BookCard, Header, etc.)
- 🎯 Smart pagination with Swiper integration
- 🌐 Environment-based configuration for production safety
- 🚫 Protected routing with auth guard logic
- 📦 Optimized rendering using Next.js App Router
- 🧠 Category slug normalization (SEO-friendly URLs)

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Swiper.js

### Backend / Database
- MongoDB
- Next.js API Routes

### Authentication
- BetterAuth
- Google OAuth

### Utilities
- React Hook Form
- React Toastify
- React Icons

---

## 📦 NPM Packages Used

```bash
next
react
react-dom
tailwindcss
@heroui/react
better-auth
mongodb
swiper
react-toastify
react-hook-form
react-icons
react-fast-marquee

## 🚀 Live URL

🔗 https://libriflow-sup.vercel.app