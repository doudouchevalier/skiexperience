import ProductCard from "./ProductCard";
import popularProducts from "../data/popular_products.json";

const PopularProductsRow = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Produits populaires</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4" style={{ minWidth: "1200px" }}>
            {popularProducts.map((product, index) => (
              <div key={index} className="w-[240px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsRow;
