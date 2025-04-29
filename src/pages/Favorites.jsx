import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFavorites } from "../components/FavoritesContext"; // Import du contexte

import productsData from "../data/all_products.json";

const Favorites = () => {
  // Utilisation du contexte pour récupérer les favoris
  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleRemove = (id) => {
    toggleFavorite(id); // Toggle favori pour retirer
    toast.success("Produit retiré des favoris.");
  };

  const favoriteProducts = productsData.filter((p) => favoriteIds.includes(p.id));

  return (
    <section className="py-20 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-black text-4xl font-bold mb-8 text-center">Mes favoris</h1>

        {favoriteProducts.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Vous n'avez pas encore ajouté de produits en favoris.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.front_image}
                    alt={product.name}
                    className="rounded-xl w-full h-60 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <p className="text-blue-600 font-semibold text-lg mt-1">{product.price}€</p>
                </Link>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="mt-4 py-2 px-4 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200 self-start"
                >
                  Retirer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
