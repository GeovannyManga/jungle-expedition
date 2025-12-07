'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from "../components/NavBar";
import CardRegion from "../components/CardRegion";
import CarrucelRegion from "../components/CarrucelRegion";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Legal from "../components/legal";


// 🔁 Carga dinámica del componente con SSR desactivado
const Banner = dynamic(() => import("../components/Banner"), { ssr: false });


export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CardRegion />
      <Cards />
      <Legal />
      <CarrucelRegion />
      <Footer />
    </div>
  );
}
