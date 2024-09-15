function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>home</button>
              <button>catalog</button>
              <button>all products</button>
              <button>wishlist</button>
            </nav>

            <form>
              <input type="search" placeholder="search"/>
              <button type="button">Go</button>
            </form>
          </div>
        </header>

        <main>
          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg" alt=""/>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
          </div>
        </main>
      </section>
      <footer>
        <div>
          <h3>Our store</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href=""></a>Sell with us</li>
          </ul>
        </div>
        <div>
          <h3>Our policies</h3>
          <ul>
            <li><a href="">Return policies</a></li>
            <li><a href="">Shipping policies</a></li>
            <li><a href=""></a>Terms of service</li>
          </ul>
        </div>
        <div>
          <h3>Our products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href=""></a>Catalog</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
