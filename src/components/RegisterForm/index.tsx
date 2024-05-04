import { Link } from 'react-router-dom';
import { typeOfUser } from '../../utils/constants/index.ts';

const RegisterForm: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Crear cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Correo electronico
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="user"
              >
                Usuario
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="user"
                name="user"
                required
                type="text"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="type-user"
              >
                Tipo de usuario
              </label>
            </div>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="type-user"
                name="type-user"
                required
              >
                {typeOfUser.map((data) => (
                  <option key={data.id} value={data.type}>
                    {data.text}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Crear
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <a
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            href="#"
          >
            <Link to="/login">Ya tengo cuenta</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
