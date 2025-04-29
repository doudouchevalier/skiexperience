import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/NotFound";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import Items from "../pages/items";
import Product from '../pages/Product';
import SearchResults from "../pages/SearchResult";
import Favorites from "../pages/Favorites";

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
      {
        path: "/search",
        element: <SearchResults />
      }
      
    ]
  }
]);

export default router;