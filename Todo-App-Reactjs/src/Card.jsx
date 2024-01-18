import React, {useState} from 'react'
import { useRef } from 'react'

const Card = ({  title , DeleteTodo , EditTodo  , index }) => {
    const newvalue = useRef()
    const [showInput , setShowInput] = useState(true)
    const saveEditTodo = ()=>{
        EditTodo(index , newvalue.current.value)
        setShowInput(true)
    
    }
  return (
    <>
    <div>
        {showInput ?<div>
        <h2>{title}</h2>
        <button onClick={()=>DeleteTodo(index)}>delete</button>
        <button onClick={()=>setShowInput(false)}>edit</button></div> :<div> <input type='text' ref={newvalue} placeholder='ENTER NEW TODO'></input> <button onClick={saveEditTodo}>save</button></div>}

    </div>
    
    </>
  )
}

export default Card