import { createElement } from "react";

function App() {

  const heading = createElement('h1', { id: "myheading"}, "React is awesome!")
  
  // return <h1>React is awesome!</h1>
  
  const heading = createElement('h1', null, "React is awesome!")
}

export default App
