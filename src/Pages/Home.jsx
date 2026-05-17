import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Sections/HeroSection';
import SearchPanel from '../Sections/SearchPanel';
import TrustStrip from '../Sections/TrustTrip';
import DestinationSection from '../Sections/DestinationSection';
import ExperienceSection from '../Sections/ExperienceSection';
import PackageSection from '../Sections/PackageSection';
import HospitalitySection from '../Sections/HospitalitySection';
import TestimonialSection from '../Sections/TestimonalSection';
import CTASection from '../Sections/CTASection';
import Footer from '../Components/Footer';
import ContactSection from '../Sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-[#050816] min-h-screen text-white">
      <Navbar />
      <HeroSection/>
      
      <TrustStrip/>
      <DestinationSection/>
      <ExperienceSection/>
      <PackageSection/>
      <HospitalitySection/>
      <TestimonialSection/>
      <CTASection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}