import { useSelector } from "react-redux";
function App() {
  const increment =()=>{

  }
  const decrement =()=>{

  }

  const counter = useSelector((state)=>state.counter)
  return (
    <div>
      <h1>Counter App</h1>
      <h3>{counter} </h3>
      <button onClick={increment}>Increatment</button>
      <button onClick={decrement}>Decreatment</button>
    </div>
  );
}

export default App;
