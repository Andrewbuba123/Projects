
import "./Task.css";

export const Task = ({ id, title, description, count, onDelete }) => {
  console.log("Task рендерится с id:", id);
  console.log("onDelete это функция?", typeof onDelete === "function"); // 👈 Проверяем

  const handleDelete = () => {
    console.log(`Кнопка нажата для такси${id}`);
    onDelete(id);
  };

  return (
    <li className="task-list__element">
      <div className="task-list__content">
        <h3 className="task-list__title">{title}</h3>
        <p className="task-list__description">{description}</p>
        <span className="task-list__count">count работников:{count}</span>
        <div className="task-list__buttons">
          {/* <Button text="Удалить" type="button" onClick={handleDelete} /> */}
          <button className="button" onClick={handleDelete}>Удалить</button>
          <button className="button">Изменить</button>
        </div>
      </div>
    </li>
  );
};
