const Register = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Ingresá tu mail
        </label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Selecciona tipo de documento
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona
          </option>
          <option value="dni">DNI</option>
          <option value="cuil">CUIL</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Ingresá tu DNI, CUIT o pasaporte
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          INICIAR REGISTRO
        </button>
      </div>
    </form>
  );
};

export default Register;
