import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">LizFit</div>
        <h2>Панель управления</h2>
        <div className="date">последнее: {currentDate}</div>
      </header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <ul>
            <li><Link to="/dashboard">Панель управления</Link></li>
            <li><Link to="/calendar">Календарь</Link></li>
            <li><Link to="/analytics">Аналитика</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </aside>
        <main className="dashboard-main">
          <section className="card">
            <h3>Текущий процесс</h3>
            <p>Текущий вес: 0 кг</p>
            <p>Цель: 0 кг</p>
            <p>Прогресс: 0,0%</p>
          </section>
          <section className="card">
            <h3>Статистика тренировок</h3>
            <p>0 тренировок в этом месяце</p>
          </section>
          <section className="card">
            <h3>Последние тренировки</h3>
            <p>Нет данных</p>
          </section>
          <section className="card">
            <h3>Динамика веса</h3>
            <input type="text" placeholder="Вес" className="input-field accent" />
            <div className="weight-scale">0,1–1,0</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
