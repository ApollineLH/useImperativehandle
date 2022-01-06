import './App.css';
import {  useRef } from 'react';
import ComponentWithButton from './components/ComponentWithButton.js';

const App = () => {
  const ref = useRef();
  return (
    <div>
      <ComponentWithButton ref={ref} />
      <button onClick={() => ref.current.increment2()}>another button</button>
    </div>
  );
};
export default App
