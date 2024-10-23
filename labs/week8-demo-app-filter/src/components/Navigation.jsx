// import CatalogDropDown from "./CatalogDropDown.jsx";

export default function Navigation({ /**categories*/ children }) {
    return (
        <nav>
            <button>Home</button>
            {/* <CatalogDropDown categories={categories} /> */}
            {children}
            <button>All products</button>
            <button>Wishlist</button>
        </nav>
    );
}