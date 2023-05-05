import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserInfo } from './components/UserInfo/UserInfo.jsx';
import { Clock } from './components/Clock/Clock.jsx';
import { ReactEvents } from './components/ReactEvents/ReactEvents.jsx';
import { Counter } from './components/Counter/Counter.jsx';
import { Todo } from './components/Todo/Todo.jsx';
import { TodoAsync } from './components/TodoAsync/TodoAsync.jsx';
import { CounterRedux } from './components/CounterRedux/CounterRedux.jsx';
import { TodoRedux } from './components/TodoRedux/TodoRedux.jsx';

function Welcome({name, age}) {
  return (
    <>
      <h1>Hi, {name}</h1>
      <Welcome2 age={age}/>
    </>
  );
}

function Welcome2(props) {
  return <h1>User age, {props.age}</h1>;
}

function App() {
  const age = 30;
  return (
    <>
      <CounterRedux />

      <TodoRedux />
      {/*<TodoRedux />*/}
      {/*<Todo initialTodos={[{name: 'milk', id:1}, {name: 'bread', id: 2}]}/>*/}
      {/*<Welcome name="Vic 3" age={age} />*/}
      {/*<Welcome name="Vic 4" age={age} />*/}
      {/*<UserInfo name="Vic" age={age}/>*/}
      {/*<Clock />*/}
      {/*<ReactEvents />*/}
      {/*<Counter />*/}
    </>
  )
}

export default App
//
// class App2 extends React.Component {
//
//   render() {
//     this.setState({name: 'Vic'})
//     return <h1>Hi {this.state.name}</h1>;
//   }
// }
