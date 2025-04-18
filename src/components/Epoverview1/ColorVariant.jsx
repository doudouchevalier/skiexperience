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
						<input
							type="radio"
							className="absolute hidden"
							name="color"
							value={item.value}
							checked={selectedColor === item.value}
							onChange={onChange}
						/>
						<label
							className={`bg-gray-100 py-1 px-4 rounded-full border ${selectedColor === item.value
									? "border-blue-600"
									: "border-blue-50"
								} text-sm cursor-pointer hover:bg-gray-200`}
						>
							{item.label}
						</label>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default ColorVariant;