import { Task } from "../Task/Task";
import "./TaskList.css";

export const TaskList = ({ tasks, onDelete }) => {

  return (
    <ul className="task-list">
      {tasks.length === 0 && <p>Список задач пуст</p>}

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.type}
          description={task.description}
          count={task.count}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
