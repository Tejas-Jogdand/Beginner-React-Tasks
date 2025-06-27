export function Todo(props) {

  function completed(index){
    const updateTodo = props.todo.map((item,i)=>{
      if(i==index)
        return {...item,completed:true}
      return item
    })
    props.setTodo(updateTodo)
  }

   function deleteTodo(index){

    const updateTodo = props.todo.filter((_,i)=>i!==index)
    props.setTodo(updateTodo)

  }

  return (
    <table className="todo-table">
      <thead>
        <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          
          (props.todo).map((i,index) => {
            
            return (
              <tr key={index}>
                <td>{i.title}</td>
                <td>{i.description}</td>
                <td>{i.completed? "completed":<button onClick={()=>{completed(index)}}>Mark as complete</button>}</td>
                <td><button onClick={()=>{deleteTodo(index)}}>Delete</button></td>
              </tr>
            )
            
          })
        }
      </tbody>
    </table>)
}
