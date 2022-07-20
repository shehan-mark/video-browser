import React, { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/solid';

const TransitionModal = ({
  children,
  isOpen,
  closeControl
}: {
  children: any;
  isOpen: boolean;
  closeControl: () => void
}) => {

  useEffect(() => {
  }, [isOpen])

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeControl}>
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

        <div className="fixed top-10 z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:w-11/12 sm:p-6 bg-main-color">
                <div>
                  <XCircleIcon className="h-10 w-10 absolute -top-4 -right-4 text-slate-400 cursor-pointer" onClick={closeControl} aria-hidden="true" />
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default TransitionModal;
