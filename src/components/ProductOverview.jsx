import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

import productsData from "../data/all_products.json";
import ProductPreviews from "./Epoverview1/ProductPreviews";
import ColorVariant from "./Epoverview1/ColorVariant";
import { useFavorites } from "./FavoritesContext";
import { useCart } from "./CartContext";
// import SizeVariant from "./Epoverview1/SizeVariant"; // si tu veux le remettre plus tard

const ProductOverview = ({ productId }) => {
	const navigate = useNavigate();
	const product = productsData.find((p) => p.id === productId);

	const { favoriteIds, toggleFavorite } = useFavorites();
	const isFavorited = favoriteIds.includes(product?.id);

	const { addToCart } = useCart();

	const sameNameProducts = product
		? productsData.filter((p) => p.name === product.name)
		: [];

	const colorVariants = sameNameProducts.map((p) => ({
		label: p.color,
		value: p.color,
		title: p.color,
		id: p.id,
		front_image: p.front_image,
	}));

	const [formData, setFormData] = useState({
		color: product?.color || "Default",
		size: "M",
		qty: 1,
	});

	useEffect(() => {
		if (product) {
			setFormData((prev) => ({ ...prev, color: product.color }));
		}
	}, [productId]);

	if (!product) {
		return <div>Produit introuvable</div>;
	}

	const handleColorChange = (id) => {
		navigate(`/product/${id}`);
	};

	const handleToggleFavorite = (e) => {
		e.preventDefault();
		toggleFavorite(product.id);
		toast.success(
			`Produit ${!isFavorited ? "ajouté" : "retiré"} des favoris : ${product.name}`
		);
	};

	const handleAddToCart = (e) => {
		e.preventDefault();
		addToCart(product);
		toast.success(`Ajouté au panier : ${product.name}`);
	};

	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-2 gap-6">
					<div className="col-span-2 md:col-span-1">
						<ProductPreviews
							previews={[
								{ previewUrl: product.front_image, thumbUrl: product.front_image },
								{ previewUrl: product.back_image, thumbUrl: product.back_image },
							]}
						/>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h1 className="text-2xl md:text-4xl font-medium mb-4">{product.name}</h1>
						<h3 className="text-2xl text-blue-600 font-medium mb-6">{product.price}€</h3>
						
						<form className="mt-6 space-y-4">
							<ColorVariant
								selectedColor={formData.color}
								onChange={handleColorChange}
								variants={colorVariants}
							/>

							<div className="flex items-center space-x-4 pt-4">
								{/* ❤️ Bouton Favori */}
								<button
									onClick={handleToggleFavorite}
									className="transition"
									title={isFavorited ? "Retirer des favoris" : "Ajouter aux favoris"}
								>
									<FontAwesomeIcon
										icon={isFavorited ? solidHeart : regularHeart}
										className={
											(isFavorited ? "text-red-500 hover:text-red-700" : "text-gray-700 hover:text-black") +
											" text-3xl"
										}
									/>
								</button>

								{/* 🛒 Bouton Panier */}
								<button
									onClick={handleAddToCart}
									className="transition text-gray-700 hover:text-black"
									title="Ajouter au panier"
								>
									<FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
								</button>
							</div>
						</form>
					</div>
				</div>
				<h4 className="text-lg font-semibold mt-10 mb-2">ℹ️ Informations techniques</h4>
<div className="text-sm md:text-base text-zinc-700 leading-relaxed space-y-4">
	<p>
		Ce modèle de haute performance associe <strong>confort</strong>, <strong>durabilité</strong> et <strong>style</strong>, conçu pour accompagner aussi bien vos activités sportives que votre quotidien.
	</p>

	<ul className="list-disc list-inside space-y-1">
		<li><strong>Membrane GORE-TEX®</strong> : imperméabilité totale et respirabilité optimale</li>
		<li><strong>Construction ergonomique</strong> : liberté de mouvement maximale</li>
		<li><strong>Matériaux techniques</strong> : légers, résistants et adaptés à un usage intensif</li>
		<li><strong>Design épuré</strong> : finitions soignées et look moderne</li>
	</ul>

	<p>
		Pensé pour <strong>l’exigence</strong> et <strong>l’esthétique</strong>, cet article s'impose comme un indispensable pour celles et ceux qui ne veulent faire aucun compromis.
	</p>
</div>


			</div>
		</section>
	);
};

export default ProductOverview;
