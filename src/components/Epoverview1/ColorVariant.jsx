import { Fragment } from "react";

const ColorVariant = ({ selectedColor, onChange, variants }) => {
	return (
		<div className="mb-6">
			<h5 className="font-medium mb-2">
				Color:{" "}
				<span className="opacity-50">
					{selectedColor &&
						variants.find((color) => color.value === selectedColor)?.value}
				</span>
			</h5>
			<div className="flex flex-wrap gap-2 mb-2">
				{variants.map((item, i) => (
					<Fragment key={i}>
						<button
							type="button"
							onClick={() => onChange(item.id)}
							className={`w-24 h-24 rounded border overflow-hidden p-1 transition-colors ${
								selectedColor === item.value
									? "border-blue-600 ring-2 ring-blue-300"
									: "border-gray-300 hover:border-blue-400"
							}`}
						>
							{/* {item.label} */}
							<img
								src={item.front_image}
								alt={item.label}
								className="object-cover w-full h-full"
							/>
						</button>

					</Fragment>
				))}
			</div>
		</div>
	);
};

export default ColorVariant;
