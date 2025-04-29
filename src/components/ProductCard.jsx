import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFavorites } from "./FavoritesContext";
import { useCart } from "./CartContext.jsx"; // Importation du contexte du panier
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isFavorited, setIsFavorited] = useState(false);

	// Accès aux méthodes du contexte des favoris
	const { toggleFavorite } = useFavorites();
	// Accès aux méthodes du contexte du panier
	const { addToCart } = useCart();

	const handleToggleFavorite = (e) => {
		e.preventDefault();
		setIsFavorited((prev) => !prev);
		toggleFavorite(product.id); // Appel à la fonction toggleFavorite du contexte
		toast.success(
			`Produit ${!isFavorited ? "ajouté" : "retiré"} des favoris : ${product.name}`
		);
	};

	const handleAddToCart = (e) => {
		e.preventDefault();
		addToCart(product); // Appel à la fonction addToCart du contexte
		toast.success(`Ajouté au panier : ${product.name}`);
	};

	return (
		<Link to={`/product/${product.id}`} className="h-full relative block">
			<div
				className="bg-white shadow p-4 pb-0 h-full flex flex-col justify-between relative"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* 🔲 Boutons flottants visibles au hover */}
				{isHovered && (
					<div className="absolute top-2 right-2 flex space-x-2 z-10">
						{/* 🖤 Bouton Favori */}
						<button
  onClick={handleToggleFavorite}
  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
>
  <FontAwesomeIcon
    icon={isFavorited ? solidHeart : regularHeart}
    className={`h-5 w-5 ${isFavorited ? "text-red-500" : "text-gray-500"}`}
  />
</button>

						{/* 🛒 Bouton Ajouter au panier */}
						<button
							onClick={handleAddToCart}
							className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 6h14M9 21h1m4 0h1"
								/>
							</svg>
						</button>
					</div>
				)}

				{/* 🖼 Image produit */}
				<div className="rounded flex justify-center items-center aspect-[3/4] w-full relative overflow-hidden">
					<img
						src={isHovered ? product.back_image : product.front_image}
						alt={product.name}
						className="h-full w-auto object-contain transition duration-300 ease-in-out"
					/>
				</div>

				{/* 💬 Infos produit */}
				<div className="py-4 px-1 flex-grow">
					<div className="flex flex-col items-start space-y-1">
						<p className="hover:text-blue-600 text-[clamp(0.55rem,1vw,0.75rem)] font-medium leading-snug mb-1">
							<b>{product.brand}</b> {product.name}
						</p>
						<p className="text-xl font-bold text-[clamp(0.45rem,1vw,0.65rem)] whitespace-nowrap">
							{product.price}€
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
