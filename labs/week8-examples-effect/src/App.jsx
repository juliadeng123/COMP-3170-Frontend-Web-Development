import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("John Doe");

  function handleClick() {
    setShow(!show);
  }

  function handleInput(e) {
    if (e.key === "Enter") {
      setName(e.target.value); //update name
      e.target.value= ""; // clear text input
    }
  }

  return (
    <>
      <p>
        <input type='text' onKeyDown={handleInput} />
      </p>
      <p>
        <button onClick={handleClick}>Toggle Show</button>
      </p>
      {/**show && <Effect name="John Doe" />*/} {/**This is like an if statement */}

      {show ? <Effect name="John Doe" /> : "Oops!"} {/**Ternary Operator. This is like an if else statement */}
    </>

  );
}

function Effect(){
  const [status, setStatus] = useState("stopped");
  const [value, setValue] = useState(0);
  const timer = useRef();

  function handleStop(){
    setStatus("stopped");
    clearInterval(timer.current);
  }

  function handlePause(){
    if (status === "running") {
      setStatus("paused");
      clearInterval(timer.current);
    }  else {
        setStatus("running");
      }
  }

  function handleStart(){
    setValue(0);
    setStatus("running");
  }

  useEffect(() => {
    if (status === "stopped" || status === "paused") return;
    timer.current = setInterval(() => {
      setValue(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, [status]);

  return(
    <>
    <button onClick={handleStart}>Start</button>
    <button onClick={handlePause}>{status === "paused" ? "Resume" : "Pause"}</button>
    <button onClick={handleStop}>Stop</button>
    <p>Timer: {value}s</p> {/* Display the timer value */}
    </>
  )
}


// function Effect({ name }){

//   const numRef = useRef(0);
//   const myRef = useRef();
  
//   console.log(numRef.current);

//   function fn() {
//     console.log("I am a side effect");
//   }

//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//     if (i >= 5) clearInterval(timer);
//     // console.log(numRef.current++);
//     myRef.current.textContent = numRef.current++;
//   }, 1000);
//   }, []);

//   useEffect(fn, []);

//   console.log("component rendering ...");


// return(
//   <>
//     <p>Hello, {name}</p>
//     <p ref={myRef}></p>
//   </>
// );

export default App
