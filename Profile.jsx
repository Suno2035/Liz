import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="logo">LizFit</div>
        <nav className="profile-nav">
          <Link to="/dashboard">Дашборд</Link>
          <Link to="/calendar">Календарь</Link>
          <Link to="/analytics">Аналитика</Link>
          <Link to="/profile" className="active">Профиль</Link>
        </nav>
      </header>
      <div className="profile-content">
        <h2>Профиль</h2>
        <p>Заполните свои персональные данные и цели</p>
        <form className="profile-form">
          <div className="form-column">
            <input type="text" placeholder="Введите имя" />
            <select>
              <option>Мужской</option>
              <option>Женский</option>
            </select>
            <input type="text" placeholder="Введите текущий вес" />
            <select>
              <option>Снижение веса</option>
              <option>Набор массы</option>
            </select>
          </div>
          <div className="form-column">
            <input type="text" placeholder="Введите возраст" />
            <input type="text" placeholder="Введите рост" />
            <input type="text" placeholder="Введите целевой вес" />
          </div>
          <button type="submit" className="btn-primary">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
