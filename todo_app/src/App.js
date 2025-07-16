import { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault(); // prevent from refreshing the page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input]);

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
