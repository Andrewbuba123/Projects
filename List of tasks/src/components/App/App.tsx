import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../HomePage/HomePage";
import { TasksPage } from "../TasksPage/TasksPage";
import { Task, TaskFormData } from "../../types";

export const App = () => {
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
    setTasks((prev) => [...prev, taskWithId]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout tasks={tasks} />}>
          <Route
            path="/"
            element={
              <HomePage
                tasks={tasks}
                onAddTask={addTask}
                onDeleteTask={deleteTask}
              />
            }
          />

          <Route
            path="/tasks"
            element={<TasksPage tasks={tasks} onDeleteTask={deleteTask} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
