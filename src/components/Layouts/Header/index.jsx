import { Dialog, Transition } from '@headlessui/react';
import { useState, useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';

const FORM_TYPE = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const autoFocusRef = useRef(null);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-2"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:flex lg:flex-1 lg:justify-end items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => {
                setFormType(FORM_TYPE.REGISTER);
                setIsOpen(true);
              }}
            >
              Đăng ký
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setFormType(FORM_TYPE.LOGIN);
                setIsOpen(true);
              }}
            >
              Đăng nhập
            </button>
          </div>
        </nav>
      </header>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          className="relative z-10"
          onClose={setIsOpen}
          initialFocus={autoFocusRef}
        >
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="absolute block top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="text-slate-400 hover:text-black hover:cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        setFormType(null);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Login Form */}
                  {formType === FORM_TYPE.LOGIN ? (
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Đăng nhập vào blog
                        </h2>
                      </div>
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ref={autoFocusRef}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Mật khẩu
                              </label>
                              <div className="text-sm">
                                <button
                                  type="button"
                                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                  Quên mật khẩu?
                                </button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Đăng nhập
                            </button>
                          </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                          Bạn chưa có tài khoản?{' '}
                          <button
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            onClick={() => setFormType(FORM_TYPE.REGISTER)}
                          >
                            Đăng ký
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {/* Register Form */}
                  {formType === FORM_TYPE.REGISTER ? (
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Đăng ký tài khoản
                        </h2>
                      </div>
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ref={autoFocusRef}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Mật khẩu
                              </label>
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label
                                htmlFor="confirm-password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Xác nhận mật khẩu
                              </label>
                            </div>
                            <div className="mt-2">
                              <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="confirm-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Đăng ký
                            </button>
                          </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                          Bạn đã có tài khoản?{' '}
                          <button
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            onClick={() => setFormType(FORM_TYPE.LOGIN)}
                          >
                            Đăng nhập
                          </button>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
