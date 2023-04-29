import { useEffect, useState } from 'react';

export function Clock() {
  // const dateState = useState(new Date()); //-> [value, setter]
  // let data = dateState[0];
  // let dataSetter = dateState[1];
  let [date, setDate] = useState(new Date());
  let [date2, setDate2] = useState(new Date());

  let timer = setInterval(() => {
    setDate(new Date());
    console.log(date);
  }, 1000);

  // useEffect(() => {}, []);
  // useEffect(() => {}, [dependency1, dependency2]);

  return (
    <div>
      <h1>Clock!</h1>
      <h2>Time now {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
