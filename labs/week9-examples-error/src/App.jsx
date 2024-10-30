import { useEffect } from 'react'
import './App.css'

function App( name ) {

  useEffect(() => {
    console.log("My effect");

    return () => console.log("unmounting"); //will run on unmount
  },[]); //will run on mount

  useEffect(() => {
    //
  },[name]) //will run on every update of "name"

  return (
    <>
    <h1>Error Handling</h1>
    <Example a={1n} b={2n}/>
    </>
  )
}

function Example( a, b ) {
  // const name; not intialized with value hence error

  // try {
  //   a / b;
  // } catch(e) {
  //   console.log(e.message);
  // }
  let child
  try {
    child = <Error />
  } catch(e) {
    console.log(e.message)
    child = "Safe component"
  }

  return (
    <>
    <ErrorBoundary>

    </ErrorBoundary>
    <p>Example Component</p>
    <p>Hello {name}</p>
    {child}
    </>
  )
}

function Error(){
  throw new Error('some error');
  return 'Error'
}

export default App
