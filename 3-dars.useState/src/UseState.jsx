import './index.css';
import { useState } from 'react';


function UseState() {
  const [name, setName] = useState('Zuhriddin')


  const handleClick = () => {
    setName('Jasur')
  }

  return(
    <div className='box'>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default UseState;