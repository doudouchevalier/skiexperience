// src/pages/Product.jsx
import { useParams } from "react-router-dom";
import ProductOverview from "../components/ProductOverview";

function Product() {
  const { id } = useParams(); // récupère l'id de l'URL
  const productId = parseInt(id); // convertit en nombre si nécessaire

  return (
    <div>
      <ProductOverview productId={productId} />
    </div>
  );
}

export default Product;
