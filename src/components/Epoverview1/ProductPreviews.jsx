import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<Fragment>
			<div className="relative">
				<div className="w-full h-[500px] flex items-center border border-gray-200 rounded-lg justify-center bg-white mb-4 md:p-6">
					<img
						src={previews[index].previewUrl}
						alt={`Preview ${index + 1}`}
						className="max-h-full max-w-full object-contain"
					/>
				</div>


				<ul className="flex flex-wrap gap-2">
					{previews.map((preview, i) => (
						<li key={i}>
							<button
								type="button"
								onClick={() => setIndex(i)}
								className={`w-20 h-20 p-1 border rounded-lg overflow-hidden transition ${index === i
									? "border-blue-600 ring-2 ring-blue-300"
									: "border-gray-300 hover:border-blue-400"
									}`}
							>
								<img
									src={preview.thumbUrl}
									alt={`Thumbnail ${i + 1}`}
									className="object-cover w-full h-full"
								/>
							</button>
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
};

export default ProductPreviews;