import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Load theme from localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      <h1>{isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
      <button onClick={toggleTheme}>
        {isDark ? 'Switch to Light ☀️' : 'Switch to Dark 🌙'}
      </button>
    </div>
  );
}

export default App;
