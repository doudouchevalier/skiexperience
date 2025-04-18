import PropTypes from "prop-types";

const QtyField = ({ name, value, onChange }) => {
	const qtyControl = (qty) =>
		onChange({
			target: {
				name,
				type: "radio",
				value: qty < 1 ? 1 : qty,
			},
		});

	return (
		<div className="h-11 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden">
			<button
				className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20"
				type="button"
				onClick={() => qtyControl(parseInt(value) - 1)}
			>
				-
			</button>
			<input
				className="text-lg font-bold px-4 pl-5 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none"
				type="number"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<button
				className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
				type="button"
				onClick={() => qtyControl(parseInt(value) + 1)}
			>
				+
			</button>
		</div>
	);
};

QtyField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

export default QtyField;