import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    {/*<App />*/}
  </Provider>
)
