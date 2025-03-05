import React from 'react';
import './Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics-container">
      <header className="analytics-header">
        <h2>Аналитика</h2>
        <select>
          <option value="30">30 дней</option>
        </select>
      </header>
      <div className="analytics-content">
        <div className="card">
          <h3>Всего тренировок</h3>
          <p>0 за выбранный период</p>
        </div>
        <div className="card">
          <h3>Средняя продолжительность</h3>
          <p>0 минут тренировок</p>
        </div>
        <div className="card">
          <h3>Изменение веса</h3>
          <p>0,0 кг за период</p>
        </div>
      </div>
      <div className="analytics-tabs">
        <button className="active">Вес</button>
        <button>Тренировки</button>
        <button>Продолжительность</button>
      </div>
      <div className="analytics-graph">
        <h3>Динамика веса</h3>
        <div className="graph-placeholder">
          <p>График пока без данных</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
