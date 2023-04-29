export function ReactEvents() {

  function hello(data) {
    console.log('Hello', data);
  }

  return (
    <>
      <div>
        {/*<button onClick={() => console.log('Welcome!')}>Say Welcome 1</button>*/}
        {/*<button onClick={hello}>Say Welcome 2</button>*/}
        {/*<button onClick={hello.bind(this, 'World')}>Say Welcome 3</button>*/}
        Good -
        <button onClick={() => hello('Welcome!')}>Say Welcome 4</button>
      </div>
    </>
  )
}
