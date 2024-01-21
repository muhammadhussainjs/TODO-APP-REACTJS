import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import Card from './Card'
import Navbar from './components/Navbar/Navbar'


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
    <Navbar/>
    <div style={{ display:'flex' , justifyContent:'center'}}>
      <div>
      <h1>TODO-APP</h1>
      <form onSubmit={Input} style={{gap:'25px', display:'flex'}}>
      <input type="text" style={{padding:'10px' , borderRadius:'12px' ,width:'250px' , outline:'none' }} name="" placeholder=' ENTER TODO'  id="" ref={Todovalue} />
      <button style={{padding:'8px' , borderRadius:'12px'}} type='submit'>ADD TODO</button>
      </form>
      </div>
    </div>
    {data.length > 0 ? data.map((item , index)=>{ 
      console.log(item);
      return <Card key={index} title={item} DeleteTodo={DeleteTodos} EditTodo={EditTodos} index={index}
       />}) : <h1 style={{textAlign:'center', paddingRight:'140px'}}>Please Enter Todo...</h1>}

    </>
  )
}

export default App