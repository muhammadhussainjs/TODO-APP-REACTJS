import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Usercontextprovider from './context/Usercontextprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usercontextprovider>

    <App/>
    </Usercontextprovider>
  </React.StrictMode>,
)
