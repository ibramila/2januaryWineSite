import Account from "../pages/Account";
import AddProduct from "../pages/AddProduct";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "addProduct",
                element: <AddProduct />
            },
            {
                path: "basket",
                element: <Basket />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "account",
                element: <Account />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]