import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  // Chargement des favoris depuis localStorage au démarrage
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    // Synchronisation des favoris avec localStorage chaque fois qu'ils changent
    if (favoriteIds.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favoriteIds));
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favoriteIds]);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
