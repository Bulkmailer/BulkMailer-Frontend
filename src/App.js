// import react from 'react';
// import './App.css'
// import { useSelector , useDispatch } from 'react-redux';
// import {incNum , decNum} from './actions/index'

// function App(){
//   const myState =useSelector((state)=>state.changeTheNum);
//   const dispatch = useDispatch();
// return(<>
// <div className='container'>
// <h1>Increement/Decreement Counter</h1>
// <h4>Using react and Redux</h4>
// <div className='quantity'>
//   <a className='quantity_minus' title='decreement' onClick={()=>dispatch(decNum())}><span> - </span></a>
//   <input name='quantity' type='text' className='quantity_input' value={myState}></input>
//   <a className='quantity_plus' title='increement' onClick={()=>dispatch(incNum())}><span> + </span></a>
// </div>
// </div>
// </>)
// }
// export default App;

import './App.css';
import Todo from './components/todo';

function App() {
  return (
   <>
   <Todo/>
   </>
  );
}

export default App;
