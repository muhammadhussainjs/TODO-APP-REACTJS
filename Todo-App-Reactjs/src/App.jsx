import React, { useState } from 'react'
import { useRef } from 'react'
import Card from './Card'


const App = () => {

  const [data , setData] = useState([])
  const Todovalue = useRef()
  const Input = (event)=>{
    event.preventDefault()
    data.push(Todovalue.current.value)
    setData([...data])
    Todovalue.current.value = ''
    console.log(data);

  }

  const DeleteTodos = (index)=>{
    console.log('Delete called' , index);
    data.splice(index , 1)
    setData([...data])
  }
  const EditTodos = (index ,  newvalue )=>{
    console.log('edit called' ,index ,  newvalue );
    data.splice(index , 1 , newvalue)
    setData([...data])
   
  }


  
  return (
    <>
    <div>
      <h1>TODO-APP</h1>
      <form onSubmit={Input}>
      <input type="text" name="" placeholder=' ENTER TODO'  id="" ref={Todovalue} />
      <button type='submit'>ADD TODO</button>
      </form>
    </div>
    {data.length > 0 ? data.map((item , index)=>{ 
      console.log(item);
      return <Card title={item} DeleteTodo={DeleteTodos} EditTodo={EditTodos} index={index}
       />}) : <h3>Please Enter Todo...</h3>}

    </>
  )
}

export default App