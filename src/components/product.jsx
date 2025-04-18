import { useState } from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4 h-[500px]">
			<div className="bg-white shadow p-4 pb-0 h-full flex flex-col justify-between">
				<div
					className="rounded flex justify-center items-center h-[300px] w-full relative overflow-hidden"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<img
						src={isHovered ? product.back_image : product.front_image}
						alt={product.name}
						className="h-full w-auto object-contain transition duration-300 ease-in-out"
					/>
				</div>
				<div className="py-6 px-1 flex-grow">
					<div className="flex justify-between items-center">
						<div>
							<a href="#!">
								<h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
								<b>{product.brand}</b> {product.name}
								</h6>
							</a>
						</div>
						<div>
							<p className="text-3xl font-bold">{product.price}€</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;