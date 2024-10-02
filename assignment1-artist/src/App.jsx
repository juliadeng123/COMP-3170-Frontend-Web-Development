function App() {
  return (
    <>
      <div className='artist'>
        <header>
          <h1>MyTunes</h1>
        </header>

        <main>
          <div className="artistDetails">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped%29.jpg" alt="Lady Gaga" width="300" height="400"/>
            <div className="albumDetails">
            <h2>Lady Gaga's albums</h2>
              <details>
                <summary>Born This Way</summary>
                <ol>
                  <li>"Marry the Night"</li>
                  <li>"Born This Way"</li>
                  <li>"Government Hacker"</li>
                  <li>"Judas"</li>
                  <li>"Americano"</li>
                  <li>"..."</li>
                </ol>
              </details>
              <details>
                <summary>The Fame</summary>
                <ol>
                  <li>"Just Dance"</li>
                  <li>"LoveGame"</li>
                  <li>"Paparazzi"</li>
                  <li>"Poker Face"</li>
                  <li>"The Fame"</li>
                  <li>"..."</li>
                </ol>
              </details>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
