import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {

  const [todo, setTodo] = useState([{
    title: "task1",
    description: "task1",
    completed: false
  },
  {
    title: "task2",
    description: "task2",
    completed: true
  },
  {
    title: "task3",
    description: "task3",
    completed: true
  }])

  return (
    <div>
      <CreateTodo todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
