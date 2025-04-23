import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="h-full">
			<div className="bg-white shadow p-4 pb-0 h-full flex flex-col justify-between">
				<div
					className="rounded flex justify-center items-center aspect-[3/4] w-full relative overflow-hidden"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<img
						src={isHovered ? product.back_image : product.front_image}
						alt={product.name}
						className="h-full w-auto object-contain transition duration-300 ease-in-out"
					/>
				</div>
				<div className="py-4 px-1 flex-grow">
					<div className="flex flex-col items-start space-y-1">
						<div>
							<a href="/">
								<p className="hover:text-blue-600 text-[clamp(0.55rem,1vw,0.75rem)] font-medium leading-snug mb-1">
									<b>{product.brand}</b> {product.name}
								</p>

							</a>
						</div>
						<div>
							<p className="text-xl font-bold text-[clamp(0.45rem,1vw,0.65rem)] whitespace-nowrap">{product.price}€</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default ProductCard;