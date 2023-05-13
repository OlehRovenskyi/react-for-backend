import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, setValueAction } from '../../store/actions/counter.actions.js';
import { Navigation } from '../Navigation/Navigation.jsx';

export function CounterRedux() {
  const counts = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function setCounts(e) {
    dispatch(setValueAction(e.target.value));
  }

  return (
    <div>
      <Navigation />

      <h1>CounterRedux {counts.value}</h1>
      <input type="number" value={counts.value} onChange={setCounts} />
      <button onClick={() => dispatch(incrementAction())}>increment</button>
      <button onClick={() => dispatch(decrementAction())}>decrement</button>
    </div>
  );
}