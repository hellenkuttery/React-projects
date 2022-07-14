import { BrowserRouter,Route,Routes } from "react-router-dom"
import { GlobalStyles } from "../components/globalStyles/Global.style"
import Navbar from "../components/navbar/Navbar"
import About from "../pages/about/About"
import Detail from "../pages/detail/Detail"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter"
const AppRouter = () => {
  return (
<BrowserRouter>
<GlobalStyles/>
<Navbar/>
    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        {/* Burada nested router kullanacağız */}
        <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About/>}></Route>
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
            <Route path="" element={<Detail/>}></Route>
        </Route>

    </Routes>


</BrowserRouter>
  )
}

export default AppRouter
