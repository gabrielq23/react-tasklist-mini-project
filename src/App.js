import { useState } from "react"
import { NewTaskForm } from "./NewTaskForm"
import { TaskList } from "./TaskList"

export default function App() {
  const [tasks, setTasks] = useState([])

  function addTask(title) {
    setTasks(currentTasks => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTask(id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }

        return task
      })
    })
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  return (
    <>
      <NewTaskForm onSubmit={addTask} />
      <h1 className="header">List of Tasks</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  )
}