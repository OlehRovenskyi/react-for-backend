import { useEffect, useState } from 'react';
import { AddTodo } from './AddTodo/AddTodo.jsx';
import { createTodoAsync, deleteTodoAsync, getTodosAsync, updateTodoAsync } from './todoRouterApi.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoAction, addTodoRequestAction,
  addTodosAction,
  deleteTodoAction, deleteTodoRequestAction, fetchTodosAction,
  updateTodoAction, updateTodoRequestAction
} from '../../store/actions/todos.actions.js';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Link, Outlet } from 'react-router-dom';

export function TodoItem({todo, onChangeStatus, onDeleteTodo}) {
  return (
    <li>
      <Link to={`${todo.id}`}>name: {todo.name} - status: { todo.status ? 'done' : 'in progress' }</Link>
      <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
      <button onClick={() => onChangeStatus(todo.id)}>change status</button>
    </li>
  )
}

export function TodoRouter() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  async function initTodos() {
    try {
      dispatch(fetchTodosAction());
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect( () => {
    initTodos();

    return () => {
      console.log('unmount');
    };
  }, []);

  async function addTodo(todoName) {
    try {
      dispatch(addTodoRequestAction({name: todoName, status: false}));
    } catch (e) {
      console.warn(e);
    }
  }

  async function changeStatus(id) {
    try {
      dispatch(updateTodoRequestAction(id));
    } catch (e) {
      console.warn(e);
    }
  }

  async function deleteTodo(id) {
    try {
      dispatch(deleteTodoRequestAction(id));
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
      <Navigation />

      <h1>Todo</h1>
      <ul>
        {todos?.map((todo) => <TodoItem
          key={todo.id}
          todo={todo}
          onChangeStatus={changeStatus}
          onDeleteTodo={deleteTodo}
        />)}
      </ul>

      <Link to={'info'}>info</Link>
      {' | '}
      <Link to={'counter'}>counter</Link>

      <AddTodo onAddTodo={addTodo}/>

      <Outlet />
    </>
  );
}