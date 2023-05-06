import { useState } from "react"

export function NewTodoForm({onSubmit}){

    const [newItam, SetNewItem] = useState("")

    function handleSubmit(Event) {
        Event.preventDefault()
         if (newItam === "") return


        onSubmit(newItam)
        
        SetNewItem("")
       }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Items</label>
             <input value={newItam} onChange={e =>SetNewItem(e.target.value)} type="text" id="item" />
             <button className="btn">Add Todo</button>   
        </div>   
     </form>
    ) 
}