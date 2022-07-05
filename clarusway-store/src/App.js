import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryBar from "./components/category/CategoryBar";
import Products from "../src/components/products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const baseUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    getProducts();
  }, []);

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
      <Navbar/>


      {showCard ? (""):(
         <Products 
      products={products} 
      getProducts={getProducts} />
      )}
     
    </div>
  );
}

export default App;
