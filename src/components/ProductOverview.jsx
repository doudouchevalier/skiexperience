import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/all_products.json";
import ProductPreviews from "./Epoverview1/ProductPreviews";
import ColorVariant from "./Epoverview1/ColorVariant";
import { useFavorites } from "./FavoritesContext";
// import SizeVariant from "./Epoverview1/SizeVariant"; // si tu veux le remettre plus tard

const ProductOverview = ({ productId }) => {
	const navigate = useNavigate();
	const product = productsData.find((p) => p.id === productId);

	const { favoriteIds, toggleFavorite } = useFavorites();
	const isFavorited = favoriteIds.includes(product?.id);

	// Pour gérer les variantes de couleur disponibles
	const sameNameProducts = product
		? productsData.filter((p) => p.name === product.name)
		: [];

	const colorVariants = sameNameProducts.map((p) => ({
		label: p.color,
		value: p.color,
		title: p.color,
		id: p.id,  // Ajout de l'id du produit associé à la couleur
		front_image: p.front_image, 
	}));

	const [formData, setFormData] = useState({
		color: product?.color || "Default",
		size: "M",
		qty: 1,
	});

	useEffect(() => {
		// Sync la couleur si on change d'ID dans l'URL
		if (product) {
			setFormData((prev) => ({ ...prev, color: product.color }));
		}
	}, [productId]);

	if (!product) {
		return <div>Produit introuvable</div>;
	}

	const handleColorChange = (id) => {
		// Change l'URL avec l'ID du produit sélectionné
		navigate(`/product/${id}`);
	};


	const handleToggleFavorite = (e) => {
		e.preventDefault();
		toggleFavorite(product.id);
		toast.success(
			`Produit ${!isFavorited ? "ajouté" : "retiré"} des favoris : ${product.name}`
		);
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

						<form>
							<ColorVariant
								selectedColor={formData.color}
								onChange={handleColorChange}  // Passer l'ID du produit
								variants={colorVariants}
							/>

							{/* Bouton de favoris */}
							<button
								onClick={handleToggleFavorite}
								className={`mt-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
									isFavorited
										? "bg-red-100 text-red-600"
										: "bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600"
								}`}
							>
								{isFavorited ? "❤️" : "🤍"}
							</button>

							{/* <SizeVariant selectedSize={formData.size} onChange={setField} /> */}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductOverview;
