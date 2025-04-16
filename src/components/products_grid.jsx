import products from '../data/products.json'; // adapte le chemin selon ton arborescence
import Product from './product.jsx'; // importe le composant Product s’il ne l’est pas déjà

const EPGrid10 = () => {
	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
			{/* shapes */}
			{/* <div className="absolute top-0 right-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_10_shape1.png"
					alt=""
				/>
			</div> */}

			<div className="container relative px-4 mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
					Products
				</h2>
				<div className="grid grid-cols-12 gap-6 mt-12">
					{products.map((product, index) => (
						<Product key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default EPGrid10;
