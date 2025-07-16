import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './components/Todo';


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

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          disabled={!input}
        >Add Todo</Button>

      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
