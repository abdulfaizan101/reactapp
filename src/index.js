import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mapfunction from "./components/mapfunction";
import HookUseState from "./components/HookUseState";
import Forms from "./components/Forms";
// let greating = 'Good Morning';
// let color = 'green';
// const time = new Date().getHours();
// if(time >= 12 && time <= 19 ){
//   greating = 'Good Afternoon';
//   color = 'orange';
// }
// if(time > 19 && time <= 23 ){
//   greating = 'Good Night';
//   color = 'black';
// }
ReactDOM.render([
  <Mapfunction />,
  <HookUseState />,
  <Forms />
  ],
  // [
  // <h1>{`Hello, My Name is : ${flname}`}</h1>,
  // <p>{`today Date is ` } {new Date().toLocaleDateString()}</p>,
  // <p>{`Current Time is : `} {new Date().toLocaleTimeString() }</p>
  // ],
  // <div style={{'display':'flex','justifyContent':'center','alignItem':'center','width':'100%','height':'100vh','marginTop':'-30px'}}>  
  //     <h1 style={{'backgroundColor':'#ffe7c5','padding':'20px 20px','borderRadius':'18px'}}>Hello sir, <span style={{'color': color}}>{greating}</span></h1>
  // </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// var h1 = document.createElement('h1');
// h1.innerHTML = 'abdul faizan';
// document.getElementById('root').appendChild(h1);
