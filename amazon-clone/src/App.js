import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import Checkout from "./pages/Checkout"
import Home from './components/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />  } />

        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
