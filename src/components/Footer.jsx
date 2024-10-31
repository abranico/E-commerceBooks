import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Envíos
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Ficción
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  No ficción
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Infantil
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-300">
                Facebook
              </Link>
              <Link to="#" className="hover:text-gray-300">
                Twitter
              </Link>
              <Link to="#" className="hover:text-gray-300">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 LibroStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
