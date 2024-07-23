// import { products } from './mocks/products.json'
import { Products } from "./components/products/Products";
import fetchProducts from "./services/getProducts";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Cart } from "./components/cart/Cart.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.jsx";
import { CartProvider } from "./context/cart.jsx";
import { Loader } from "./components/loader/Loader.jsx";

function App() {
  useEffect(() => {
    fetchProducts().then((response) => setInitialProducts(response));
  }, []);

  const [initialProducts, setInitialProducts] = useState([]);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  if (initialProducts.length === 0) {
    return <Loader />;
  }

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
