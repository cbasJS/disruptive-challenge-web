import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Entrar
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
                autoComplete="email"
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
                htmlFor="password"
              >
                Usuario
              </label>
            </div>
            <div className="mt-2">
              <input
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <a
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            href="#"
          >
            <Link to="/register">Crear cuenta</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
