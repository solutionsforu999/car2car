import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="sm:px-16 px-6 py-4 max-w-[1440px] mx-auto flex justify-between flex-wrap gap-5">
                <Link href={'/'} className='flex justify-center items-center'>
                    <Image src='/logo.svg' alt='Car Hub Logo' className='object-contain' width='120' height='11' />
                </Link>
                <div>
                <button className="bg-emerald-500 rounded-full py-2 px-5 text-white mx-2">Sign Up</button>
                <button className="bg-primary-blue rounded-full py-2 px-5 text-white mx-2">Sign In</button>
                {/* <Modal/> */}
                </div>
            </nav>
        </header>
    )
}
export default Navbar;