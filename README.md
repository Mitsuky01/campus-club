# 📘 Documentation: Campus Club Finder

Campus Club Finder is a single-page application (SPA) built with React, Vite, and Tailwind CSS. It helps students find and join student clubs.

---

## 📍 Initial State

When you open the app, you land on the **Home Page**:

- A welcome message
- A CTA button to explore clubs

---

## 🧭 Pages Walkthrough

### 🏠 Home Page (`/`)

- Hero section with heading and description
- CTA button: **Explore Clubs** → goes to `/clubs`

📷 Screenshot: `screenshots/home.png`

---

### 📋 Clubs Page (`/clubs`)

- Displays all 5 clubs in a responsive grid
- Sorting options: Name A–Z and Z–A
- Each club card shows:
  - Image
  - Name
  - Short description
  - Clickable card → navigates to `/clubs/:clubId`

📷 Screenshot: `screenshots/clubs-grid.png`
📷 Screenshot: `screenshots/clubs-sorted.png`

---

### 📄 Club Detail Page (`/clubs/:clubId`)

- Displays:
  - Big image
  - Full description
  - Upcoming events (at least 2)
  - "Join Club" button (persists via localStorage)
- If already joined, shows a confirmation message instead

📷 Screenshot: `screenshots/club-detail.png`
📷 Screenshot: `screenshots/joined-club.png`

---

### ℹ️ About Page (`/about`)

- Describes the purpose of the app
- Lists technologies used

📷 Screenshot: `screenshots/about.png`

---

### ❌ 404 Page

- Displays friendly error message
- Provides button to go back to home

📷 Screenshot: `screenshots/404.png`

---

## 💾 Features Summary

- [x] Functional Components & Hooks
- [x] Routing with React Router
- [x] Tailwind CSS for styling
- [x] Sorting (A–Z / Z–A)
- [x] View toggle (optional)
- [x] Persist join club state via `localStorage`
- [x] Fully responsive layout

---

## 📂 Folder Structure

