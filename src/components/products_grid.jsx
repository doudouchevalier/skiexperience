import React, { useState } from 'react';
// import products from '../data/products.json';
import products from '../data/all_products.json'
import Product from './product.jsx';
import Filter from './Filter.jsx'; // <-- ajout du composant

const EPGrid10 = () => {
	const [genderFilter, setGenderFilter] = useState('');
	const [categoryFilter, setCategoryFilter] = useState('');
	const [brandFilter, setBrandFilter] = useState('');

	const uniqueCategories = [...new Set(products.map((p) => p.category))];
	const uniqueBrands = [...new Set(products.map((p) => p.brand))];

	const filteredProducts = products.filter((product) => {
		const genderMatch = !genderFilter || product.gender === genderFilter;
		const categoryMatch = !categoryFilter || product.category === categoryFilter;
		const brandMatch = !brandFilter || product.brand === brandFilter;
		return genderMatch && categoryMatch && brandMatch;
	});

	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
			<div className="container relative px-4 mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
					Products
				</h2>

				{/* Intégration du filtre */}
				<Filter
					gender={genderFilter}
					category={categoryFilter}
					brand={brandFilter}
					onGenderChange={setGenderFilter}
					onCategoryChange={setCategoryFilter}
					onBrandChange={setBrandFilter}
					categories={uniqueCategories}
					brands={uniqueBrands}
				/>

				{/* Grille */}
				<div className="grid grid-cols-12 gap-6">
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product, index) => (
							<Product key={index} product={product} />
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

export default EPGrid10;
