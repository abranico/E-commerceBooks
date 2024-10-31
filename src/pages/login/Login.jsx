import { FaGooglePlus, FaGithub, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import Register from "./components/Register";

const Login = () => {
  const [toggleMenu, setTogleMenu] = useState(false);

  const handleToggle = (value) => {
    setTogleMenu(value);
  };
  return (
    <div className="flex m-auto w-full  ">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="text-center mb-8">
          <i className="text-xl font-bold text-gray-700">E-commersBooks</i>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Bienvenidos
        </h1>

        <div className="flex justify-between w-1/2 mb-6 bg-gray-400 rounded-full p-1">
          <button
            type="button"
            className={`w-1/2 py-2 text-center text-gray-500 font-semibold rounded-full  transition duration-300 ${
              !toggleMenu
                ? "bg-white  shadow-md  "
                : "bg-gray-400 hover:bg-white "
            }`}
            onClick={() => handleToggle(false)}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={`w-1/2 py-2 text-center text-gray-500 font-semibold rounded-full  transition duration-300 ${
              toggleMenu ? "bg-white  shadow-md" : "bg-gray-400 hover:bg-white "
            }`}
            onClick={() => handleToggle(true)}
          >
            Registrarse
          </button>
        </div>

        {toggleMenu ? (
          <Register />
        ) : (
          <form className="w-full flex flex-col items-center mb-4">
            <div className="flex flex-col w-3/4 mb-6">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded-md mb-4 p-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Password"
                className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white rounded-md py-2 px-6 w-1/4 mb-4">
              CONTINUAR
            </button>
          </form>
        )}

        <div className="text-gray-500 text-sm mt-2 mb-4">Continuar con</div>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-100 transform hover:scale-110 active:bg-red-500">
            <FaFacebook />
          </button>

          <button className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-100 transform hover:scale-110 active:bg-blue-500">
            <FaGithub />
          </button>

          <button className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all duration-100 transform hover:scale-110 active:bg-pink-500">
            <FaGooglePlus />
          </button>
        </div>

        <div className="text-gray-400 text-xs flex gap-4">
          <a
            href="#"
            className="hover:text-amber-800 transition-colors duration-200"
          >
            Términos y condiciones
          </a>
          <a
            href="#"
            className="hover:text-amber-800 transition-colors duration-200"
          >
            Ayuda
          </a>
          <a
            href="#"
            className="hover:text-amber-800 transition-colors duration-200"
          >
            Privacidad y política
          </a>
        </div>
      </div>

      <div className="w-1/2 ">
        <img
          src="/public/fondo.jpg"
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
