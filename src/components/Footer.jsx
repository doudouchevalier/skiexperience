import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1 : Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  Panier
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:underline">
                  Favoris
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2 : Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm">
              Vous avez des questions ? Contactez-nous :
            </p>
            <p className="text-sm mt-2">
              Email :{" "}
              <a
                href="mailto:support@skiexperience.com"
                className="hover:underline"
              >
                support@skiexperience.com
              </a>
            </p>
            <p className="text-sm">
              Téléphone :{" "}
              <a href="tel:+33123456789" className="hover:underline">
                +33 1 23 45 67 89
              </a>
            </p>
          </div>

          {/* Section 3 : Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4 : Mentions légales */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ski Experience. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;