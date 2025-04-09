import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/NotFound";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Product from "../pages/product";
import Items from "../pages/items";

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
        path: "/my-cart",
        element: <Cart />
      },
      {
        path: "/items",
        element: <Items />
      },
      {
        path: "/product",
        element: <Product />
      }
    ]
  }
]);

export default router;
