import './App.css';

function random(n) {
    return Math.floor(Math.random() *n)
}

function App() {

    function handleInnerClick(e) {
        const element = e.target;
        const red = random(255);
        const green = random(255);
        const blue = random(255);
        
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    function handleOuterClick(e) {
        const element = e.currentTarget;
        const color = random(255);
        
        setTimeout(() => {
            element.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
        }, 500);
    }

  return (
    <>
      <div className='outer' onClick={handleOuterClick}>
        <div className='inner' onClick={handleInnerClick}></div>
      </div>

      <div className='container'>
        <Tile name ="Tile 1"/>
        <Tile name ="Tile 2"/>
        <Tile name ="Tile 3"/>
        <Tile name ="Tile 4"/>
        <Tile name ="Tile 5"/>
        <Tile name ="Tile 6"/>
      </div>
    </>
  );
}

function Tile(props){
    const background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`

    function handleDelete(e) {
        if(e.target === e.currentTarget) {
            // you clicked on the tile itself
            return;
        }
        
        if(e.target.tagName !== 'SPAN'){
            return;
        }

        e.currentTarget.remove(); //otherwise, remove the tile
    }

    return(
        <div className='tile' style={{ backgroundColor: background}} onClick={handleDelete}>
            <p>{props.name}</p>
            <span>x</span>
        </div>
    )
}

export default App;
