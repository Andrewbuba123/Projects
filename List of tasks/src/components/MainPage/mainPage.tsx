import { PageForm } from "../PageForm/pageForm";
import "./mainPage.css";
import { TaskList } from "../TaskList/TaskList";
import { useEffect, useState } from "react";
import { MainMenu } from "../Main-menu/MainMenu";
import { TaskFormData } from "../../types";
import { Task } from "../../types";

export const MainPage = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTaskData: TaskFormData) => {
    const taskWithId: Task = {
      id: String(Date.now()),
      title: newTaskData.title,
      description: newTaskData.description,
      count: newTaskData.count
    };

    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  const deleteTask = (id: string | number) => {
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
