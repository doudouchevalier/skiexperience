import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFavorites } from "./FavoritesContext";
import { useCart } from "./CartContext.jsx"; // Importation du contexte du panier
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
					<div className="absolute top-2 right-1 flex flex-col items-center z-10">
						{/* 🖤 Bouton Favori */}
						<button onClick={handleToggleFavorite} className="bg-transparent p-0 rounded-full hover:bg-transparent">
							<FontAwesomeIcon
								icon = {solidHeart}
								className={`h-5 w-5 ${isFavorited ? "text-red-500 hover:text-red-700" : "text-gray-700 hover:text-black"}`}
							/>
						</button>

						<button onClick={handleAddToCart} className="items-center p-0 text-gray-700 hover:text-black transition">
							<FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
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
					<div className="py-2 px-1 flex-grow">
					<div className="flex justify-between items-center w-full">
						<p className="text-black hover:text-blue-600 text-[clamp(0.55rem,1vw,0.75rem)] font-medium leading-snug">
						<b>{product.brand}</b> {product.name}
						</p>
						<p className="hover:text-blue-600 font-semibold text-[clamp(0.55rem,1vw,0.75rem)] whitespace-nowrap">
						{product.price}€
						</p>
					</div>
					</div>


				</div>
			
		</Link >
	);
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
