import { Dialog, Transition } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { initPermissionCheckboxes } from '../../utils/constants/index.ts';

type Props = {
  isVisible: boolean;
  setOpen: (status: boolean) => void;
};

const CreateTematicModal: React.FC<Props> = ({ isVisible, setOpen }) => {
  const [errorsOnField, setErrorsOnField] = useState('');
  const [errorServer, setErrorServer] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tematicName, setTematicName] = useState('');
  const [permissionCheckboxes, setPermissionCheckboxes] = useState(
    initPermissionCheckboxes,
  );
  const [userLS] = useLocalStorage('user');

  const mutation = useMutation({
    mutationFn: (newTematic) => {
      return axios.post(`${process.env.DOMAIN_URL}/api/tematic`, newTematic);
    },
  });

  const validFields = () => {
    if (!tematicName) {
      setErrorsOnField('El nombre de la tematica es requerido!');
      return false;
    } else if (!thumbnail) {
      setErrorsOnField('El url de la miniatura es requerido!');
      return false;
    }
    setErrorsOnField('');
    return true;
  };

  const handleOnSubmit = () => {
    if (validFields()) {
      mutation.mutate({
        allowImage: permissionCheckboxes[0].checked,
        allowText: permissionCheckboxes[2].checked,
        allowVideo: permissionCheckboxes[1].checked,
        createdInfo: {
          user: {
            id: userLS._id,
            userName: userLS.userName,
          },
        },
        name: tematicName,
        thumbnailImage: thumbnail,
      });
    }
  };

  const onChangeCheckbox: (value: any) => void = (value) => {
    console.log(value);
    const newValue = permissionCheckboxes.map((data) => {
      if (data.id === value.id) {
        return value;
      }
      return data;
    });
    setPermissionCheckboxes(newValue);
  };

  if (mutation.isSuccess) {
    alert('La tematica se ha creado correctament!');
    setErrorsOnField('');
    setErrorServer('');
    setThumbnail('');
    setTematicName('');
    setPermissionCheckboxes(initPermissionCheckboxes);
    setOpen(false);
  }

  useEffect(() => {
    if (mutation.isError) {
      setErrorServer(mutation.error.response.data.error);
      console.error(mutation.error);
    }
  }, [mutation]);

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
                      <Dialog.Description className="mt-2 w-full text-left">
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
                            onChange={(e) => setTematicName(e.target.value)}
                            placeholder="Ingresa el nombre de la tematica"
                            type="text"
                            value={tematicName}
                          />
                        </div>
                        <label
                          className="mt-4 block text-sm font-medium leading-6 text-gray-900"
                          htmlFor="thumbnail-name"
                        >
                          Url de la miniatura
                        </label>
                        <div className="mt-2">
                          <input
                            autoComplete="off"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="thumbnail-name"
                            name="thumbnail-name"
                            onChange={(e) => setThumbnail(e.target.value)}
                            placeholder="Ingresa la url de la miniatura"
                            type="text"
                            value={thumbnail}
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
                                  onChange={(e) =>
                                    onChangeCheckbox({
                                      ...data,
                                      checked: !data.checked,
                                    })
                                  }
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
                        {errorsOnField && (
                          <p className="mt-4 space-y-3 text-sm text-red-500">
                            {errorsOnField}
                          </p>
                        )}
                        {errorServer && (
                          <p className="mt-4 space-y-3 text-sm text-red-500">
                            {errorServer}
                          </p>
                        )}
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-75 sm:ml-3 sm:w-auto"
                    onClick={handleOnSubmit}
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
