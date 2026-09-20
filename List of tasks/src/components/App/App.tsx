import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../HomePage/HomePage";
import { TasksPage } from "../TasksPage/TasksPage";
import { Task, TaskFormData } from "../../types";

// [+] Новые импорты — нужны для авторизации
import { AuthPage } from "../AuthPage/AuthPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

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
    // [~] Было: setTasks(tasks.filter(...))
    //     Стало: через prev — чтобы не ловить устаревший state
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* [+] Публичный маршрут входа.
                ВАЖНО: он ВНЕ ProtectedRoute, иначе будет бесконечный редирект. */}
        <Route path="/login" element={<AuthPage />} />

        {/* [+] ProtectedRoute — внешний слой.
                Он проверяет токен и либо пускает внутрь,
                либо редиректит на /login.
                ВАЖНО: порядок вложенности — ProtectedRoute → Layout → страницы. */}
        <Route element={<ProtectedRoute />}>
          {/* [ ] Layout остаётся как был, но теперь он внутри защиты. */}
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};