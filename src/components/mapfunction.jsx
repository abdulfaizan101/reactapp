import react from 'react'
let count = 0;
const num = ()=> {
  count++;
  document.getElementById('f').innerHTML = count;
  console.log('faizan',count);
}

const arr = ['abdul','faizan','khan'];
const Mapfunction = () =>{
  return(<>  {arr.map((item)=>{
       return (<h1 key={item}>{item}</h1>);
   })},<h1 id="f">{count}</h1><button onClick={num}>click</button></>);
}

export default Mapfunction;
