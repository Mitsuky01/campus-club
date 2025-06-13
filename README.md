# 📘 Documentation: Campus Club Finder

Campus Club Finder is a single-page web application that allows university students to browse, view, and join various student clubs on campus.

Built using:

- ⚛️ React (with Functional Components and Hooks)
- ⚡ Vite (as the development and build tool)
- 🎨 Tailwind CSS (for styling)
- 🧭 React Router (for navigation)
- 💾 localStorage (to save join status)

---

## 🚀 How to Run the App

1. **Clone the repository**
```bash
git clone https://github.com/Mitsuky01/campus-club.git
cd campus-club
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📂 Folder Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/
│   └── clubs.js
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Clubs.jsx
│   ├── ClubDetail.jsx
│   ├── About.jsx
│   └── NotFound.jsx
public/
├── images/          ← contains all club images
├── screenshots/     ← contains documentation screenshots
```

---

## 🧭 Application Walkthrough

### 🏠 Home Page (`/`)

- Landing page introducing the app
- Button to explore clubs
- Tailwind-styled layout

📸 *Screenshot:* `screenshots/home.png`

---

### 📋 Clubs Page (`/clubs`)

- Displays all clubs in grid
- Sort dropdown (A–Z / Z–A)
- Each card includes image, title, and short description
- Click card to open detail page

📸 *Screenshot:* `screenshots/clubs-list.png`

---

### 📄 Club Detail Page (`/clubs/:clubId`)

- Shows full club details:
  - Title
  - Image
  - Description
  - Upcoming events
- Includes a **Join Club** button
- After joining, stored in `localStorage` and shows a confirmation message

📸 *Screenshot:* `screenshots/club-detail.png`  
📸 *Screenshot:* `screenshots/joined-state.png`

---

### ℹ️ About Page (`/about`)

- Description of the app and tech used

📸 *Screenshot:* `screenshots/about.png`

---

### ❌ Not Found Page (`*`)

- Custom 404 page with link to go back

📸 *Screenshot:* `screenshots/404.png`

---

## ✅ Features Checklist

- [x] Functional Components & Hooks
- [x] Routing with React Router
- [x] Tailwind CSS for styling
- [x] Sorting (A–Z / Z–A)
- [x] View toggle (optional)
- [x] Persist join club state via `localStorage`
- [x] Fully responsive layout

---

## 🔐 Notes

- No backend; all data is local
- State is stored using `useState` and `localStorage`
- Images are stored in `public/images`
- Screenshots stored in `public/screenshots`

---

## 📝 Author

> Created by [@Mitsuky01](https://github.com/Mitsuky01)  
For educational use only.
