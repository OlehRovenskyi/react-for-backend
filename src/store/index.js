import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter.reducer.js';
import { composeWithDevTools } from '@redux-devtools/extension';
import { logger } from 'redux-logger/src';
import todosReducer from './reducers/todos.reducer.js';
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunkMiddleware)
  )
)

export default store;