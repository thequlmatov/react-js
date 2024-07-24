import {useState, useEffect } from 'react';

const HookComponent = (props) => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Render");
  }, [count])

  return (
    <div>
      <h1>Hello React {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );

};

export default HookComponent;
