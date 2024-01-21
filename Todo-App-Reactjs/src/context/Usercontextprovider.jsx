import React, {  useState } from 'react'
import Usercontext from './Usercontext'

const Usercontextprovider = ({children}) => {
    const [isuser , setIsuser] = useState(false)


  return (
    <Usercontext.Provider value={{isuser , setIsuser}}>
        {children}

    </Usercontext.Provider>
    


  )
}

export default Usercontextprovider