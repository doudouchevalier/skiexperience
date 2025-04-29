import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/NotFound";
import Home from "../pages/Home";
import Cart from "../pages/cart";
import Items from "../pages/items";
import Product from '../pages/Product';
import Favorites from "../pages/Favorites";
import CartPage from "../pages/CartPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/products",
        element: <Items />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
    ]
  }
]);

export default router;