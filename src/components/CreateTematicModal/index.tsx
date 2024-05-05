import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { permissionCheckboxes } from '../../utils/constants/index.ts';

type Props = {
  isVisible: boolean;
  setOpen: (status: boolean) => void;
};

const CreateTematicModal: React.FC<Props> = ({ isVisible, setOpen }) => {
  return (
    <Transition.Root as={Fragment} show={isVisible}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Crear temática
                      </Dialog.Title>
                      <Dialog.Description
                        action="#"
                        as="form"
                        className="mt-2 w-full text-left "
                        method="POST"
                      >
                        <label
                          className="block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="tematic-name"
                        >
                          Nombre
                        </label>
                        <div className="mt-2">
                          <input
                            autoComplete="off"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="tematic-name"
                            name="tematic-name"
                            placeholder="Ingresa el nombre de la tematica"
                            required
                            type="text"
                          />
                        </div>
                        <label
                          className="mt-4 block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="tematic-permissions"
                        >
                          Permisos
                        </label>
                        <div className="mt-2 grid space-y-3">
                          {permissionCheckboxes.map((data, index) => (
                            <div
                              className="relative flex items-start"
                              key={index}
                            >
                              <div className="mt-1 flex h-5 items-center">
                                <input
                                  aria-describedby="hs-checkbox-delete-description"
                                  checked={data.checked}
                                  className="rounded border-white bg-indigo-600 disabled:pointer-events-none disabled:opacity-50"
                                  id="hs-checkbox-delete"
                                  name="hs-checkbox-delete"
                                  type="checkbox"
                                />
                              </div>
                              <label
                                className="ms-3"
                                htmlFor="hs-checkbox-delete"
                              >
                                <span className="block text-sm text-gray-800">
                                  {data.title}
                                </span>
                                <span
                                  className="block text-sm text-gray-500"
                                  id="hs-checkbox-delete-description"
                                >
                                  {data.description}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-75 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    Aceptar
                  </button>
                  <button
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateTematicModal;
