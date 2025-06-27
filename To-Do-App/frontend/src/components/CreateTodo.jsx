import { useState } from "react"

export function CreateTodo(props) {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

  function addTodo() {
    if(!title || !description)
        return alert("Enter both title & description")
    const newTodo = {title:title,description:description,completed:false}

    props.setTodo([...props.todo,newTodo]);
    setTitle('');
    setDescription('');
  }

  return (
    <div className="todo-form">
      <div>
        <input type="text" placeholder='titile' value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
        <input type="text" placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)} /><br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  )
}