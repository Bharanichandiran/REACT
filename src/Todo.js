
import { useState } from 'react'
import { FaTowerBroadcast } from "react-icons/fa6";
const Todo = () => {
    const[item,setItems]=useState(
        [{
            id:1,
            name:"coding",
            completed:false
        },
        {
            id:2,
            name:"eating",
            completed:true
        },{
            id:3,
            name:"sleeping",
            completed:false
        }

    ]
    )
    const handleCheck=(id)=>{
        const listitems= item.map((items)=>
          items.id===id?{...items,completed:!items.completed}:{...items})
          setItems(listitems)
        
    }
    const handleDelete=(id)=>{
       const listitems=item.filter((items)=>items.id!==id);
       setItems(listitems)
        }
  return (
    <div>
     <FaTowerBroadcast />
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your task"/>
        <button >Add</button>
        <ul>
            { item.map((items)=>(
                        <li key={items.id}>
                            <input 
                            type="checkbox"
                           onChange={()=>handleCheck(items.id)}
                            />
                            <label>{items.name}</label>
                            <button onClick={()=>handleDelete(items.id)}>delete</button>
                        </li>
                    )
                )}
        </ul>
    </div>
  )
}

export default Todo