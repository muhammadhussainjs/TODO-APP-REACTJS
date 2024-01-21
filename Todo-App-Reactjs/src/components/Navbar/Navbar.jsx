import React, { useContext } from 'react'
import Usercontext from '../../context/Usercontext'

const Navbar = () => {
  const {isuser , setIsuser} = useContext(Usercontext)
  
  

  return (
    <>
    <div>
    <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none'}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {!isuser ? <div style={{display:'flex', gap:'50px'}}><li style={{cursor:'pointer'}} onClick={()=>setIsuser(true)}>Login</li>
        <li>Register</li></div>:
        <li style={{cursor:'pointer'}} onClick={()=>setIsuser(false)}>Logout</li>}
    </ul>
    </div>
    </>
  )
}

export default Navbar