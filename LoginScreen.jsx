import React from 'react';

const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Вход</h2>
        <form>
          <input type="email" placeholder="nadorsingleg8@gmail.com" className="input-field" />
          <input type="password" placeholder="●●●●●●" className="input-field" />
          <button type="submit" className="btn-primary">Войти</button>
          <a href="/profile" className="link-secondary">Регистрация</a>
        </form>
      </div>
      <div className="login-right">
        <h1>Добро пожаловать в LizFit</h1>
        <p>
          Ваш персональный помощник в достижении фитнес-целей. Отслеживайте тренировки, анализируйте прогресс и достигайте новых высот вместе с нами.
        </p>
        <h3>Тренировки</h3>
        <p>Планируйте и отслеживайте свои тренировки с помощью удобного календаря</p>
        <h3>Аналитика</h3>
        <p>Анализируйте свой прогресс с помощью подробной статистики</p>
      </div>
    </div>
  );
};

export default LoginScreen;
