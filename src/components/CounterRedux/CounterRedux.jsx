import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, setValueAction } from '../../store/actions/counter.actions.js';

export function CounterRedux() {
  const counts = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function setCounts(e) {
    dispatch(setValueAction(e.target.value));
  }

  return (
    <div>
      <h1>CounterRedux {counts.value}</h1>
      <input type="number" value={counts.value} onChange={setCounts} />
      <button onClick={() => dispatch(incrementAction())}>increment</button>
      <button onClick={() => dispatch(decrementAction())}>decrement</button>
    </div>
  );
}