import { TasksPageProps } from "../../types"
import { TaskList } from "../TaskList/TaskList"

export const TasksPage = ({ tasks , onDeleteTask} : TasksPageProps) => {


     return (
        <>
         <TaskList tasks={tasks} onDelete={onDeleteTask}/>
        </>
     )
}