import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ColorVariant from "./Epoverview1/ColorVariant";
import ProductPreviews from "./Epoverview1/ProductPreviews";
import QtyField from "./Epoverview1/QtyField";
import SizeVariant from "./Epoverview1/SizeVariant";


const product = {
	title: "Norrona GoreTex Jacket",
	previews: [
		{
			previewUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,bo_180px_solid_rgb:f5f5f5,b_rgb:F5F5F5,w_640,h_640/Auto%2F1838-24-2011-packshot-f.jpg",
			thumbUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,bo_180px_solid_rgb:f5f5f5,b_rgb:F5F5F5,w_640,h_640/Auto%2F1838-24-2011-packshot-f.jpg",
		},
		{
			previewUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,bo_180px_solid_rgb:f5f5f5,b_rgb:F5F5F5,w_640,h_640/Auto%2F1838-24-2011-packshot-b.jpg",
			thumbUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,bo_180px_solid_rgb:f5f5f5,b_rgb:F5F5F5,w_640,h_640/Auto%2F1838-24-2011-packshot-b.jpg",
		},
		{
			previewUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,b_rgb:F5F5F5,w_1000,h_1000/Auto%2F1838-24-2011-model-e-1-4x5.jpg",
			thumbUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,b_rgb:F5F5F5,w_1000,h_1000/Auto%2F1838-24-2011-model-e-1-4x5.jpg",
		},
		{
			previewUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,b_rgb:F5F5F5,w_1000,h_1000/Auto%2F1838-24-2011-model-b-4x5.jpg",
			thumbUrl: "https://res.cloudinary.com/norrona/image/upload/c_pad,f_auto,d_imgmissing.jpg,fl_progressive.lossy,q_auto,b_rgb:F5F5F5,w_1000,h_1000/Auto%2F1838-24-2011-model-b-4x5.jpg",
		},
	],
	rating: 5.0,
	rateCount: 1256,
	price: 359.40,
	colorVariants: [
		{ label: "Multi", value: "Multi", title: "Multi" },
		{ label: "Red", value: "Red", title: "Red" },
		{ label: "Green", value: "Green", title: "Green" },
		{ label: "Blue", value: "Blue", title: "Blue" },
		{ label: "Black", value: "Black", title: "Black" },
	],
	sizeVariants: [
		{ label: "XXS", value: "SSX", title: "Extra Extra Small" },
		{ label: "XS", value: "XS", title: "Extra Small" },
		{ label: "S", value: "S", title: "Small" },
		{ label: "M", value: "M", title: "Medium" },
		{ label: "L", value: "L", title: "Large" },
		{ label: "XL", value: "XL", title: "Extra Large" },
		{ label: "XXL", value: "XXL", title: "Extra Extra Large" },
		{
			label: "XXXL",
			value: "XXXL",
			title: "Extra extra extra large",
			disabled: true,
		},
	],
};

const Epoverview1 = () => {
	const [formData, setFormData] = useState({
		color: "Multi",
		size: "XL",
		qty: 1,
	});

	const setField = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-2 gap-6">
					<div className="col-span-2 md:col-span-1 relative">
						<ProductPreviews previews={product.previews} />
					</div>
					<div className="col-span-2 md:col-span-1">
						<div className="mb-6 lg:mb-12">
							<h1 className="text-2xl leading-none md:text-4xl font-medium mb-4">
								{product.title}
							</h1>
							<p className="opacity-70 mb-6">
								{product.rating.toFixed(1)} out of ({product.rateCount}){" "}
								<a href="#!" className="text-blue-600 font-medium ml-1">
									Reviews
								</a>
							</p>
							<h3 className="text-2xl text-blue-600 font-medium">
								{product.price}€
							</h3>
						</div>

						<form action="#!">
							<div className="mb-6">
								<ColorVariant
									selectedColor={formData.color}
									onChange={setField}
									variants={product.colorVariants}
								/>

							</div>
							<div className="mb-6">
								<SizeVariant selectedSize={formData.size} onChange={setField} variants={product.sizeVariants} />
							</div>
							{/* <div className="mb-6">
								<h5 className="font-medium mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div> */}

							<div className="flex items-center my-7">
								<button className="bg-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-6 py-2.5 mr-2">
									Add To Cart
								</button>
								<button className="bg-blue-600 text-white rounded text-xl hover:bg-opacity-90 py-1.5 px-3 mr-2">
									<FontAwesomeIcon icon={faHeart} />
								</button>
								<button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">
									<FontAwesomeIcon icon={faShareAlt} /> Share
								</button>
							</div>

							<p className="opacity-70 lg:mr-56 xl:mr-80">
								Notre veste imperméable la plus polyvalente avec la nouvelle membrane ePE.
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Epoverview1;