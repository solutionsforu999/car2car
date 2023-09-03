"use client";


import { useEffect, useRef, useState } from "react";
import ComboBoxInput from "./combobox";
import { useDispatch, useSelector } from "react-redux";
import { allCars, allCarsStatus, allfiltredCars, filterallCars, getCars, total_matches } from "@/features/slice";
import Image from "next/image";
import MyModal from "./modal";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const manifactures = [
    "Aiways",
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];
const years = [
    { title: "Year", value: "" },
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
];
const fuels = [
    {
        title: "Fuel",
        value: "",
    },
    {
        title: "Gas",
        value: "Gas",
    },
    {
        title: "Electricity",
        value: "Electricity",
    },
];
const Cars = () => {
    let [mainVal,setMainVal]=useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [targetCar, setTargetCar] = useState(null);
    const [carsFetch, setCarsFetch] = useState([10, 0]);
    const status = useSelector(allCarsStatus);
    const mCars = useSelector(allCars);
    const allcarsCount = useSelector(total_matches);
    const filtredmCars = useSelector(allfiltredCars);
    const dispatch = useDispatch();
    const models = useRef();
    const yearsSelection = useRef();
    const fuelsSelection = useRef();
    const brandName = useRef();
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCars(carsFetch));
        } else if (status === 'success' && document.querySelector('.show-more')) {
            document.querySelector('.show-more').style.display = 'block';
        }
    }, [status]);
    const fetchMore = () => {
        document.querySelector('.show-more').style.display = 'none';
        dispatch(getCars([10, carsFetch[0]]));
        setCarsFetch([10, carsFetch[1] + 10]);
        return
    }
    const filterCars = () => {
        const required = { brand: brandName.current.value, model: models.current.value, start_of_production_year: yearsSelection.current.value, fuel_type: fuelsSelection.current.value }
        dispatch(filterallCars(required))
        return
    }
    return (
        <div id='cars' className="container-lg padding-x padding-y max-w-[1440px] mt-12 mx-auto">
            <div className="home__text-container  mx-2">
                <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                <p>Explore out cars you might like</p>
            </div>
            <div className="flex flex-col flex-wrap gap-3">
                <div className="flex justify-center flex-auto max-w-lg mx-auto" >
                    <input  ref={brandName} className="m-5 manifactures-list w-1/2 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2 px-5" placeholder="BMW..." onChange={filterCars}/>
                    {/* <ComboBoxInput mainVal={mainVal} listUpdated={filterCars} myvariants={manifactures} /> */}
                    <input ref={models} onChange={filterCars} className="m-5 w-1/2 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2 px-5" placeholder="Civic..." />
                </div>

                <div className="flex justify-center flex-auto gap-3">
                    <select ref={yearsSelection} onChange={filterCars} className=" text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3 px-6 rounded-xl outline-none">
                        {years.map((year) =>
                            <option value={year.value} key={year.value}>{year.title}</option>
                        )}
                    </select>
                    <select ref={fuelsSelection} onChange={filterCars} className='text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3 px-6 rounded-xl ms-3 outline-none'>
                        {fuels.map((fuel) =>
                            <option value={fuel.value} key={fuel.value}>{fuel.title}</option>
                        )}
                    </select>
                </div>
            </div>
            {/* <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {status === 'success' || status === 'loading' && mCars.length !== 0 ? [mCars.map((car, index) =>
                    <div className="car shadow-lg rounded-lg p-4 hover:shadow-xl" key={`car${index}`}>
                        <div className="my-1"><h2 className="font-bold text-3xl capitalize ">{car.title.substring(0, 30)}....</h2></div>
                        <p className="flex justify-start">
                            <span className="self-start text-xs">$</span>
                            <span className="text-2xl font-semibold">{56}</span>
                            <span className="self-end">/day</span>
                        </p>
                        <div className="relative w-full my-3 h-40 object-contain">
                            <Image className="objet-contain" src="/hero.png" width={540} height={80} alt={car.model} />
                        </div>
                        <div className="specs grid grid-cols-3 items-center gap-5">
                            <div className="flex flex-col items-center gap-5"><Image src='/steering-wheel.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.number_of_gears_and_type_of_gearbox.split(' ')[2]}</span></div>
                            <div className="flex flex-col items-center gap-5 text-center"><Image src='/tire.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.drive_wheel}</span></div>
                            <div className="flex flex-col items-center gap-5"><Image src='/gas.svg' width={30} height={60} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.fuel_type}</span></div>
                        </div>
                        <button type='button' onClick={() => [setTargetCar(car), setIsOpen(true)]} className="specs-btn py-2 text-white w-full rounded-full bg-primary-blue hidden">
                            <div className="grid grid-cols-4">
                                <span className="col-span-3 mt-1">See More </span>
                                <span><Image src='/right-arrow.svg' alt='right-arrow' width='30' height='30' /></span>
                            </div>
                        </button>

                    </div>),
                <div className='show-more items-center m-auto'>
                    <button type='button' onClick={fetchMore} className='hover:shadow-lg py-2 px-5 rounded-full bg-primary-blue text-white'>Show More</button>
                </div>,
                <MyModal object={targetCar} isClosed={(data) => [setIsOpen(data), setTargetCar(null)]} isOpen={isOpen} />
                ] : (status === 'loading' && mCars.length === 0 ? <CircularProgress color="primary" /> : (status === 'failed' && <Alert severity="warning">Failed can't fetch!</Alert>))}
                {status === 'loading' && mCars.length !== 0 ? <div>
                    <CircularProgress color="primary" />
                </div> : (status === 'failed' && mCars.length !== 0 && <Alert severity="warning" className="items-center">Failed can't fetch!</Alert>)}

            </div> */}
            {models.current?.value === '' && yearsSelection.current?.value === '' && fuelsSelection.current?.value === '' && document.querySelector('.manifactures-list')?.value === '' ?
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    {status === 'success' || status === 'loading' && mCars.length !== 0 ? [mCars.map((car, index) =>
                        <div className="border  border-grey-150 car shadow-lg rounded-lg p-4 hover:shadow-xl" key={`car${index}`}>
                            <div className="car-header my-1">
                                <h2 className="font-bold text-3xl capitalize ">{car.title.substring(0, 30)}....</h2>
                                
                            <p className="flex justify-start">
                                <span className="self-start text-xs">$</span>
                                <span className="text-2xl font-semibold">{56}</span>
                                <span className="self-end">/day</span>
                            </p>
                            </div>
                            <div className="my-5 object-contain">
                                <Image className="m-auto items-center object-contain" src="/hero.png" width={540} height={80} alt={car.model} />
                            </div>
                            <div className="specs grid grid-cols-3 items-center gap-5">
                                <div className="flex flex-col items-center gap-5"><Image src='/steering-wheel.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.seats}</span></div>
                                <div className="flex flex-col items-center gap-5 text-center"><Image src='/tire.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.acceleration_0_100_kmh ? car.acceleration_0_100_kmh : 'Not annonced'}</span></div>
                                <div className="flex flex-col items-center gap-5"><Image src='/gas.svg' width={30} height={60} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.fuel_type}</span></div>
                            </div>
                            <button type='button' onClick={() => [setTargetCar(car), setIsOpen(true)]} className="specs-btn py-2 mt-50 text-white w-full rounded-full bg-primary-blue hidden">
                                <div className="grid grid-cols-4">
                                    <span className="col-span-3 mt-1">See More </span>
                                    <span><Image src='/right-arrow.svg' alt='right-arrow' width='30' height='30' /></span>
                                </div>
                            </button>

                        </div>),
                    <div className={mCars.length !== allcarsCount ? 'block items-center m-auto' : 'none items-center m-auto'}>
                        <button type='button' onClick={fetchMore} className='show-more hover:shadow-lg py-2 px-5 rounded-full bg-primary-blue text-white'>Show More</button>
                    </div>,
                    // <MyModal object={targetCar} isClosed={(data) => [setIsOpen(data), setTargetCar(null)]} isOpen={isOpen} />
                    ] : (status === 'loading' && mCars.length === 0 ? <CircularProgress className="col-span-3 items-center m-auto" color="primary" /> : (status === 'failed' && <Alert className="col-span-3 items-center m-auto" severity="warning">Failed can't fetch!</Alert>))}
                    {status === 'loading' && mCars.length !== 0 ? 
                    <div className="grid grid-cols-1 items-center">
                        <CircularProgress  color="primary" />
                    </div> : (status === 'failed' && mCars.length !== 0 && <Alert severity="warning" className="col-span-3 items-center m-auto ">Failed can't fetch!</Alert>)}

                </div> :
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    {filtredmCars.length === 0 && status === 'success' ? <Alert className="col-span-3 items-center m-auto " severity="info">Change Filter Settings!</Alert>
                        :
                        filtredmCars.map((car, index) =>
                            <div className="border  border-grey-150 car shadow-lg rounded-lg p-4 hover:shadow-xl" key={`car${index}`}>
                                <div className="my-1"><h2 className="font-bold text-3xl capitalize ">{car.title.substring(0, 30)}....</h2></div>
                                <p className="flex justify-start">
                                    <span className="self-start text-xs">$</span>
                                    <span className="text-2xl font-semibold">{56}</span>
                                    <span className="self-end">/day</span>
                                </p>
                                <div className="my-5 object-contain">
                                    <Image className="m-auto items-center objet-contain" src="/hero.png" width={540} height={80} alt={car.model} />
                                </div>
                                <div className="specs grid grid-cols-3 items-center gap-5">
                                    <div className="flex flex-col items-center gap-5"><Image src='/steering-wheel.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.seats}</span></div>
                                    <div className="flex flex-col items-center gap-5 text-center"><Image src='/tire.svg' width={30} height={30} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.acceleration_0_100_kmh ? car.acceleration_0_100_kmh : 'Not annonced'}</span></div>
                                    <div className="flex flex-col items-center gap-5"><Image src='/gas.svg' width={30} height={60} alt={'mode'} /><span style={{ minHeight: '5rem' }}>{car.fuel_type}</span></div>
                                </div>
                                <button type='button' onClick={() => [setTargetCar(car), setIsOpen(true)]} className="specs-btn py-2 text-white w-full rounded-full bg-primary-blue hidden">
                                    <div className="grid grid-cols-4">
                                        <span className="col-span-3 mt-1">See More </span>
                                        <span><Image src='/right-arrow.svg' alt='right-arrow' width='30' height='30' /></span>
                                    </div>
                                </button>

                            </div>)}
                </div>}

            <MyModal object={targetCar} isClosed={(data) => [setIsOpen(data), setTargetCar(null)]} isOpen={isOpen} />


        </div>
    );
}
export default Cars;