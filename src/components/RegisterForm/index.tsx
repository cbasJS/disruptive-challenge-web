import { useState } from 'react';
import { Link } from 'react-router-dom';
import { typeOfUser } from '../../utils/constants/index.ts';
import { validateEmail } from '../../utils/scripts/index.ts';

type Props = {
  error?: string;
  onSubmit: (mail: string, user: string, typeOfUser: string) => void;
};

const RegisterForm: React.FC<Props> = ({ error, onSubmit }) => {
  const [mail, setMail] = useState('');
  const [user, setUser] = useState('');
  const [typeOfUserValue, setTypeOfUserValue] = useState('reader');
  const [fieldsError, setFieldsError] = useState<string | undefined>();

  const validFields = () => {
    if (!mail) {
      setFieldsError('Todos los campos son requeridos.');
      return false;
    } else if (!validateEmail(mail)) {
      setFieldsError('El correo no cuenta con el formato requerido');
      return false;
    } else if (!user) {
      setFieldsError('Todos los campos son requeridos.');
      return false;
    } else if (!typeOfUserValue) {
      setFieldsError('Todos los campos son requeridos.');
      return false;
    }
    setFieldsError('');
    return true;
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (validFields()) {
      onSubmit(mail, user, typeOfUserValue);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Crear cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
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
                onChange={(e) => setMail(e.target.value)}
                value={mail}
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
                onChange={(e) => setUser(e.target.value)}
                // required
                type="text"
                value={user}
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
                onChange={(e) => setTypeOfUserValue(e.target.value)}
                // required
                value={typeOfUserValue}
              >
                {typeOfUser.map((data) => (
                  <option key={data.id} value={data.type}>
                    {data.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {error && (
            <div>
              <p className=" text-red-500">{error}</p>
            </div>
          )}
          {fieldsError && (
            <div>
              <p className=" text-red-500">{fieldsError}</p>
            </div>
          )}
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
