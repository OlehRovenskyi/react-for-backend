import { ADD_TODO, ADD_TODOS, DELETE_TODO, UPDATE_TODO } from '../actions/todos.actions.js';

const initialState = {
  items: [],
  filters: [],
}

export default function todosReducer(state= initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, payload] }

    case ADD_TODOS:
      return { ...state, items: [...state.items, ...payload] }

    case UPDATE_TODO:
      return {
        ...state, items: state.items.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }

          return todo;
        })
      }

    case DELETE_TODO:
      return { ...state, items: state.items.filter((todo) => todo.id !== payload) }

    default:
      return state;
  }
}