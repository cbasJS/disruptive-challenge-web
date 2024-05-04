const SearchInput: React.FC = () => {
  return (
    <div className="mt-14 flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Buscar temática
            </label>
            <div className="mt-2">
              <input
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
                name="email"
                placeholder="Ingresa un título"
                required
                type="email"
              />
            </div>
            <div className="py-3 sm:flex sm:flex-row-reverse">
              <button
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-75 sm:ml-3 sm:w-auto"
                onClick={() => void 0}
                type="button"
              >
                Buscar
              </button>
              <button
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => void 0}
                // ref={cancelButtonRef}
                type="button"
              >
                Borrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
