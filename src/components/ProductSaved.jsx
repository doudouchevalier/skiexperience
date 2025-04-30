import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductSaved = ({ item, onRemove }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 mr-80 ml-80 flex items-center gap-4">
      <Link to={`/product/${item.id}`} className="flex items-center gap-4 flex-1">
      <img
          src={item.front_image}
          alt={item.name}
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain rounded-lg bg-white transition-all"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.brand}</p>
          <p className="text-blue-600 font-semibold text-lg mt-1">{item.price}€</p>
          <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
        </div>
      </Link>
      <button
        onClick={() => onRemove(item.id)}
        className="py-2 px-3 bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200"
      >
        Retirer
      </button>
    </div>
  );
};

ProductSaved.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductSaved;
