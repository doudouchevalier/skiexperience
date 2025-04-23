import React, { useState } from 'react';
// import products from '../data/products.json';
import products from '../data/all_products_deduplicated.json'
import ProductCard from './ProductCard.jsx';
import Filter from './Filter.jsx'; // <-- ajout du composant
import { useSearchParams } from 'react-router-dom';

const ProductGrid = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const genderFilter = searchParams.get('gender') || '';
	const categoryFilter = searchParams.get('category') || '';
	const brandFilter = searchParams.get('brand') || '';


	const handleGenderChange = (value) => {
		if (value) searchParams.set('gender', value);
		else searchParams.delete('gender');
		setSearchParams(searchParams);
	};

	const handleCategoryChange = (value) => {
		if (value) searchParams.set('category', value);
		else searchParams.delete('category');
		setSearchParams(searchParams);
	};
	const handleBrandChange = (value) => {
		if (value) searchParams.set('brand', value);
		else searchParams.delete('brand');
		setSearchParams(searchParams);
	};

	const uniqueCategories = [...new Set(products.map((p) => p.category))];
	const uniqueBrands = [...new Set(products.map((p) => p.brand))];

	const filteredProducts = products.filter((product) => {
		const genderMatch = !genderFilter || product.gender === genderFilter;
		const categoryMatch = !categoryFilter || product.category === categoryFilter;
		const brandMatch = !brandFilter || product.brand === brandFilter;
		return genderMatch && categoryMatch && brandMatch;
	});

	return (
		<section className="py-14 md:py-24 bg-gray-100 text-zinc-900 relative overflow-hidden z-10">
			<div className="container relative px-4 mx-auto">
				{/* <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
					Products
				</h2> */}

				{/* Intégration du filtre */}
				<Filter
					gender={genderFilter}
					category={categoryFilter}
					brand={brandFilter}
					onGenderChange={handleGenderChange}
					onCategoryChange={handleCategoryChange}
					onBrandChange={handleBrandChange}
					categories={uniqueCategories}
					brands={uniqueBrands}
				/>
			</div>
			<div className="relative w-full px-4">

				{/* Grille */}
				<div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product, index) => (
							<ProductCard key={index} product={product} />
						))
					) : (
						<p className="col-span-12 text-center text-gray-500">
							Aucun produit ne correspond aux filtres sélectionnés.
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default ProductGrid;
