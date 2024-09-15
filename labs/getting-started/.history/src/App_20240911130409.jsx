import { createElement } from "react";

function App() {

  const heading = createElement('h1', { id: "myheading"}, "React is awesome!")
  
  // return <h1 id="myheading">React is awesome!</h1>

  return heading
}

export default App
