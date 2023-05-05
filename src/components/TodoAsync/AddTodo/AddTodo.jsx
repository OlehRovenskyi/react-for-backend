import { useState } from 'react';

export function AddTodo({onAddTodo}) {
  const [todoName, setTodoName] = useState('');

  function changeName(event) {
    setTodoName(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    onAddTodo(todoName);
    setTodoName('');
  }

  return (
    <form className="todo" onSubmit={(e)=> submit(e)}>
      {/*<input type="text" value={todoName} onChange={(event) => setTodoName(event.target.value)} />*/}
      <input className="todo__todoName todo__todoName--active" type="text" value={todoName} onChange={(event) => changeName(event)} />
      <button type="submit">Add</button>
    </form>
  )
}