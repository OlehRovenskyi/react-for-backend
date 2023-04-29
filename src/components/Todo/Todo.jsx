import { useState } from 'react';
import { AddTodo } from './AddTodo/AddTodo.jsx';

export function TodoItem({todo, onChangeStatus, onDeleteTodo}) {
  return (
    <li>
      name: {todo.name} - status: { todo.status ? 'done' : 'in progress' }
      <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
      <button onClick={() => onChangeStatus(todo.id)}>change status</button>
    </li>
  )
}

export function Todo({initialTodos}) {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(name) {
    setTodos([
      ...todos,
      {
        id: 'id' + Math.random().toString(36).substr(2, 9),
        name: name,
        status: false
      },
    ]);
  }

  function changeStatus(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        }
      }

      return todo;
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>Todo</h1>
      <ul>
        {todos?.map((todo) => <TodoItem
          key={todo.id}
          todo={todo}
          onChangeStatus={changeStatus}
          onDeleteTodo={deleteTodo}
        />)}
      </ul>

      <AddTodo onAddTodo={addTodo}/>
    </>
  );
}