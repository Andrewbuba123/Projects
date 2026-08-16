import { TaskProps } from "../../types";
import "./Task.css";

export const Task = ({
  id,
  title,
  description,
  count,
  onDelete,
}: TaskProps) => {
  const handleDelete = () => {
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
          <button className="button" onClick={handleDelete}>
            Удалить
          </button>
          <button className="button">Изменить</button>
        </div>
      </div>
    </li>
  );
};
