import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx"; // Import du contexte Cart
import { toast } from "react-hot-toast";
import ProductSaved from "./ProductSaved.jsx"; // 👈 Ajoute cette ligne en haut

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
        <h1 className="text-4xl font-bold mb-8 text-center">Mon panier 🛒</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Votre panier est vide.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
  <ProductSaved key={item.id} item={item} onRemove={handleRemove} />
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
