import { createBrowserRouter } from "react-router-dom";
import SignupPage from "./SignupPage";
import Home from './Home'
import Checkout from "./Checkout";
import Cart from "../Datafull/Cart";
import Product from "./Product";
const Router=createBrowserRouter([
    {path:"/",element:<Home/>},{path:"/signup",element:<SignupPage/>},{path:"/checkout",element:<Checkout/>},
    {path:"/cart",element:<Cart />}

])
export default Router;