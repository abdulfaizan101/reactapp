import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, islogged } from "./actions";



function App() {
  const counter = useSelector(state=>state.counter);
  const isLog = useSelector(state=>state.isLogged);
  const dispatch = useDispatch()

  
  
  return (
    <div>
      <h1>This is Done By Redux</h1>
      <h1>counter {counter}</h1>
      <button onClick={()=>{ dispatch(increment(10)) }}>+</button>
      <button onClick={()=>{  dispatch( decrement()) }}>-</button>
      { isLog ? <h1>abdul faizan is Login</h1> : ''}

      <button onClick={()=>{  dispatch( islogged() ) }}> {isLog ? 'Logout' : 'Login'}</button>
      
      
    </div>
  );
}

export default App;
