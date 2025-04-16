import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Product = ({ product }) => {
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<div className="bg-white shadow border rounded-xl p-4 pb-0">
				<div className="bg-gray-100 rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
					<img src={product.image} alt="" className="max-w-full h-auto" />
				</div>
				<div className="py-6 px-1">
					<div className="flex justify-between items-center">
						<div>
							<a href="#!">
								<h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
									{product.name}
								</h6>
							</a>
							<span className="text-sm text-yellow-500">
								{Array.from(
									{ length: Math.floor(product.rating) },
									(_, index) => (
										<FontAwesomeIcon
											key={index}
											icon={faStar}
											className="mr-1"
										/>
									)
								)}
								{product.rating % 1 !== 0 && (
									<FontAwesomeIcon icon={faStarHalfAlt} className="mr-1" />
								)}
							</span>
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


Product.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};


export default Product;