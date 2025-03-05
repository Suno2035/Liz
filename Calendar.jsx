import React from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

const Calendar = () => {
  const month = "март 2025 г.";
  const days = Array.from({ length: 29 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="logo">LizFit</div>
        <h2>Календарь тренировок</h2>
        <div className="month-selector">
          <button>{"<"}</button>
          <span>{month}</span>
          <button>{">"}</button>
        </div>
      </header>
      <div className="calendar-content">
        <aside className="calendar-sidebar">
          <ul>
            <li><Link to="/dashboard">Панель управления</Link></li>
            <li><Link to="/calendar">Календарь</Link></li>
            <li><Link to="/analytics">Аналитика</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </aside>
        <main className="calendar-main">
          <div className="week-days">
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map(day => (
              <div key={day} className="day-name">{day}</div>
            ))}
          </div>
          <div className="dates-grid">
            {days.map(day => (
              <div key={day} className="date-cell">{day}</div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;
