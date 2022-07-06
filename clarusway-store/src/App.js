import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CategoryBar from "./components/category/CategoryBar";
import Products from "../src/components/products/Products";
import Basket from "./components/basket/Basket";

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
  };


  // Remove işleminde ürünlerin bu id ile eşleşmiyorsa alıyoruz eşleşenei almıyoruz
const handleRemove=(productId)=>{
const filterProducts=account.filter((item)=>item.id!==productId)
setAccount(filterProducts)
}

const handleEmptyCart=()=>setAccount([])

const handleUpdate=(productId,quantity)=>{
if (quantity===0){
  handleRemove(productId)
}
else {
  const updateAccount=account.map((item)=> item.id===productId ? {...item,quantity} : item);
  setAccount(updateAccount);
}
}
  const getProducts = () => {
    axios
      .get(baseUrl)
      .then((res) => {
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
        <Basket 
        account={account}
        handleRemove={handleRemove}
        handleEmptyCart={handleEmptyCart}
        handleUpdate={handleUpdate}/>
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
