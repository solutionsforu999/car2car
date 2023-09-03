"use client";

import Image from "next/image";
import Link from "next/link";
const Hero = () => {
    return (

        <div className="hero">
            <div className="flex-1 pt-36 px-10">
                <h1 className="hero__title">
                    Find,Book,Or Rent Car Easily ,And Quickly!
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus repellendus facilis possimus, quisquam saepe laudantium culpa aut, quia, vero sunt cupiditate neque esse minus libero reprehenderit voluptatem amet omnis!</p>
                <Link href='#cars'><button type="button" className="bg-primary-blue rounded-full py-2 px-5 text-white mt-12">Explore Cars</button></Link>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    {/* <p>test</p> */}
                    <Image src='/hero.png' alt='hero' fill className="object-contain"/>
                </div>
            </div>
        </div>
    );
}
export default Hero;