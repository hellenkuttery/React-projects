import {Navigate,Outlet} from "react-router-dom"
 
const PrivateRouter = () => {

    const user=true;

    // User true olursa outlet yani nested içindeki defaulta yani About sayfasına, false olursa Login sayfasına 
    return user ? <Outlet/> : <Navigate to="/login"/>;
  
}

export default PrivateRouter;
