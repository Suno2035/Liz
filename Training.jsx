import React from 'react';
import './ModalTraining.css';

const ModalTraining = ({ date, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-training">
        <div className="modal-header">
          <h3>Добавить тренировки на {date}</h3>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <form>
          <div className="form-group">
            <label>Тип тренировки</label>
            <select>
              <option>Лыжная</option>
              <option>Силовая</option>
              <option>Техническая</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" /> Лыжня
            </label>
          </div>
          <div className="form-group">
            <label>Заметки</label>
            <textarea placeholder="Введите примечания"></textarea>
          </div>
          <button type="submit" className="btn-primary">Сохранить тренировку</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTraining;
