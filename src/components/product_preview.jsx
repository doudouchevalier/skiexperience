import React, { Fragment, useState } from "react";

const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<Fragment>
			<div className="ezy__epoverview1-shape" />

			<div className="position-relative">
				<div className="text-center mb-3 p-md-4">
					<img src={previews[index].previewUrl} alt="" className="img-fluid" />
				</div>

				<Nav className="ezy__epoverview1-gallery">
					{previews.map((preview, i) => (
						<li key={i} onClick={() => setIndex(i)}>
							<img src={preview.thumbUrl} alt="" className="img-fluid" />
						</li>
					))}
				</Nav>
			</div>
		</Fragment>
	);
};