"use client";
import { NextSeo } from "next-seo";
import Hero from "./components/Hero";
import Popular from "./components/Popular"
import PopularCard from "./components/PopularCard"
import RecommendedCard from "./components/RecommendedCard"
import NewCard from "./components/NewCard";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Booking Hotel Termurah"
        description="Temukan hotel terbaik dengan harga terbaik di Nirvana App."
        openGraph={{
          title: "Booking Hotel Termurah",
          description: "Temukan hotel terbaik dengan harga terbaik di Nirvana App.",
          url: "https://nirvana-app.com/",
          images: [
            {
              url: "https://nirvana-app.com/og-home.jpg",
              width: 1200,
              height: 630,
              alt: "Booking Hotel Termurah",
            },
          ],
        }}
      />
      <main>
       
        <Hero />
        <Popular />
        <RecommendedCard />
        <NewCard />
        <About />
        <Faq />
        <Footer />
      </main>
    </>
  )
}
