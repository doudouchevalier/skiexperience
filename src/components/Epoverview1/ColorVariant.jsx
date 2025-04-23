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
							className={`py-2 px-4 rounded-full border text-sm cursor-pointer transition-colors ${
								selectedColor === item.value
									? "bg-blue-600 text-white border-blue-600"
									: "bg-gray-100 text-blue-600 border-blue-50 hover:bg-blue-200"
							}`}
							onClick={() => onChange(item.id)} 
						>
							{item.label}
						</button>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default ColorVariant;
