import React from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  count: number | string;
  // status : "Active" | "Completed" | "Paused";
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  count: number | string;
}

export interface FormFieldProps {
  label: string;
  field: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  error?: string;
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  count: number | string;
  onDelete: (id: string) => void;
}

export interface PageFormProps {
  onAddTask: (data: TaskFormData) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

export interface MainMenuProps {
  tasks: Task[];
}

export interface LayoutProps {
   tasks : Task[]
}

export interface HomePageProps {
    tasks: Task[];
    onAddTask : (data : TaskFormData) => void;
    onDeleteTask : (id: string) => void;
}

export interface TasksPageProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

