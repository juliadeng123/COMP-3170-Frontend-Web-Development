import './App.css'

function App() {

    // function greet(name) {
    //     console.log(`Hello ${name}`);
    // }

    function handleClick(event) {
        const btn = event.target;
        btn.textContent = "React"
    }

    function handleLink(e) {
        e.preventDefault(); //won't open the url in the browser
        const element = e.target;
        console.log(element.href);
    }

  return (

    <>
        <button onClick={handleClick}>Click me</button>
        <a href="https://bcit.ca" target='_blank' onClick={handleLink}>Visit BCIT</a>
        {/* <button onClick={() => greet("John Doe")}>Click Me!</button>
        <button onClick={() => greet("Jane Doe")}>Click Me!</button>
        <button onClick={() => greet("Chad")}>Click Me!</button> */}
    </>
  )
}

export default App
