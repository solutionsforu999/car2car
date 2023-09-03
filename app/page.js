// "use client"

import Cars from "@/components/cars";
import Hero from "@/components/hero";
// import { useState } from "react";


export const metadata = {
  title: 'Car2Car',
  description: 'Discover the Cars Now!',
}
export default function Home() {
  
  return (
    <main>
      <Hero/>
      <Cars/>
    </main>
  )
}
