import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx"; // Import du contexte Cart
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.success("Produit retiré du panier.");
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Panier vidé.");
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="py-20 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl text-black font-bold mb-8 text-center">Mon panier 🛒</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Votre panier est vide.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.front_image}
                    alt={item.name}
                    className="rounded-xl w-full h-60 object-contain mb-4 bg-white"
                  />

                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="text-blue-600 font-semibold text-lg mt-1">{item.price}€</p>
                  <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                </Link>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 py-2 px-4 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200 self-start"
                >
                  Retirer
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-xl font-semibold">Total: {totalPrice}€</p>
              <button
                onClick={handleClearCart}
                className="mt-4 py-2 px-4 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400"
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
