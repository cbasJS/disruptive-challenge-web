import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Crear contenido', to: '/' },
  // { name: 'Crear categoría', to: '/' },
  { name: 'Crear temática', to: '/' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <header className="header-menu absolute inset-x-0 top-0">
      <nav
        aria-label="Global"
        className="header flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            to={'/'}
          >
            Inicio
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <Link
              className="text-sm font-semibold leading-6 text-gray-900"
              key={index}
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            to="/login"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        onClose={setMobileMenuOpen}
        open={mobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5" />
            <button
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    key={index}
                    onClick={() => setMobileMenuOpen(false)}
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                  to="/login"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
