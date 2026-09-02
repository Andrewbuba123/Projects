  import { PageForm } from "../PageForm/PageForm";
  import "./MainPage.css";
  import { TaskList } from "../TaskList/TaskList";
  import { useEffect, useState } from "react";
  import { MainMenu } from "../MainMenu/MainMenu";
  import { TaskFormData } from "../../types";
  import { Task } from "../../types";
import { useLocation } from "react-router-dom";

  export const MainPage = () => {
  

    const location = useLocation();

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
        count: newTaskData.count,
      };

      setTasks((prevTasks) => [...prevTasks, taskWithId]);
    };

    const deleteTask = (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
      <div className="main-page">
        <MainMenu tasks={tasks} />
        <div className="main-page__content">
          <PageForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    );
  };
