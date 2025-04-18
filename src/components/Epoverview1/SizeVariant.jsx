import React from "react";

const SizeVariant = ({ selectedSize, onChange, variants }) => {
	const handleSizeChange = (value) => {
		if (variants.find((size) => size.value === value)?.disabled) {
			return;
		}
		onChange({
			target: {
				name: "size",
				type: "radio",
				value: value,
			},
		});
	};

	return (
		<div className="mb-6">
			<h5 className="font-medium mb-2">
				Size:{" "}
				<span className="opacity-50">
					{selectedSize &&
						variants.find((size) => size.value === selectedSize)?.title}
				</span>
			</h5>
			<div className="flex flex-wrap gap-2 mb-2">
				{variants.map((size) => (
					<React.Fragment key={size.label}>
						<input
							type="radio"
							className="absolute hidden"
							autoComplete="off"
							name="size"
							value={size.value}
							checked={selectedSize === size.value}
							onChange={() => handleSizeChange(size.value)}
						/>
						<label
							className={`bg-gray-100 py-1 px-4 rounded-full border text-sm mt-1 hover:bg-slate-100
                ${selectedSize === size.value
									? "border-blue-600"
									: "border-blue-50"
								}
                ${size.disabled
									? "line-through opacity-40 cursor-not-allowed"
									: "cursor-pointer"
								}`}
							onClick={() => handleSizeChange(size.value)}
						>
							{size.label}
						</label>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default SizeVariant;
