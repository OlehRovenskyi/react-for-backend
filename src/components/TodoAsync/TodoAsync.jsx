import { useEffect, useState } from 'react';
import { AddTodo } from './AddTodo/AddTodo.jsx';
import { createTodoAsync, deleteTodoAsync, getTodosAsync, updateTodoAsync } from './todoAsyncApi.js';

export function TodoItem({todo, onChangeStatus, onDeleteTodo}) {
  return (
    <li>
      name: {todo.name} - status: { todo.status ? 'done' : 'in progress' }
      <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
      <button onClick={() => onChangeStatus(todo.id)}>change status</button>
    </li>
  )
}

export function TodoAsync() {
  const [todos, setTodos] = useState([]);

  async function initTodos() {
    try {
      const initTodos = await getTodosAsync();
      setTodos(initTodos);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect( () => {
    initTodos();
  }, []);

  async function addTodo(todoName) {
    try {
      const createdTodo = await createTodoAsync({name: todoName, status: false});
      setTodos([
        ...todos,
        createdTodo
      ])
    } catch (e) {
      console.warn(e);
    }
  }

  async function changeStatus(id) {
    try {
      const todo = todos.find((item) => item.id === id);
      todo.status = !todo.status;
      const updatedTodo = await updateTodoAsync(id, todo);

      const allTodos = todos.map((item) => {
        if (item.id === id) {
          return updatedTodo;
        }

        return item;
      });

      setTodos(allTodos);
    } catch (e) {
      console.warn(e);
    }
  }

  async function deleteTodo(id) {
    try {
      await deleteTodoAsync(id);
      const allTodos = todos.filter((item) => item.id !== id);
      setTodos(allTodos);
    } catch (e) {
      console.warn(e);
    }
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