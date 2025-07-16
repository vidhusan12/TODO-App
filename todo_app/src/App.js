import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault(); // prevent from refreshing the page
    setTodos([...todos, input]);

    //clear up the input after clicking the Add Todo
    setInput(''); 
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button onClick={addTodo}>Add ToDo</button>

      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
