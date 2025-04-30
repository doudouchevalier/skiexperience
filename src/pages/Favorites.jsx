import React from "react";
import { toast } from "react-hot-toast";
import { useFavorites } from "../components/FavoritesContext"; // Import du contexte
import ProductSaved from "../components/ProductSaved"; // Import du composant réutilisable

import productsData from "../data/all_products.json";

const Favorites = () => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleRemove = (id) => {
    toggleFavorite(id);
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
          <div className="grid grid-cols-1 gap-6">
            {favoriteProducts.map((product) => (
              <ProductSaved key={product.id} item={product} onRemove={handleRemove} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;