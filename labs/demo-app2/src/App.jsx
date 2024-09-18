import FooterColumn from "./components/FooterColumn.jsx";
import Product from "./components/Product.jsx";

const footerLinks = [
    {
        title: "Our store",
        links: ["About us", "Contact us", "Become a partner"],
    },
    {
        title: "Our policies",
        links: ["Return policies", "Shipping policy", "Terms of service"],
    },
    {
        title: "Our products",
        links: ["Home page", "Search", "Catalog"],
    }
];

const PRODUCTS = [
    {
        name: "Shoes",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ladies%27_ballroom_shoes%2C_Tango_Shoes_1.jpg",
        price: 20,
    },
    {
        name: "Mens shirt",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg",
        price: 13,
    },
    {
        name: "Mens jeans",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg",
        price:23,
    },
    {
        name: "Samsung Galaxy",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Samsung_Galaxy_Z_smartphone.jpg",
        price: 1200,
    },
    {
        name: "Chair",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Rey_Chair.png",
        price: 50,
    },
    {
        name: "Fridge",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Open_refrigerator_with_food_at_night.jpg",
        price: 500,
    }
]



function App() {

    const footerColumnList = footerLinks.map(column => <FooterColumn key={column.title} data={column} />);
  
    const productList = PRODUCTS.map(product => <Product key={product.name} product={product} />);

    return (
    <div class="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn"><span>&#129293;</span><span className="badge">2</span></button>
              <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
            </div>
          </div>
          
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
          
        </header>
        <main>
            {productList}
        </main>
      </section>
      <footer>
        <div>
            <footerColumnList />
            <footerColumnList />
            <footerColumnList />
        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
