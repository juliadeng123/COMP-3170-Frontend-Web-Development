import Greeting from './components/Greeting';

function App() {

    const john = {
        name: "John Doe",
        occupation: "Truck driver",
    };

    const alice = {
        name: "Alice",
        occupation: "Store manager",
    };
    
  return (
    <>
      <p>Hello React!</p>
      <Greeting person={john}/>
      <Greeting person={alice}/>
    </>
  );
}



export default App
