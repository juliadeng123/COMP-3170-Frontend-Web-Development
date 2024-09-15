// import { createElement } from "react";
// import { Fragment } from "react";

function App() {

  // const heading = createElement('h1', { id: "myheading"}, "React is awesome!")
  
  const heading = "React is awesome!"

  return (
    <>
      <div><h1 className="myheading">{heading}</h1>
      <p>Web development using React is the best</p></div>
    </>
  );

  // return <Fragment id="somethin"><h1>I love React</h1><p>Web dev bla bla..</p></Fragment>

  // return heading
}

export default App
