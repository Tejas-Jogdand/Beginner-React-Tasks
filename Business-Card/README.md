# 🧩 React Task — Expandable Business Card UI

This project is a **React-based UI** that demonstrates:

- ✅ Mapping over arrays to generate components dynamically  
- ✅ Conditional rendering using React state  
- ✅ Expanding/collapsing forms for better UX  
- ✅ Clean component structure and modern CSS design

> ✨ Perfect for learning reusable components, state-driven UI, and interactive form handling.

---

## 🚀 Features

- 📇 **Dynamic Business Cards**  
  Displays a list of card objects (name, designation, interests, links)

- ➕ **Expandable Form**  
  Initially shows "Add New Card" — expands on click to reveal input fields

- 🎯 **Clean CSS Styling**  
  Modern layout using vanilla CSS with animations

---

## 🛠️ Tech Stack

- **React JS**
- **CSS (vanilla)**
- No external libraries — just pure React logic and styles

---

## 📂 File Structure

```
/react-task/
│
├── components/
│   └── AddCardForm.jsx     // Expand-on-click form component
│
├── App.jsx                 // Card list + UI rendering
├── index.js                // Entry point
├── styles.css              // CSS styling
└── README.md               // ← You're here
```

---

## 🧠 Concepts Practiced

| Concept               | Description                                                |
|-----------------------|------------------------------------------------------------|
| `useState()`          | Used to toggle the form open/close                         |
| `map()`               | Render business cards dynamically                          |
| Conditional Rendering | Form appears only when toggled                            |
| Component Structure   | Reusable, isolated components                              |
| CSS Animations        | Smooth expand/collapse of form                             |

---

## 🔍 Sample Snippet

```jsx
<p className="form-toggle" onClick={() => setExpanded(!expanded)}>
  {expanded ? "➖ Hide Form" : "➕ Add New Card"}
</p>

{expanded && (
  <div className="form-fields">
    <label>Name: </label>
    <input type="text" name="name" />
    {/* More fields... */}
  </div>
)}
```

---

## ✅ Getting Started

```bash
git clone https://github.com/yourusername/react-task.git
cd react-task
npm install
npm start
```

---

## 🧪 Scope of improvement

- Add new card form is non-functional as of now
- Adding validations 
- Backend integration (like mongoDB)

---

## 📘 Learnings Logged

- 🎯 `useState` for UI toggles  
- 🎯 `map()` and JSX rendering  
- 🎯 Clean CSS structuring and animations  
- 🎯 Basic interactive forms in React

---

## ✍️ Author

Made with ❤️ by **Tejas Jogdand**  
[LinkedIn](https://www.linkedin.com/in/tejas-jogdand-84a5581b9/) • [GitHub](https://github.com/Tejas-jogdand)

---

> 💡 *This is part of my React learning series. More components and UI interactions coming soon!*
