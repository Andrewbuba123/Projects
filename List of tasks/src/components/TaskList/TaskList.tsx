import { Task } from "../Task/Task";
import { Task as TaskType } from "../../types";
import { TaskListProps } from "../../types";
import "./TaskList.css";

export const TaskList = ({ tasks, onDelete }: TaskListProps) => {

  return (
    <ul className="task-list">
      {tasks.length === 0 && <p>Список задач пуст</p>}

      {tasks.map((task : TaskType) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          count={task.count}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
