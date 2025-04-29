import { CartProvider } from "./components/CartContext.jsx";
import { FavoritesProvider } from "./components/FavoritesContext";
import { Outlet } from "react-router-dom";
import Navigation from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="App">
          <Navigation />
          <Toaster position="top-right" />
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
