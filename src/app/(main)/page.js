import Image from "next/image";
import Banner from "../components/home/Banner";
import Feature from "../components/home/Feature";
import Subjects from "../components/home/Subjects";
import Stats from "../components/home/Stats";
import Tutors from "../components/home/Tutors";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/Cta";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-10 py-10 sm:py-14 lg:py-20">

      {/* Banner */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Banner />
      </div>

{/* Stats */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Stats />
      </div>

      {/* Feature */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Feature />
      </div>

      {/* Subjects */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Subjects />
      </div>

      {/* Tutors */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Tutors />
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <Testimonials />
      </div>

      {/* CTA */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <CTA />
      </div>

    </main>
  );
}