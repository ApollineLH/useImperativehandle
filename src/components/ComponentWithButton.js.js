import { forwardRef, useImperativeHandle, useState} from 'react';

const ComponentWithButton = forwardRef((props, ref) => {
  
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  
  useImperativeHandle(ref, () => ({
    increment2: () => setCount(count + 2)
  }))
  return (
    <div>
      <button onClick={increment}>click</button>
      <h2>Count: {count}</h2>
    </div>
  )
})
export default ComponentWithButton