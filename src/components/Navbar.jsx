import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          E-CommerceBooks
        </Link>

        {/* Input de búsqueda */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Ingresar título, autor, ISBN, palabra clave o categoría"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Menú de navegación */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li>
            <Link to="/login" className="hover:text-orange-500">
              Acceder / Registrarme
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center hover:text-orange-500">
              Lista de deseos <FaHeart className="ml-2" />
            </Link>
          </li>
          <li>
            <Link to="" className="flex items-center hover:text-orange-500">
              AR$ 0,00 <FaShoppingCart className="ml-2" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
