import Greeting from './components/Greeting.jsx';
import Layout from './components/layout.jsx';

function App() {

    //Not recommended, inefficient
    // const john = {
    //     name: "John Doe",
    //     occupation: "Truck driver",
    // };

    // const alice = {
    //     name: "Alice",
    //     occupation: "Store manager",
    // };
    
    const people = [
        {
            name: "John Doe",
            occupation: "Truck driver",
        },
        {
            name: "Alice",
            occupation: "Store manager",
        },
    ];

    const personList = people.map(person => <Greeting key={person.name} person={person} /> );

    // const numbers = [1, 2, 3, 4];

    // //quickest way to map
    // const squares = numbers.map(num => num * num);

    // const squares2 = numbers.map(function(num) {
    //     return num * num;
    // })
    
    // console.log(numbers, squares, squares2)


  return (
    <Layout>
      <p>Hello React!</p>
      {/* <Greeting person={john}/>
      <Greeting person={alice}/> */}
      {personList}
    </Layout>
  );
}



export default App
