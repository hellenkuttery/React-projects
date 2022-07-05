import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryBar from "./components/category/CategoryBar";
import Products from "../src/components/products/Products";
import Account from "./components/account/Account";

function App() {
  const [products, setProducts] = useState([]);
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const baseUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    getProducts();
  }, []);

  // Sepetime (hesabıma ) ürün ekleme işlemi
  const handleAddToCart = (product, quantity) => {
    // içindebu ürün varmı yok mu kontrolü
    const isAdded = account.some((item) => item.id === product.id);
    // Bu ürünün eklenmesi
    !isAdded && setAccount([...account, { ...product, quantity }]);

    console.log("product", product);
  };

  const getProducts = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Navbar 
      totalItems={account?.length}
      setShowCard={setShowCard} />

      {showCard ? (
        <Account account={account} 
        />
      ) : (
        <Products
          products={products}
          getProducts={getProducts}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
