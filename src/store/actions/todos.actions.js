import {
  createTodoAsync,
  deleteTodoAsync,
  getTodosAsync,
  updateTodoAsync
} from '../../components/TodoRedux/todoReduxApi.js';

export const ADD_TODO = '[Todo] add Todo';
export const ADD_TODOS = '[Todo] add Todos';
export const UPDATE_TODOS = '[Todo] update Todos';
export const DELETE_TODO = '[Todo] delete Todo';
export const UPDATE_TODO = '[Todo] update Todo';

export function addTodoAction(payload) {
  return {
    type: ADD_TODO,
    payload,
  }
}

export function addTodosAction(payload) {
  return {
    type: ADD_TODOS,
    payload,
  }
}

export function updateTodosAction(payload) {
  return {
    type: UPDATE_TODOS,
    payload
  }
}

export function deleteTodoAction(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export function updateTodoAction(Todo) {
  return {
    type: UPDATE_TODO,
    payload: Todo,
  }
}

export function errorAction(error) {
  return {
    type: '[Todo] Error',
    payload: error,
  }
}

export function fetchTodosAction() {
  return async function(dispatch) {
    try {
      const todos = await getTodosAsync();
      dispatch(addTodosAction(todos));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export function addTodoRequestAction(todo) {
  return async function(dispatch) {
    try {
      const TodoInfo = await createTodoAsync(todo);
      dispatch(addTodoAction(TodoInfo));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export function deleteTodoRequestAction(id) {
  return async function(dispatch) {
    try {
      await deleteTodoAsync(id);
      dispatch(deleteTodoAction(id));
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export function updateTodoRequestAction(id) {
  return async function(dispatch, getState) {
    const { todos } = getState();
    const todo = todos.items.find(todoItem => todoItem.id === id);
    const updatedTodo = { ...todo, status: !todo.status };

    await updateTodoAsync(updatedTodo.id, updatedTodo);

    dispatch(updateTodoAction(updatedTodo));
  }
}