import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import logoSki from "../assets/logoski.png";


// Routes avec sous-menus
const routes = [
<<<<<<< HEAD
	{ name: "Homme", href: "/products?gender=man", isActive: true },
	{ name: "Femme", href: "/products?gender=woman", isActive: false },
	{ name: "Equipement", href: "#", isActive: false },
	{ name: "Marques", href: "#", isActive: false },
=======
  {
    name: "Homme",
    href: "/products?gender=man",
    isActive: true,
    submenu: [
      { label: "Vestes", href: "/products?gender=man&type=vestes" },
      { label: "Pantalons", href: "/products?gender=man&type=pantalons" },
      { label: "Accessoires", href: "/products?gender=man&type=accessoires" },
    ],
  },
  {
    name: "Femme",
    href: "/products?gender=woman",
    isActive: false,
    submenu: [
      { label: "Vestes", href: "/products?gender=woman&type=vestes" },
      { label: "Leggings", href: "/products?gender=woman&type=leggings" },
    ],
  },
  { name: "Equipement", href: "#", isActive: false },
  { name: "Marques", href: "#", isActive: false },
>>>>>>> 3f3c8c2f882604209fa32743a00b5477deae4f7b
];

// Menu principal
const NavMenu = ({ routes }) => (
  <ul className="flex space-x-6 relative">
    {routes.map((route, i) => (
      <li key={i} className="group relative">
        <a
          className={`px-4 py-2 transition-opacity ${
            route.isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
          }`}
          href={route.href}
        >
          {route.name}
        </a>

        {/* Sous-menu (affiché uniquement si sous-menu présent) */}
        {route.submenu && (
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-lg p-4 rounded-md z-50">
            <ul className="grid grid-cols-1 gap-2 min-w-[200px]">
              {route.submenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ul>
);

NavMenu.propTypes = {
  routes: PropTypes.array.isRequired,
};

// Menu icônes (search + panier)
const NavMenu2 = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ul className="flex items-center justify-center mb-2 lg:mb-0">
      <li className="flex items-center space-x-2">
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showSearch ? "w-48 opacity-100" : "w-0 opacity-0"}`}>
          <input
            type="text"
            placeholder="Recherche..."
            className="px-3 py-2 border rounded-full w-full text-sm focus:outline-none"
          />
        </div>
        <button onClick={() => setShowSearch(!showSearch)} className="bg-blue-600 text-white hover:bg-opacity-90 rounded-lg px-4 py-2 ml-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="bg-blue-600 text-white hover:bg-opacity-90 rounded-lg px-4 py-2">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      
      </li>
    </ul>
  );
}

// Composant principal
const Navigation = () => {
  return (
    <div className="ezy__nav5 light py-3 bg-white text-zinc-900 w-full fixed top-0 left-0 z-50">
      <nav className="w-full">
        <div className="flex items-center justify-between px-4">
          <a className="font-black text-3xl" href="/">
            <img src={logoSki} alt="Logo" className="h-10" />
          </a>
          <span onClick={() => (window.location.href = "/")} className="font-black text-3xl min-w-[33%] cursor-pointer">
            Ski Experience
          </span>
          <button
            className="block lg:hidden cursor-pointer h-10 z-20"
            type="button"
            id="hamburger"
          >
            <div className="h-0.5 w-7 bg-black -translate-y-2" />
            <div className="h-0.5 w-7 bg-black" />
            <div className="h-0.5 w-7 bg-black translate-y-2" />
          </button>
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white lg:bg-transparent grow"
            id="navbar"
          >
            <NavMenu routes={routes} />
            <NavMenu2 />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
