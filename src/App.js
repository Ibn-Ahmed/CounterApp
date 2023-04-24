import { useState } from 'react';
import './App.css'
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="container ">
     <div class="card">
  <div class="card-body">
    <h1>Shami's Counter App</h1>
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <h2>{count}</h2>
      <div>
      <button className='btn btn-outline-primary m-3' onClick={()=>setCount(count + 1)}>Increase</button>
      <button className='btn btn-outline-secondary m-3' onClick={()=>setCount(count - 1)} disabled= {count==0}>Decrease</button>
      <button className='btn btn-outline-dark m-3' onClick={()=>setCount(0)} disabled= {count==0}>Reset</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
