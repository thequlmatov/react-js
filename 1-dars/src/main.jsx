import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SayHello from './about'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <SayHello name="Zuhriddin"/>
   <SayHello name="Yulduz"/>
  </React.StrictMode>,
)
