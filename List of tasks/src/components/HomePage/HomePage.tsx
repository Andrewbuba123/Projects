import { PageForm } from "../PageForm/PageForm";
import { TaskList } from "../TaskList/TaskList";
import { HomePageProps } from "../../types";
import "./HomePage.css"

export const HomePage = ({ tasks, onAddTask, onDeleteTask }: HomePageProps) => {
  return (
    <>
      <PageForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onDelete={onDeleteTask} />
    </>
  );
};
