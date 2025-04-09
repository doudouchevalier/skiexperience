/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/404";
import About from "../pages/about";
import Article from "../pages/article";
import Home from "../pages/home";

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
        path: "/about",
        element: <About />
      },
      {
        path: "/article",
        element: <Article />
      }
    ]
  }
]);

export default router;