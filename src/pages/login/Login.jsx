import { FaSquareGithub, FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
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
            <button className="bg-blue-600 text-white rounded-md py-2 px-6 w-3/4 mb-4">
              Continuar
            </button>
          </form>
        )}

        <div className="text-gray-500 text-sm mb-2">Continuar con</div>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-gray-100 p-3 rounded-full shadow-md">
            <FaSquareGithub />
          </button>
          <button className="bg-gray-100 p-3 rounded-full shadow-md">
            <FaFacebook />
          </button>
          <button className="bg-gray-100 p-3 rounded-full shadow-md">
            <FaGooglePlusG />
          </button>
        </div>

        <div className="text-gray-400 text-xs flex gap-4">
          <a href="#" className="hover:underline">
            Términos y condiciones
          </a>
          <a href="#" className="hover:underline">
            Disclosures
          </a>
          <a href="#" className="hover:underline">
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
