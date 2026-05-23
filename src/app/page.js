
import HeroSection from "@/Components/Banner";

import DocSpeciality from "@/Components/DocSpeciality";
import DoctorPage from "@/Components/Doctors";

import Promotion from "@/Components/Promotion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DocSpeciality />
      <DoctorPage />
    
      <Promotion />
    </div>
  );
}
