import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// const people = [
//   "Acura",
//   "Alfa Romeo",
//   "Aston Martin",
//   "Audi",
//   "Bentley",
//   "BMW",
//   "Buick",
//   "Cadillac",
//   "Chevrolet",
//   "Chrysler",
//   "Citroen",
//   "Dodge",
//   "Ferrari",
//   "Fiat",
//   "Ford",
//   "GMC",
//   "Honda",
//   "Hyundai",
//   "Infiniti",
//   "Jaguar",
//   "Jeep",
//   "Kia",
//   "Lamborghini",
//   "Land Rover",
//   "Lexus",
//   "Lincoln",
//   "Maserati",
//   "Mazda",
//   "McLaren",
//   "Mercedes-Benz",
//   "MINI",
//   "Mitsubishi",
//   "Nissan",
//   "Porsche",
//   "Ram",
//   "Rolls-Royce",
//   "Subaru",
//   "Tesla",
//   "Toyota",
//   "Volkswagen",
//   "Volvo",
// ];
export default function ComboBoxInput({myvariants,inputValue,mainVal,listUpdated}) {
  const[selected,setSelected]=useState('');
  const [query, setQuery] = useState('');
 
  // const inputUpdated=(eve)=>{
  //   changeSelect(eve.target.value)
  // }
  const filteredmyvariants =
    query === ''
      ? myvariants
      : myvariants.filter((myvariant) =>
      myvariant
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className='lg:w-1/2 sm:w-1/4'>
      <Combobox className='manifactues-options' value={mainVal} onChange={listUpdated}>
        <div className="relative">
          <div className="relative w-full border cursor-default overflow-hidden rounded-lg bg-white text-left shadow-lg outline-none  sm:text-sm">
            <Combobox.Input
              className="manifactures-list w-full text-xl focus:outline-none py-3 px-6 ms-3"
              displayValue={(myvariant) => myvariant}
              onChange={listUpdated}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
          
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredmyvariants.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredmyvariants.map((myvariant) => (
                  <Combobox.Option
                    key={myvariant}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={myvariant}
                  >
                    {({ mainVal, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            mainVal ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {myvariant}
                        </span>
                        {mainVal ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
