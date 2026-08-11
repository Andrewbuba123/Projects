import { PageForm } from "../PageForm/pageForm";
import "./mainPage.css";
import { TaskList } from "../TaskList/TaskList";
import { useEffect, useState } from "react";
import { MainMenu } from "../Main-menu/MainMenu";

export const MainPage = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTaskData) => {
    const taskWithId = { ...newTaskData, id: Date.now() };

    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="mainPage">
      <MainMenu />
      <PageForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};
