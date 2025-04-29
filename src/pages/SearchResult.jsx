import React, { useEffect, useState } from "react";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Résultats de recherche</h1>
      {results.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg">
              <img src={product.front_image} alt={product.name} className="w-full h-60 object-cover mb-4 rounded" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>Catégorie : {product.category}</p>
              <p>Marque : {product.brand}</p>
              <p className="font-bold mt-2">{product.price} €</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default SearchResults;
