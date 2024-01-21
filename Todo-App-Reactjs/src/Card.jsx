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
    
    <div style={{display:'flex', justifyContent:'center'}}>
    
        {showInput ?<div>
        <h2>{title}</h2>
        <button style={{padding:'8px' , borderRadius:'12px'}} onClick={()=>DeleteTodo(index)}>delete</button>
        <button style={{padding:'8px' , borderRadius:'12px'}} onClick={()=>setShowInput(false)}>edit</button></div> :<div style={{marginTop:'20px', marginRight:'58px' , justifyContent:'center'}}> <input type='text' ref={newvalue} style={{padding:'10px' , borderRadius:'12px' ,width:'300px' , outline:'none' }} placeholder='ENTER NEW TODO'></input> <button style={{padding:'8px' , borderRadius:'12px'}} onClick={saveEditTodo}>save</button></div>}
</div>
    
    
    </>
  )
}

export default Card