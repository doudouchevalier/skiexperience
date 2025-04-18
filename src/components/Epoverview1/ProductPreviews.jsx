import React, { Fragment, useState } from "react";

import PropTypes from "prop-types";

const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<Fragment>
			{/* <div className="absolute rounded-lg bg-blue-50 bottom-12 w-[5000px] h-[5000px] right-[40%]" /> */}

			<div className="relative">
				<div className="text-center mb-4 md:p-6">
					<img
						src={previews[index].previewUrl}
						alt=""
						className="max-w-full min-w-full h-auto"
					/>
				</div>

				<ul className="flex">
					{previews.map((preview, i) => (
						<a href="#!" key={i}>
							<li
								className="w-24 h-24 inline-flex justify-center items-center bg-blue-50 border border-blue-200 rounded-lg mr-2.5 p-2"
								onClick={() => setIndex(i)}
							>
								<img
									src={preview.thumbUrl}
									alt=""
									className="max-w-full h-auto"
								/>
							</li>
						</a>
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