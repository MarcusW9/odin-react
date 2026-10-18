import { useState } from 'react';
import './App.css';
import Person from './Person'

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const [counter, setCounter] = useState(0)

  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };

  const clickCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <>
    <Person />
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
    <h2 className='counter'>{counter}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => {
            onButtonClick(color);
            clickCounter()
          }}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
    </>
  );
}

export default App;
