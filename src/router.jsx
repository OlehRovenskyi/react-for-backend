import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';
import { TodoRouter } from './components/TodoRouter/TodoRouter.jsx';
import { CounterRedux } from './components/CounterRedux/CounterRedux.jsx';
import { TodoGeneralInfo } from './components/TodoRouter/TodoGeneralInfo.jsx';
import { Counter } from './components/Counter/Counter.jsx';
import { AddTodo } from './components/TodoRouter/AddTodo/AddTodo.jsx';
import { UserList } from './components/UserList/UserList.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
    errorElement: <NotFound />,
  },
  {
    path: "/todos",
    element: <TodoRouter />,
    errorElement: <NotFound />,
    children: [
      {
        path: "info",
        element: <TodoGeneralInfo />,
      },
      {
        path: "counter",
        element: <Counter />,
      }
    ]
  },
  {
    path: '/todos/:todoId',
    element: <AddTodo />,
  },
  {
    path: "/counter",
    element: <CounterRedux />,
    errorElement: <NotFound />,
  },
]);