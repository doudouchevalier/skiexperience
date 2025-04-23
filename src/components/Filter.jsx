import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ gender, category, brand, onGenderChange, onCategoryChange, onBrandChange, categories, brands }) => {
	return (
		<div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
			{/* Genre */}
			<select
				value={gender}
				onChange={(e) => onGenderChange(e.target.value)}
				className="border px-4 py-2 rounded w-48 sm:w-52 md:w-56 lg:w-60 h-10"
			>
				<option value="">All Genders</option>
				<option value="man">Man</option>
				<option value="woman">Woman</option>
			</select>

			{/* Category */}
			<select
				value={category}
				onChange={(e) => onCategoryChange(e.target.value)}
				className="border px-4 py-2 rounded w-48 sm:w-52 md:w-56 lg:w-60 h-10"
			>
				<option value="">All Categories</option>
				{categories.map((c) => (
					<option key={c} value={c}>
						{c}
					</option>
				))}
			</select>

			{/* Brand */}
			<select
				value={brand}
				onChange={(e) => onBrandChange(e.target.value)}
				className="border px-4 py-2 rounded w-48 sm:w-52 md:w-56 lg:w-60 h-10"
			>
				<option value="">All Brands</option>
				{brands.map((b) => (
					<option key={b} value={b}>
						{b}
					</option>
				))}
			</select>

		</div>
	);
};

Filter.propTypes = {
	gender: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	onGenderChange: PropTypes.func.isRequired,
	onCategoryChange: PropTypes.func.isRequired,
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
