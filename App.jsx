import { useState } from "react"
import { NewTodoForm } from "./newTodoform"
import "./styes.css"
export default function App() {
  const [newItam, SetNewItem] = useState("")
   const [todos, setTodos] = useState([])

   function addTodos(title) {
        setTodos( currentTodos => {
          
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(), title, completed: false
            },
          ]
        })

   }

   function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id === id){
          return {...todos, completed}
        }
        return todos
      })
    })
   }

    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todos => todos.id !== id)

      })
    }
 
  return (
    <>
      <NewTodoForm onSubmit={addTodos} />
      <h1 className="header">Todo List</h1>
      <ul className="List">
        {todos.length === 0 && "No Todos"}
        {todos.map( todos => {
          return (
            <li key={todos.id}>
             <label>
               <input type="checkbox" checked={todos.completed} onChange={e => toggleTodo(todos.id, e.target.completed)}/>
                {todos.title}
             </label>
               <button onClick={() => deleteTodo(todos.id)} 
               className="btn btn-green">Delete</button>
            </li>
          )
        })}
      </ul>


    </>
  )


}