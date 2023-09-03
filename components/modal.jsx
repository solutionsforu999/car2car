import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function MyModal({ isOpen, isClosed, object }) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => isClosed(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-50"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-50"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-50"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {object && object.title?.substring(0,30).toUpperCase()}....
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Brand :</span>
                      <span className='col-span-3'>{object && object.brand}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Model :</span>
                      <span className='col-span-3'>{object && object.model}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Modification_engine :</span>
                      <span className='col-span-3'>{object && object.modification_engine}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>start_of_production_year:</span>
                      <span className='col-span-3'>{object && object.start_of_production_year}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Body_type :</span>
                      <span className='col-span-3'>{object && object.body_type}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Seats :</span>
                      <span className='col-span-3'>{object && object.seats}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Doors :</span>
                      <span className='col-span-3'>{object && object.doors}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Fuel_type :</span>
                      <span className='col-span-3'>{object && object.fuel_type}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Speed_0_100_kmh :</span>
                      <span className='col-span-3'>{object && object.acceleration_0_100_kmh}</span>
                    </div>
                    <div className='grid grid-cols-6 gap-x-2'>
                      <span className='col-span-3'>Assisting_systems :</span>
                      <span className='col-span-3'>{object && object.assisting_systems}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => isClosed(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
