import react, { useState } from "react";



let count = 0;
const HookUseState = () => {
    const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [backgroundChange,setBackground] = useState(new Date().toLocaleTimeString());
    const [text,setText] = useState('set Time');
    console.log('zzzzzzzzzzzzz');
    const setBackgroundColor = () =>{
       let randomColor = Math.floor(Math.random()*16777215).toString(16);
       console.log('jjjjjjjjjjjj',randomColor);
       setBackground('#'+randomColor);
    };

    const changeText = () => {
        setText('What The hell');
    }

    const setTime = () => {
        console.log('fffffffff');
        
        setText('set Time');
        setCurrentTime(new Date().toLocaleTimeString()+count);
    }
    // setInterval(setTime(count++), 1);
    return (<>
          <h1>{currentTime}</h1>,
          <button style={{'backgroundColor':backgroundChange}} onClick={setTime}  onDoubleClick={setBackgroundColor} onMouseOver={changeText}>{text}</button>
    </>);
}

export default HookUseState;