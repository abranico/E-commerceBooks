import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Envíos
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">
              Categorías
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Ficción
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  No ficción
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline hover:text-amber-400 transition-colors duration-200"
                >
                  Infantil
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">
              Redes sociales
            </h3>
            <div className="flex space-x-2">
              <Link
                to="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaFacebook />
              </Link>
              <Link
                to="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                to="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500">
            &copy; 2024 E-CommerceBooks. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
